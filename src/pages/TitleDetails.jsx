import titleDetailsArticles from "../data/titleDetailsData";

function TitleDetails() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-semibold">Title Details</h1>

          <div className="text-right">
            <div className="text-2xl font-semibold">
              {titleDetailsArticles.length}
            </div>
            <div className="text-gray-500 text-sm">Articles</div>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-10">
          {titleDetailsArticles.map((article) => (
            <div key={article.id} className="border-b pb-8">
              <h2 className="text-xl font-semibold mb-2">
                {article.title}
              </h2>

              <p className="text-gray-600 mb-3">
                {article.description}
              </p>

              <div className="text-sm text-gray-400">
                {article.views} • {article.date} • Knowledge
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TitleDetails;
