import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/knowledge');

export interface KnowledgeArticle {
  slug: string;
  category: string;
  title: string;
  date?: string;
  content: string;
  excerpt?: string;
  order?: number;
}

export function getCategories(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  const items = fs.readdirSync(contentDir);
  const categories = items.filter(item => {
    const fullPath = path.join(contentDir, item);
    return fs.statSync(fullPath).isDirectory();
  });

  const orderMap: Record<string, number> = {
    'machine-learning': 1,
    'reconfigurable-intelligent-surface': 2,
    'integrated-sensing-and-communication': 3,
    'ris-assisted-isac-system': 4,
  };

  return categories.sort((a, b) => {
    const orderA = orderMap[a] || 999;
    const orderB = orderMap[b] || 999;
    return orderA - orderB;
  });
}

export function getArticlesByCategory(category: string): KnowledgeArticle[] {
  const categoryDir = path.join(contentDir, category);
  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir);
  const articles: KnowledgeArticle[] = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(categoryDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: file.replace(/\.md$/, ''),
        category,
        title: data.title || file.replace(/\.md$/, ''),
        date: data.date || '',
        excerpt: data.excerpt || '',
        order: data.order || 999,
        content
      };
    });

  // Sort by order first, then date
  return articles.sort((a, b) => {
    if (a.order !== b.order) {
      return (a.order || 999) - (b.order || 999);
    }
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

export function getArticle(category: string, slug: string): KnowledgeArticle | null {
  const fullPath = path.join(contentDir, category, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    category,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    content
  };
}
