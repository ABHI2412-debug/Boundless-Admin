import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* HERO SECTION */}
      <div
        className="relative h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">
            What can we help you with?
          </h1>

          {/* SEARCH BAR */}
          <div className="max-w-3xl mx-auto flex">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full px-6 py-4 rounded-l-full text-gray-800 outline-none text-lg"
            />
            <button className="bg-blue-700 hover:bg-blue-800 px-6 rounded-r-full flex items-center justify-center transition">
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">

        <Link to="/getting-started" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Getting Started</h3>
        </Link>

        <Link to="/settings" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Settings & Preferences</h3>
        </Link>

        <Link to="/carts" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Carts & Ordering</h3>
        </Link>

        <Link to="/search-browse" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Search & Browse</h3>
        </Link>

        <Link to="/faq" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709496.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Frequently Asked Questions</h3>
        </Link>

        <Link to="/troubleshooting" className="group">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            className="mx-auto w-28 mb-6 group-hover:scale-105 transition"
          />
          <h3 className="text-xl font-medium">Troubleshooting</h3>
        </Link>

      </div>

    </div>
  );
}

export default Home;
