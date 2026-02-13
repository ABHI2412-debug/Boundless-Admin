import programsArticles from "../data/programsData";

function Programs() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold">Programs</h1>
        </div>

        <div className="flex justify-between items-start">

          <div className="w-3/4 space-y-10">
            {programsArticles.map((article) => (
              <div key={article.id} className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-2">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  {article.description}
                </p>

                <div className="text-sm text-gray-500">
                  {article.views} • {article.date} • Knowledge
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/4 text-right">
            <div className="text-2xl font-semibold">
              {programsArticles.length}
            </div>
            <div className="text-gray-500 text-sm">
              Articles
            </div>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-700">
          Still need assistance?{" "}
          <span className="text-blue-600 font-medium cursor-pointer">
            Submit a Support Case Click Here
          </span>{" "}
          or call 1-800-775-3700 option 2
        </div>

      </div>
    </div>
  );
}

export default Programs;   
