import { FiSearch } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="relative">
        {/* Search Icon */}
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search by category..."
          className="
            w-full pl-11 pr-4 py-3
            border border-gray-300 rounded-full
            bg-white text-gray-700 placeholder-gray-400
            focus:outline-none
            focus:border-[#a4f4cf]
            focus:ring-2 focus:ring-[#a4f4cf]/40
            transition-all duration-200
            shadow-sm hover:shadow-md
          "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
