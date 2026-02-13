import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="bg-gray-100 min-h-screen pb-20">

      {/* Header */}
      <div className="bg-white py-16 text-center border-b">
        <h1 className="text-3xl font-semibold">Settings & Preferences</h1>
      </div>

      {/* Sub Categories */}
      <div className="max-w-4xl mx-auto px-6 mt-16">

        <Link to="/settings/preferences">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">
              Preferences
            </h2>
            <p className="text-gray-600 mt-2">
              Manage account settings, default configurations, reports and more.
            </p>
            <div className="text-sm text-gray-500 mt-3">
              14 Articles
            </div>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default Settings;
