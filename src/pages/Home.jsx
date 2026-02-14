import { Link } from "react-router-dom";
import reportsImg from "../Assets/Images/Reports.jpg";
import settingsImg from "../Assets/Images/Settings.png";
import patronsImg from "../Assets/Images/Patrons.png";
import adminUsersImg from "../Assets/Images/Admin.jpg";
import CustomizationImg from "../Assets/Images/Customization.jpg";

function Home() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section
  className="relative h-[520px] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
  }}
>
  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
    
    <h1 className="text-6xl font-light mb-10 tracking-wide">
      How can we help you?
    </h1>

    {/* Search Bar */}
    <div className="flex w-full max-w-4xl shadow-xl">
      <input
        type="text"
        placeholder="Ask a question..."
        className="flex-1 px-6 py-2 text-gray-700 text-base outline-none bg-white rounded-l-full focus:ring-2 focus:ring-green-500"
      />
      <button className="bg-green-600 px-6 rounded-r-full flex items-center justify-center hover:bg-green-700 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>

  </div>
</section>


      {/* ================= ADMIN HELP SECTION ================= */}
<section className="bg-gray-100 py-24 text-center">
  <h2 className="text-3xl font-semibold mb-16 tracking-widest text-gray-800">
    ADMIN HELP & TRAINING
  </h2>

  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

    {/* Reports */}
    <Link to="/reports" className="group">
      <div className="flex flex-col items-center hover:scale-105 transition duration-300">
        <img
          src={reportsImg}
          className="rounded-xl shadow-lg w-72 h-44 object-cover mb-6"
          alt="Reports"
        />
        <h3 className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition">
          Reports
        </h3>
      </div>
    </Link>

    {/* Customization */}
    <Link to="/settings" className="group">
      <div className="flex flex-col items-center hover:scale-105 transition duration-300">
        <img
          src={CustomizationImg}
          className="rounded-xl shadow-lg w-72 h-44 object-cover mb-6"
          alt="Customization"
        />
        <h3 className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition">
          Customization
        </h3>
      </div>
    </Link>

    {/* Settings */}
    <Link to="/preferences" className="group">
      <div className="flex flex-col items-center hover:scale-105 transition duration-300">
        <img
          src={settingsImg}
          className="rounded-xl shadow-lg w-72 h-44 object-cover mb-6"
          alt="Settings"
        />
        <h3 className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition">
          Settings
        </h3>
      </div>
    </Link>

    {/* Admin User Management */}
    <Link to="/admin-users" className="group">
      <div className="flex flex-col items-center hover:scale-105 transition duration-300">
        <img
          src={adminUsersImg}
          className="rounded-xl shadow-lg w-72 h-44 object-cover mb-6"
          alt="Admin User Management"
        />
        <h3 className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition">
          Admin User Management
        </h3>
      </div>
    </Link>

    {/* Patron Management */}
    <Link to="/patron-management" className="group">
      <div className="flex flex-col items-center hover:scale-105 transition duration-300">
        <img
          src={patronsImg}
          className="rounded-xl shadow-lg w-72 h-44 object-cover mb-6"
          alt="Patron Management"
        />
        <h3 className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition">
          Patron Management
        </h3>
      </div>
    </Link>

  </div>
</section>


    </div>
  );
}

export default Home;
