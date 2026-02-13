import {
  FaPowerOff,
  FaCog,
  FaShoppingCart,
  FaBook,
  FaQuestionCircle,
  FaWrench
} from "react-icons/fa";

import HelpCard from "./HelpCard";
import { Link } from "react-router-dom";

function HelpGrid({ searchTerm = "" }) {

  console.log("HelpGrid mounted");

  const cards = [
    { title: "Getting Started", icon: <FaPowerOff size={52} />, path: "/getting-started" },
    { title: "Settings & Preferences", icon: <FaCog size={52} />, path: "/settings" },
    { title: "Carts & Ordering", icon: <FaShoppingCart size={52} />, path: "/carts" },
    { title: "Search & Browse", icon: <FaBook size={52} />, path: "/search" },
    { title: "Frequently Asked Questions", icon: <FaQuestionCircle size={52} />, path: "/faq" },
    { title: "Troubleshooting", icon: <FaWrench size={52} />, path: "/troubleshooting" },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 py-32 px-8">
      <div className="max-w-6xl mx-auto">

        {filteredCards.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            No results found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {filteredCards.map((card) => (
              <Link to={card.path} key={card.title}>
                <HelpCard icon={card.icon} title={card.title} />
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default HelpGrid;
