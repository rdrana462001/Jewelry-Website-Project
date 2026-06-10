
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
})
{
 
return (
//  <aside
//   className="
//     w-[400px]
//     bg-white
//     rounded-3xl
//     shadow-xl
//     border
//     border-yellow-100
//     p-6
//     fixed
//     right-5
//     top-[210px]
//     h-[calc(100vh-230px)]
//     overflow-y-auto
//     z-20
//   "
// >
<aside
  className="
    w-full
    bg-white
    rounded-3xl
    shadow-xl
    border
    border-yellow-100
    p-6
    z-20
  "
>
    {/* Heading */}
    <div className="flex items-center justify-between mb-8">
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <FaFilter />
        Filters
      </h2>

      <button
        onClick={() => {
          setSelectedCategory("");
          setMinPrice("");
          setMaxPrice("");
        }}
        className="text-red-500 hover:text-red-600"
      >
        <FaTimes />
      </button>
    </div>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Categories</h3>

        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={
                  cat === "All"
                    ? selectedCategory === ""
                    : selectedCategory === cat.toLowerCase()
                }
                onChange={() =>
                  setSelectedCategory(
                    cat === "All"
                      ? ""
                      : cat.toLowerCase()
                  )
                }
              />

              {cat === "Rings" && <FaRing />}
              {cat === "Gold" && <FaGem />}
              {cat === "Watches" && <span className="text-lg">⌚</span>}
              {cat === "Fashion" && <span className="text-lg">👗</span>}
              {cat === "Celebrity" && <span className="text-lg">⭐</span>}
              {cat === "Necklace" && <span className="text-lg">📿</span>}
              {cat === "Bridal" && <FaGem />}
              {cat === "Bracelet" && <FaGem />}
              {cat === "All" && <FaGem />}

              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">
          Price Range
        </h3>

        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />
        </div>
      </div>

      {/* Material */}
      {/* <div className="mb-8">
        <h3 className="font-semibold mb-4">
          Material
        </h3>

        <div className="space-y-2">
          <label className="flex gap-2">
            <input type="checkbox" />
            Gold
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Diamond
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Silver
          </label>
        </div>
      </div> */}

      {/* Sort */}
    <div>
  <h3 className="font-semibold mb-4">
    Sort By
  </h3>

  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(e.target.value)
    }
    className="w-full border rounded-xl p-3"
  >
    <option value="">
      Default
    </option>

    <option value="lowToHigh">
      Price Low → High
    </option>

    <option value="highToLow">
      Price High → Low
    </option>

    <option value="name">
      Name A → Z
    </option>
  </select>
</div>

      <div className="mb-10 mt-5">
  <h3 className="font-semibold mb-4">
    Availability
  </h3>

  <label className="flex gap-2">
    <input type="checkbox" />
    In Stock
  </label>

  <label className="flex gap-2">
    <input type="checkbox" />
    Out Of Stock
  </label>


</div>
    </aside>
  );
}

export default FilterSidebar;