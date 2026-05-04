import { getArticle, getArticlesByCategory, getCategories } from "@/lib/knowledge";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const categories = getCategories();
  const paths: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    const articles = getArticlesByCategory(category);
    articles.forEach((article) => {
      paths.push({
        category,
        slug: article.slug,
      });
    });
  });

  return paths;
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    notFound();
  }

  const sidebarArticles = getArticlesByCategory(category);

  return (
    <Container className="pt-10 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
        <Link href="/knowledge" className="hover:text-cyan-400 transition-colors">Knowledge Base</Link>
        <ChevronRight size={14} />
        <span className="capitalize">{category.replace(/-/g, " ")}</span>
        <ChevronRight size={14} />
        <span className="text-white/80">{article.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 shrink-0">
          <div className="sticky top-24">
            <Link href="/knowledge" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} />
              Back to Hub
            </Link>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              More in {category.replace(/-/g, " ")}
            </h3>
            
            <ul className="flex flex-col gap-2">
              {sidebarArticles.map((item) => {
                const isActive = item.slug === slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/knowledge/${category}/${item.slug}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive 
                          ? "bg-white/10 text-cyan-400 font-medium" 
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            {article.date && (
              <time className="text-sm text-white/40">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            )}
          </div>

          <article className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-code:text-fuchsia-300 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10 prose-img:bg-white prose-img:p-4 prose-img:rounded-xl">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
            >
              {article.content}
            </ReactMarkdown>
          </article>
        </main>
      </div>
    </Container>
  );
}
