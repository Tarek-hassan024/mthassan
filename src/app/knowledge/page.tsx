import Container from "@/components/Container";
import { getCategories, getArticlesByCategory } from "@/lib/knowledge";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function KnowledgeHub() {
  const categories = getCategories();

  return (
    <Container className="pt-10 pb-20">
      <h1 className="text-3xl font-bold text-white mb-2">Knowledge Base</h1>
      <p className="text-white/70 mb-8 max-w-2xl">
        A collection of technical notes, concepts, and documentation across various domains including Machine Learning, Python, and Research Simulators.
      </p>

      {categories.length === 0 ? (
        <div className="text-white/50 italic">No categories found. Add some markdown files to src/content/knowledge.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const articles = getArticlesByCategory(category);
            if (articles.length === 0) return null;

            return (
              <div key={category} className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-fuchsia-500/20 rounded-lg">
                    <BookOpen className="text-fuchsia-400" size={20} />
                  </div>
                  <h2 className="text-xl font-semibold capitalize text-white">
                    {category.replace(/-/g, " ")}
                  </h2>
                </div>
                
                <ul className="flex flex-col gap-3 flex-1">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <Link 
                        href={`/knowledge/${category}/${article.slug}`}
                        className="group flex flex-col rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                      >
                        <span className="text-white/90 font-medium group-hover:text-cyan-400 transition-colors">
                          {article.title}
                        </span>
                        {article.excerpt && (
                          <span className="text-xs text-white/50 mt-1 line-clamp-2">
                            {article.excerpt}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}
