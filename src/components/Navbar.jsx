import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import boundlessLogo from "../Assets/Images/Boundless.png";
import { useState } from "react";

function Navbar({ isHome }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const topics = [
    "Reports",
    "Customization",
    "Settings",
    "Patron Management",
    "Pop Up Library",
    "Admin User Management",
    "Messaging",
    "Epopup Library",
    "Boundless",
  ];

  return (
    <nav
  className={`flex justify-between items-center pl-6 pr-8 py-4 relative transition-all duration-300 ${
    isHome
      ? "absolute top-0 left-0 w-full text-white"
      : "bg-white text-gray-800 shadow-sm"
  }`}
>

      
      {/* Logo */}
      <Link to="/">
        <img
          src={boundlessLogo}
          alt="Boundless Logo"
          className="h-16 w-auto"
        />
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-12 text-sm font-light">

        {/* Home */}
        <Link
          to="/"
          className={`relative pb-1 ${
            location.pathname === "/" ? "border-b-2 border-green-500" : ""
          }`}
        >
          Home
        </Link>

        {/* Topics Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition">
            Topics <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute left-0 pt-2 w-72 z-50">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden text-gray-700">
                {topics.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-4 hover:bg-gray-100 border-b last:border-none transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* What's New */}
        <Link to="/whats-new" className="hover:opacity-80">
          What's New
        </Link>

        {/* Contact */}
        <Link to="/contact" className="hover:opacity-80">
          Contact Support
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
