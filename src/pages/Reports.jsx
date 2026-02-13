import { Link } from "react-router-dom";

const reports = [
  "Interactive Dashboard Reports",
  "Filtering Interactive Dashboard Reports",
  "Adoption By Month Report",
  "Total Active Users Graph Report",
  "Total Users By Month Graph Report",
  "Top 10 Circulating Subjects Report",
  "Total Users By Month Report",
  "User Review Report",
  "Inventory - Interactive Dashboard Reports",
  "Removed Titles - Interactive Dashboard Reports",
  "Scoped Titles - Interactive Dashboard Reports",
  "License Inventory - Interactive Dashboard Reports",
  "Inventory List Summary - Interactive Dashboard Reports",
  "Titles By Audiences and Subjects - Interactive Dashboard Reports",
  "Interactive Dashboard Reports - Inventory Dashboard",
  "User Dashboard - Interactive Dashboard Reports",
  "Circulations - Interactive Dashboard Reports",
  "User Review - Interactive Dashboard Reports",
  "Active Circulations - Interactive Dashboard Reports",
  "Circulations by Market - Interactive Dashboard Reports",
  "Title Circulations - Interactive Dashboard Reports",
  "Circulations by Library - Interactive Dashboard Reports",
  "Users - Interactive Dashboard Reports",
  "Active Users - Interactive Dashboard Reports",
  "Total Users By Month - Interactive Dashboard Reports",
  "New Users By Month - Interactive Dashboard Reports",
  "Reports",
  "Adoption By Month - Interactive Dashboard Reports",
  "Inventory List - Interactive Dashboard Reports",
  "Titles Expiring Soon - Interactive Dashboard Report",
  "Title Transferred - Interactive Dashboard Reports",
  "Holds List - Interactive Dashboard Reports",
  "Hold Report",
  "Consortia Reports",
  "Circulation List Summary Report",
  "Circulation List Report",
  "Active Users Report",
  "Adoption By Month Graph Report",
  "Active Checkout Report",
  "New Users By Month Report",
  "New Users By Month Graph Report",
  "Inventory Circulation By Month Report",
  "Hold Summary Report"
];

function Reports() {
  return (
    <div className="bg-gray-100 min-h-screen px-20 py-16">
      <h1 className="text-4xl font-semibold mb-12 text-gray-800">
        Reports
      </h1>

      <div className="space-y-6">
        {reports.map((title, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-6"
          >
            <Link
              to="#"
              className="text-xl font-medium text-gray-800 hover:text-green-600 transition"
            >
              {title}
            </Link>

            <div className="text-sm text-gray-500 mt-2">
              Knowledge Article
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
