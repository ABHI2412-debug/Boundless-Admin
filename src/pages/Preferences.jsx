import { Link } from "react-router-dom";
import preferencesArticles from "../data/preferencesData";

function Preferences() {
  const articles = preferencesArticles;[
    {
      id: 0,
      title: "Web Market Type",
      views: "821 Views",
      date: "May 14, 2025",
      description: "The Web Market Type setting is controlled by Baker & Taylor."
    },
    {
      id: 1,
      title: "Why is the Discount Percentage Not Reflected?",
      views: "445 Views",
      date: "May 12, 2025",
      description: ""
    },
    {
      id: 2,
      title: "Review Tab Tip",
      views: "834 Views",
      date: "Mar 23, 2022",
      description: "Modify the sequence in which Reviews are displayed when viewing the Item Details page."
    },
    {
      id: 3,
      title: "Review Tab",
      views: "1125 Views",
      date: "Mar 23, 2022",
      description: "Modify the sequence in which reviews are displayed on the Reviews tab on the Item Details page."
    },
    {
      id: 4,
      title: "Default Book Account",
      views: "1128 Views",
      date: "Mar 23, 2022",
      description: "Select your default Book Account to ensure that it is automatically associated with newly created carts."
    },
    {
      id: 5,
      title: "My Preference Filters When Searching Tip",
      views: "1018 Views",
      date: "Mar 23, 2022",
      description: ""
    },
    {
      id: 6,
      title: "Slip Report Leading Article Tip",
      views: "792 Views",
      date: "Mar 23, 2022",
      description: "Leading articles (a, the, an) are ignored in the Slip Report sort."
    },
    {
      id: 7,
      title: "Enable Processing Charges Preference",
      views: "1242 Views",
      date: "Mar 23, 2022",
      description: "Enable Processing Charges within your Preferences."
    },
    {
      id: 8,
      title: "Makerspace Products",
      views: "841 Views",
      date: "Mar 23, 2022",
      description: "Makerspace products include items such as robotics and sewing machines."
    },
    {
      id: 9,
      title: "Standing Order Duplicate Checking",
      views: "1194 Views",
      date: "Mar 23, 2022",
      description: "Duplicate checking for Standing Orders is turned on by default."
    },
    {
      id: 10,
      title: "Creating Grid Template(s) from My Preferences",
      views: "2510 Views",
      date: "Mar 23, 2022",
      description: "Create or edit existing Grid Templates from My Preferences page."
    },
    {
      id: 11,
      title: "Setting your Preferences on the General Tab",
      views: "4409 Views",
      date: "Mar 23, 2022",
      description: "Use the General tab to determine content visibility."
    },
    {
      id: 12,
      title: "Default Book Account Tip",
      views: "194 Views",
      date: "Jan 8, 2016",
      description: "Choose an account as default for your organization."
    },
    {
      id: 13,
      title: "Slip Report Preferences",
      views: "139 Views",
      date: "Dec 14, 2015",
      description: "Select grid codes to print on your slip report."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-semibold">Preferences</h1>
          <div className="text-right">
            <div className="text-2xl font-semibold">
              {articles.length}
            </div>
            <div className="text-gray-500 text-sm">
              Articles
            </div>
          </div>
        </div>

        {/* Article List */}
        <div className="space-y-10">
          {articles.map((article) => (
            <div key={article.id} className="border-b pb-8">

              <Link to={`/preferences/${article.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition cursor-pointer">
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

export default Preferences;
