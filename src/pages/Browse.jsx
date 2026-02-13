import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Browse() {
  const articles = [
    {
      id: "new-release-calendar",
      title: "New Release Calendar",
      description:
        "The New Release Calendar highlights new product releases in all categories – Books, Movies, and Music.",
      views: "2334 Views",
      date: "Mar 23, 2022",
    },
    {
      id: "bisac-browsing",
      title: "BISAC Browsing",
      description: "Easily browse through all BISAC headings.",
      views: "1714 Views",
      date: "Nov 2, 2017",
    },
    {
      id: "bt-publications",
      title: "B&T Publications",
      description:
        "The B&T Publications menu option features Baker & Taylor's most popular publications in digital format.",
      views: "283 Views",
      date: "Dec 14, 2015",
    },
    {
      id: "promotions",
      title: "Promotions",
      description: "Your one-stop shop for all of our featured promotions.",
      views: "109 Views",
      date: "Dec 14, 2015",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl font-semibold">Browse</h1>

        {/* Sub Navigation */}
        <div className="mt-4 text-blue-600 space-x-4">
          <span className="cursor-pointer hover:underline">Lists</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">New Release</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Standing Orders</span>
        </div>

        <p className="mt-4 text-gray-500">
          <span className="text-gray-700 font-medium">
            {articles.length}
          </span>{" "}
          Articles
        </p>
      </div>

      {/* Articles List */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        {articles.map((article) => (
          <div key={article.id} className="py-8 border-b border-gray-200">
            <Link to={`/article/${article.id}`}>
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                {article.title}
              </h2>
            </Link>

            <p className="text-gray-600 mt-2">
              {article.description}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {article.views} • {article.date} • Knowledge
            </p>
          </div>
        ))}


      </div>
    </div>
  );
}

export default Browse;
