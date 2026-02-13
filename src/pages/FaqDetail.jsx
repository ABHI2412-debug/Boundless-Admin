import { useParams, Link } from "react-router-dom";
import faqArticles from "../data/faqData";

function FaqDetail() {
  const { id } = useParams();
  const article = faqArticles.find(a => a.id === Number(id));

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">
      Article not found.
    </div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-8">
      <div className="max-w-3xl mx-auto">

        <Link to="/faq" className="text-blue-600 text-sm hover:underline">
          ← Back to FAQs
        </Link>

        <h1 className="text-3xl font-semibold mt-6 mb-4">
          {article.title}
        </h1>

        <div className="text-sm text-gray-400 mb-8">
          {article.views} • {article.date} • Knowledge
        </div>

        <div className="text-gray-700 leading-relaxed">
          {article.content}
        </div>

      </div>
    </div>
  );
}

export default FaqDetail;
