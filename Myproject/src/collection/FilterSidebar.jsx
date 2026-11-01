import {
  FaGem,
  FaRing,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

function FilterSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  inStock,
  setInStock,
  outOfStock,
  setOutOfStock,
  selectedMaterials,
  setSelectedMaterials,
  setSearchTerm,
}) {
  
  const handleMaterialChange = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  const handleReset = () => {
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
    setInStock(false);
    setOutOfStock(false);
    setSelectedMaterials([]);
    if (setSearchTerm) setSearchTerm("");
  };

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "Diamond Rings":
        return <FaRing className="text-yellow-500" />;
      case "Royal Necklace":
        return <span className="text-lg">📿</span>;
      case "Bridal Collection":
        return <FaGem className="text-yellow-500" />;
      case "Luxury Bracelets":
        return <span className="text-lg">⛓️</span>;
      case "All":
        return <FaGem className="text-yellow-500" />;
      default:
        return <FaGem className="text-yellow-500" />;
    }
  };

  return (
    <aside
      className="
        w-full
        bg-white
        rounded-3xl
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        border
        border-[#f3e5c8]
        p-6
        z-20
        sticky
        top-[120px]
      "
    >
      {/* Heading */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 tracking-wide">
          <FaFilter className="text-[#c89b3c]" />
          Filters
        </h2>
        <button
          onClick={handleReset}
          className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-2 rounded-full hover:bg-red-50"
          title="Reset all filters"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* Category */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => {
            // "All" matches "" in our logic
            const isChecked = cat === "All" ? selectedCategory === "" : selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <label
                key={cat}
                className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="category"
                    className="w-4 h-4 text-[#c89b3c] focus:ring-[#c89b3c] border-gray-300 cursor-pointer"
                    checked={isChecked}
                    onChange={() => setSelectedCategory(cat === "All" ? "" : cat.toLowerCase())}
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-700 group-hover:text-gray-900">
                  {getCategoryIcon(cat)}
                  <span className="font-medium text-sm">{cat}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {["Gold", "Diamond", "Silver", "Platinum"].map((mat) => (
            <label key={mat} className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => handleMaterialChange(mat)}
                className="w-4 h-4 rounded text-[#c89b3c] focus:ring-[#c89b3c] border-gray-300 cursor-pointer"
              />
              <span className="flex items-center gap-2 font-medium text-sm text-gray-700 group-hover:text-gray-900">
                {mat === "Gold" && <span>🟡</span>}
                {mat === "Diamond" && <span>💎</span>}
                {mat === "Silver" && <span>⚪</span>}
                {mat === "Platinum" && <span>💍</span>}
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <div className="flex gap-3">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-xl py-3 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
            />
          </div>
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              min="0"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full border border-gray-200 rounded-xl py-3 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Availability
        </h3>
        <div className="space-y-3">
          <label className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
              className="w-4 h-4 rounded text-[#c89b3c] focus:ring-[#c89b3c] border-gray-300 cursor-pointer"
            />
            <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900">In Stock</span>
          </label>
          <label className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <input
              type="checkbox"
              checked={outOfStock}
              onChange={(e) => setOutOfStock(e.target.checked)}
              className="w-4 h-4 rounded text-[#c89b3c] focus:ring-[#c89b3c] border-gray-300 cursor-pointer"
            />
            <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900">Out Of Stock</span>
          </label>
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-3 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
        >
          <option value="">Default</option>
          <option value="lowToHigh">Price Low → High</option>
          <option value="highToLow">Price High → Low</option>
          <option value="name">Name A → Z</option>
          <option value="newest">Newest</option>
          <option value="bestSelling">Best Selling</option>
        </select>
      </div>

    </aside>
  );
}

export default FilterSidebar;