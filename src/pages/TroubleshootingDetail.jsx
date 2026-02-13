import { useLocation } from "react-router-dom";

function TroubleshootingDetail() {
  const location = useLocation();
  const article = location.state;

  if (!article) {
    return <div className="p-10">Article not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md">

        <h1 className="text-3xl font-semibold mb-6">
          {article.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {article.views} Views • {article.date} • Knowledge
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          {article.content}
        </p>

      </div>
    </div>
  );
}

export default TroubleshootingDetail;
