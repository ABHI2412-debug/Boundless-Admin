import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const articles = [
  {
    id: "editing-product-lookup",
    title: "Editing Product Lookup as an Admin",
    description:
      "You can edit the data displayed in the Product Lookup field within the Admin section.",
    views: "18201 Views",
    date: "Mar 23, 2022",
  },
  {
    id: "assigning-user-functions",
    title: "Assigning User Functions",
    description:
      "Users with Create or Maintain User function can add and remove functionality for Users within the Admin section.",
    views: "1617 Views",
    date: "Mar 23, 2022",
  },
  {
    id: "shared-login-function",
    title: "Shared Login Function",
    description:
      "Use Shared Logins to allow an unlimited amount of users to be logged into an ID at the same time.",
    views: "2967 Views",
    date: "Mar 23, 2022",
  },
  {
    id: "bill-to-accounts",
    title: "Bill To Accounts",
    description:
      "The Bill To Accounts area is where you can view all Bill To accounts associated with your organization.",
    views: "2643 Views",
    date: "Mar 23, 2022",
  },
  {
    id: "set-up-credit-card",
    title: "Set Up a Credit Card",
    description:
      "Before you can set up a credit card account, you must email Account Setup to modify your account.",
    views: "1174 Views",
    date: "Mar 23, 2022",
  },
  {
    id: "adding-users",
    title: "Adding Users",
    description:
      "If you have the Create User function, you can create additional User IDs for your organization.",
    views: "3430 Views",
    date: "Mar 23, 2022",
  },
];

function Admin() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl font-semibold">Admin</h1>
        <p className="mt-2 text-gray-500">
          <span className="text-gray-700 font-medium">
            {articles.length}
          </span>{" "}
          Articles
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">
        {articles.map((article) => (
          <div key={article.id} className="py-8 border-b border-gray-200">
            <Link to={`/article/${article.id}`}>
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                {article.title}
              </h2>
            </Link>

            <p className="text-gray-600 mt-3">
              {article.description}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {article.views} • {article.date} • Knowledge
            </p>
          </div>
        ))}

        <div className="text-center mt-16 text-gray-600">
          Still need assistance? Submit a Support Case{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Click Here
          </a>{" "}
          or call 1-800-775-3700 option 2
        </div>
      </div>
    </div>
  );
}

export default Admin;
