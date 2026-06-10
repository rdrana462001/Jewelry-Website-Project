function TopProducts({ products }) {
  const topProducts = products.slice(0, 5);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#c89b3c]/20 hover:shadow-2xl transition duration-500">
      <h2 className="text-2xl font-serif font-bold text-black mb-6 pb-4 border-b-2 border-gray-100">
        Top Selling Products
      </h2>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div
            key={product._id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-[#faf6ed] to-white rounded-2xl hover:shadow-lg transition duration-300 group"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition duration-300"
                />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#c89b3c] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-black line-clamp-1">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">
                  ₹{product.price?.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#c89b3c] bg-[#c89b3c]/10 px-3 py-1 rounded-full ml-2">
              {product.stock || 0} in stock
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;