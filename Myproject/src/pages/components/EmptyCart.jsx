import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="text-center py-24 bg-white rounded-3xl shadow-lg border-2 border-[#c89b3c] border-opacity-20">
      <div className="text-7xl mb-6">🛍️</div>
      <h2 className="text-3xl font-serif text-black mb-4">
        Your cart is empty
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Discover our premium collections and find something you love.
      </p>
      <Link
        to="/collection/rings"
        className="inline-block px-12 py-4 rounded-full bg-black text-white tracking-[2px] hover:bg-[#c89b3c] hover:text-black transition-all duration-300 font-semibold"
      >
        EXPLORE COLLECTION
      </Link>
    </div>
  );
}

export default EmptyCart;
