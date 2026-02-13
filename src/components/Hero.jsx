import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function Hero({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative h-[520px] w-full">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">

        <h1 className="text-5xl md:text-6xl font-semibold mb-10 text-center">
          What can we help you with?
        </h1>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl shadow-lg">

          <input
            type="text"
            placeholder="Ask a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 px-6 py-4 rounded-l-full text-black text-lg outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-700 hover:bg-blue-800 transition px-6 rounded-r-full flex items-center justify-center"
          >
            <Search size={22} />
          </button>

        </div>

      </div>
    </div>
  );
}

export default Hero;
