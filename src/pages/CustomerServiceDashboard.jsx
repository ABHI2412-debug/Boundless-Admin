import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CustomerServiceDashboard = () => {
  const articles = [
    {
      id: "customer-service-dashboard-setup",
      title: "Customer Service Dashboard Setup",
      description:
        "Every user can design what accounts they see in the Customer Service Dashboard.",
      views: "1017 Views",
      date: "Apr 16, 2025",
    },
    {
      id: "video-tutorial-csd-orders",
      title: "Video Tutorial: Customer Service Dashboard – Orders",
      description:
        "A high-level overview of the Orders section of the Customer Service Dashboard.",
      views: "1715 Views",
      date: "Mar 23, 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="w-full text-center">
            <h1 className="text-3xl font-semibold">
              Customer Service Dashboard
            </h1>

            <div className="mt-4 text-blue-600 space-x-4">
              <span className="hover:underline cursor-pointer">
                Invoices
              </span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">
                Orders
              </span>
              <span>|</span>
              <span className="hover:underline cursor-pointer">
                Ordering
              </span>
            </div>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-2xl font-semibold">
              {articles.length}
            </p>
            <p className="text-gray-500">Articles</p>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="py-8 border-b border-gray-300"
          >
            <Link to={`/article/${article.id}`}>
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                {article.title}
              </h2>
            </Link>

            <p className="text-gray-600 mt-3">
              {article.description}
            </p>

            <p className="text-sm text-gray-500 mt-3">
              {article.views} • {article.date} • Knowledge
            </p>
          </div>
        ))}


      </div>
    </div>
  );
};

export default CustomerServiceDashboard;
