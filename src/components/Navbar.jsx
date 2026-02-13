import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Topics with routes
  const topics = [
    { name: "Vox Books", path: "/vox-books" },
    { name: "Batch Entry", path: "/batch-entry" },
    { name: "Quotes", path: "/quotes" },
    { name: "Title Details", path: "/title-details" },
    { name: "What's New", path: "/whats-new" },
    { name: "Programs", path: "/programs" },
    { name: "Admin", path: "/admin" },
    { name: "Discounts", path: "/discounts" },
    { name: "Browse", path: "/browse" },
    { name: "Customer Service Dashboard", path: "/customer-service" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-10 py-6 text-white">

        {/* Logo */}
        <Link to="/" className="text-2xl font-light tracking-wide">
          titlesource360
        </Link>

        {/* Right Side */}
        <div
          className="relative flex items-center space-x-8"
          ref={dropdownRef}
        >

          {/* Home */}
          <Link
            to="/"
            className="text-lg hover:text-gray-300 transition"
          >
            Home
          </Link>

          {/* Topics Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // prevent unwanted bubbling
              setOpen((prev) => !prev);
            }}
            className="flex items-center space-x-1 text-lg hover:text-gray-300 transition"
          >
            <span>Topics</span>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 w-72 bg-white text-gray-800 shadow-xl border border-gray-300 rounded-sm overflow-hidden z-50">

{topics.map((item, index) => (
  <Link
    key={index}
    to={item.path}
    onClick={() => setOpen(false)}
    className="block px-6 py-4 hover:bg-gray-100 transition"
  >
    {item.name}
  </Link>
))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
