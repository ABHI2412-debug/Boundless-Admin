import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Shared article data (move this later to separate file if needed)
const articles = [
  {
    id: "editing-product-lookup",
    category: "ADMIN",
    title: "Editing Product Lookup as an Admin",
    date: "Mar 23, 2022",
    views: "18201 Views",
    content: `
      You can edit the data displayed in the Product Lookup field within the Admin section.
      
      Select General Information from the Admin tab.

      Click Edit next to Product Lookup within the Organization Profile area.
    `,
  },
  {
    id: "assigning-user-functions",
    category: "ADMIN",
    title: "Assigning User Functions",
    date: "Mar 23, 2022",
    views: "1617 Views",
    content: `
      Users with Create or Maintain User function can add and remove functionality 
      for Users within the Admin section of the system.
    `,
  },
  {
    id: "shared-login-function",
    category: "ADMIN",
    title: "Shared Login Function",
    date: "Mar 23, 2022",
    views: "2967 Views",
    content: `
      Use Shared Logins to allow an unlimited amount of users 
      to be logged into an ID at the same time.
    `,
  },
];

function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20 text-xl">
          Article not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Breadcrumb */}
          <div className="text-sm text-blue-600 uppercase tracking-wide mb-6">
            {article.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="text-gray-500 text-sm mb-8">
            {article.date} • Knowledge
          </div>

          {/* Content */}
          <div className="text-gray-700 leading-7 whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-80 hidden lg:block">
          <h3 className="text-lg font-semibold mb-6">
            Trending Articles
          </h3>

          <div className="space-y-4">
            {articles.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                to={`/article/${item.id}`}
                className="block text-gray-700 hover:text-blue-600 border-b pb-2"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
