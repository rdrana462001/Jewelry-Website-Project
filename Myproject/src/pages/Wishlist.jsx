import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getWishlist, removeFromWishlist } from "../utils/storageUtils";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items = getWishlist();
    setWishlistItems(items);
  }, []);

  const removeItem = (id) => {
    removeFromWishlist(id);
    const updated = wishlistItems.filter(item => item._id !== id);
    setWishlistItems(updated);
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] pt-32 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-4xl md:text-5xl font-serif text-black mb-10 text-center md:text-left">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[30px] shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save your favorite items here to view them later.</p>
            <Link to="/collection" className="inline-block px-10 py-4 rounded-full bg-black text-white tracking-[2px] hover:bg-[#c89b3c] transition-colors duration-300">
              EXPLORE COLLECTION
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {wishlistItems.map((item) => (
              <div key={item._id} className="relative group">
                <button 
                  onClick={() => removeItem(item._id)}
                  className="absolute z-10 top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white shadow-md transition-all"
                  title="Remove from Wishlist"
                >
                  ✖
                </button>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;