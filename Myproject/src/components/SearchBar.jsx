import { useState } from "react";
import { motion } from "framer-motion";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products by name, category..."
          className="w-full px-6 py-4 rounded-full border-2 border-[#c89b3c] bg-white/90 backdrop-blur-md focus:outline-none focus:border-[#f5d98a] text-gray-800 placeholder-gray-500 transition duration-300"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#c89b3c] hover:text-[#f5d98a] transition"
          >
            ✕
          </button>
        )}
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#c89b3c]">
          🔍
        </span>
      </motion.div>
    </div>
  );
}

export default SearchBar;