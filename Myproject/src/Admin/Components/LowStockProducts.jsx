function LowStockProducts({ products }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#c89b3c]/20 hover:shadow-2xl transition duration-500">
      <h2 className="text-2xl font-serif font-bold text-black mb-6 pb-4 border-b-2 border-gray-100">
        Low Stock Products
      </h2>
      <div className="space-y-4">
        {products
          .filter((p) => p.stock < 10)
          .slice(0, 5)
          .map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border-l-4 border-red-500"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-black line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Stock: {product.stock}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Low Stock ⚠️
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LowStockProducts;
