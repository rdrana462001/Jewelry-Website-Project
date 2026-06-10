function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mt-8 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-[#c89b3c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89b3c]"
      />
    </div>
  );
}

export default SearchBar;