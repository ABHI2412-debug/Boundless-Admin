import { Link } from "react-router-dom";
import cartsArticles from "../data/cartsData";

function Carts() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-semibold">Carts</h1>

          <div className="text-right">
            <div className="text-2xl font-semibold">
              {cartsArticles.length}
            </div>
            <div className="text-gray-500 text-sm">Articles</div>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-10">
          {cartsArticles.map((article) => (
            <div key={article.id} className="border-b pb-8">

              <Link to={`/carts/${article.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h2>
              </Link>

              {article.description && (
                <p className="text-gray-600 mb-3">
                  {article.description}
                </p>
              )}

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

export default Carts;
