import { Link } from "react-router-dom";

function CartItem({
  item,
  updateQuantity,
  removeItem,
  formatPrice,
  parsePrice,
}) {
  return (
    <div className="relative bg-gradient-to-r from-white to-[#f8f5ef] p-6 rounded-2xl border-2 border-gray-100 hover:border-[#c89b3c] hover:border-opacity-50 transition duration-300">

      {/* REMOVE BUTTON TOP RIGHT */}
      <button
        onClick={() => removeItem(item._id)}
        className="
          absolute
          top-4
          right-4
          text-red-500
          text-3xl
          font-light
          hover:text-red-700
          transition
          z-20
        "
      >
        ×
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to={`/product/${item._id}`}
          className="w-full sm:w-[180px] h-[180px] flex-shrink-0 group"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-2xl group-hover:shadow-xl transition duration-300"
          />
        </Link>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link to={`/product/${item._id}`}>
              <h3 className="text-xl md:text-2xl font-serif text-black mb-2 hover:text-[#c89b3c] transition-colors line-clamp-2">
                {item.name}
              </h3>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#c89b3c]">
                {formatPrice(parsePrice(item.price))}
              </span>

              {item.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(parsePrice(item.originalPrice))}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-white bg-[#c89b3c] px-3 py-1 rounded-full">
                {item.category || "Premium"}
              </span>

              <span className="text-xs text-green-600 font-semibold">
                ✓ In Stock
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* QUANTITY */}
            <div className="flex items-center border-2 border-gray-300 rounded-full h-12 w-[140px] overflow-hidden bg-white">
              <button
                onClick={() =>
                  updateQuantity(
                    item._id,
                    (item.quantity || 1) - 1
                  )
                }
                className="flex-1 h-full hover:bg-gray-100 transition-colors text-lg font-bold text-gray-600"
              >
                −
              </button>

              <span className="w-10 text-center font-bold text-black">
                {item.quantity || 1}
              </span>

              <button
                onClick={() =>
                  updateQuantity(
                    item._id,
                    (item.quantity || 1) + 1
                  )
                }
                className="flex-1 h-full hover:bg-gray-100 transition-colors text-lg font-bold text-gray-600"
              >
                +
              </button>
            </div>

            {/* SUBTOTAL */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-right">
                <p className="text-xs text-gray-500 font-medium">
                  Subtotal
                </p>

                <p className="text-2xl font-bold text-black">
                  {formatPrice(
                    parsePrice(item.price) *
                      (item.quantity || 1)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;