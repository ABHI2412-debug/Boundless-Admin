import { useState } from "react";
import { Link } from "react-router-dom";

function Troubleshooting() {
  const [search, setSearch] = useState("");

  const articles = [
    {
      id: 1,
      title: "Why Can't I Submit an Order?",
      description:
        "You must be set up with Submit Order functionality in order to submit orders within the system.",
      content:
        "To submit an order, your account must have the Submit Order feature enabled. Please contact support if you believe this is an error.",
      views: 1527,
      date: "Aug 17, 2022",
    },
    {
      id: 2,
      title: "What is the Recommended Browser for Title Source 360?",
      description: "",
      content:
        "We recommend using the latest version of Google Chrome for the best performance and compatibility.",
      views: 2853,
      date: "Mar 31, 2022",
    },
    {
      id: 3,
      title: "Technical Support Form Link Tip",
      description:
        "You can easily submit requests for technical support via a link located in the footer of every page.",
      content:
        "The technical support form is accessible in the footer of every page. Simply click the support link to submit your request.",
      views: 1403,
      date: "Mar 23, 2022",
    },
  ];

  // 🔍 Search filtering
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex justify-between items-start">
        <h1 className="text-3xl font-semibold text-gray-800">
          Troubleshooting
        </h1>

        <div className="text-center">
          <p className="text-3xl font-semibold text-gray-800">
            {filteredArticles.length}
          </p>
          <p className="text-gray-500">Articles</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <input
          type="text"
          placeholder="Search troubleshooting articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Articles List */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {filteredArticles.map((article) => (
          <Link
            to={`/troubleshooting/${article.id}`}
            key={article.id}
            state={article}
          >
            <div className="py-8 border-b border-gray-300 hover:bg-white transition duration-300 cursor-pointer rounded-lg px-4">

              <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
                {article.title}
              </h2>

              {article.description && (
                <p className="text-gray-600 mb-3">
                  {article.description}
                </p>
              )}

              <p className="text-sm text-gray-500">
                {article.views} Views • {article.date} • Knowledge
              </p>

            </div>
          </Link>
        ))}
      </div>

      {/* Support Section */}
      <div className="bg-white py-10 border-t text-center">
        <p className="text-gray-700">
          Still need assistance?{" "}
          <span className="font-semibold text-blue-600 cursor-pointer hover:underline">
            Click Here
          </span>{" "}
          or call 1-800-775-3700 option 2
        </p>
      </div>

    </div>
  );
}

export default Troubleshooting;
