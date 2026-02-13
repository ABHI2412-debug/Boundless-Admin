import { Link } from "react-router-dom";

const voxArticles = [
  {
    id: 1,
    title: "VOX Books Warranty",
    views: "561 Views",
    date: "May 28, 2024",
  },
  {
    id: 2,
    title: "VOX Books FAQs",
    views: "2395 Views",
    date: "May 28, 2024",
  },
  {
    id: 3,
    title: "How to use a VOX Book",
    views: "1313 Views",
    date: "May 28, 2024",
  },
];

function VoxBooks() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold">Vox Books</h1>
          <p className="text-blue-600 mt-2 cursor-pointer">Warranty</p>
        </div>

        {/* Header Count */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-semibold">VOX Books Warranty</h2>

          <div className="text-right">
            <div className="text-2xl font-semibold">
              {voxArticles.length}
            </div>
            <div className="text-gray-500 text-sm">Articles</div>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-8">
          {voxArticles.map((article) => (
            <div key={article.id} className="border-b pb-6">

              <Link to="#">
                <h3 className="text-lg font-semibold hover:text-blue-600">
                  {article.title}
                </h3>
              </Link>

              <div className="text-sm text-gray-400 mt-2">
                {article.views} • {article.date} • Knowledge
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default VoxBooks;
