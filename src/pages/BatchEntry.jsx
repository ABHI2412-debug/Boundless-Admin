import { Link } from "react-router-dom";

const batchArticles = [
  {
    id: 1,
    title: "How Do I View Batch Entry in Search Results?",
    views: "1220 Views",
    date: "Aug 17, 2022",
  },
  {
    id: 2,
    title: "Batch Entry Tip",
    description:
      "Have a list of items you want to look up on TS 360? You can use Batch Entry to look all of your items up at once.",
    views: "1463 Views",
    date: "Mar 23, 2022",
  },
  {
    id: 3,
    title: "Batch Upload",
    description:
      "This option allows for manually entering ISBNs/UPCs and placing them into a new or open cart or view these specific titles within search results.",
    views: "783 Views",
    date: "Dec 16, 2015",
  },
];

function BatchEntry() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold">Batch Entry</h1>
        </div>

        {/* Header Count */}
        <div className="flex justify-between items-center mb-10">
          <div></div>

          <div className="text-right">
            <div className="text-2xl font-semibold">
              {batchArticles.length}
            </div>
            <div className="text-gray-500 text-sm">Articles</div>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-10">
          {batchArticles.map((article) => (
            <div key={article.id} className="border-b pb-8">

              <Link to="#">
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
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

export default BatchEntry;
