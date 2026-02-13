import whatsNewArticles from "../data/whatsNewData";

function WhatsNew() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold">What's New</h1>
        </div>

        <div className="flex justify-between items-start">

          {/* Left Side Articles */}
          <div className="w-3/4 space-y-8">

            {whatsNewArticles.map((article) => (
              <div key={article.id} className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-2">
                  {article.title}
                </h2>

                <div className="text-sm text-gray-500">
                  {article.views} • {article.date} • Knowledge
                </div>
              </div>
            ))}

          </div>

          {/* Right Side Count */}
          <div className="w-1/4 text-right">
            <div className="text-2xl font-semibold">
              {whatsNewArticles.length}
            </div>
            <div className="text-gray-500 text-sm">
              Article
            </div>
          </div>

        </div>

        {/* Support Section */}
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

export default WhatsNew;
