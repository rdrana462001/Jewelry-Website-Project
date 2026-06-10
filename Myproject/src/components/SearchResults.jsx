import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SearchResults({ results, searchQuery }) {
  if (!searchQuery) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f8f5ef] py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-black mb-4">
          Search Results
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Found {results.length} product{results.length !== 1 ? "s" : ""} for "{searchQuery}"
        </p>

        {results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 mb-6">No products found</p>
            <p className="text-gray-400">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="relative overflow-hidden h-[300px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#c89b3c] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#c89b3c]">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <button className="bg-[#c89b3c] text-white px-6 py-2 rounded-full hover:bg-[#f5d98a] hover:text-black transition duration-300 font-semibold">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SearchResults;