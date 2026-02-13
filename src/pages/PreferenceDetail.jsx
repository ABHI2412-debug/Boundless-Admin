import { useParams, Link } from "react-router-dom";
import preferencesArticles from "../data/preferencesData";

function PreferenceDetail() {
  const { id } = useParams();

  const article = preferencesArticles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-8">
      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <Link
          to="/settings/preferences"
          className="text-blue-600 text-sm hover:underline"
        >
          ← Back to Preferences
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-semibold mt-6 mb-4">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="text-sm text-gray-400 mb-8">
          {article.views} • {article.date} • Knowledge
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>{article.content}</p>
        </div>

      </div>
    </div>
  );
}

export default PreferenceDetail;
