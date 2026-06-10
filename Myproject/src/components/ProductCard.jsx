import { Link } from "react-router-dom";
import Button from "../component/button";
import { addToCart as addToCartUtil, addToWishlist as addToWishlistUtil } from "../utils/storageUtils";
import { toast } from "react-toastify";

// import Button from "../pages/components/Button";
export default function ProductCard({ item }) {
  const addToCart = (e) => {
    e.preventDefault();
    addToCartUtil({ ...item, quantity: 1 });
toast.success("Added To Cart ");    
  };

const addToWishlist = (e) => {
  e.preventDefault();

  const result = addToWishlistUtil(item);

  if (result.success) {
    toast.success(result.message);
  } else {
    toast.warning(result.message);
  }
};
  return (
    <Link to={`/product/${item._id}`} className="block h-full">
      <div className="h-full bg-white rounded-[25px] overflow-hidden shadow-lg group border border-gray-200 hover:-translate-y-2 transition-all duration-500 flex flex-col">
        {/* IMAGE */}
        <div className="overflow-hidden relative h-[260px] flex-shrink-0">
   {/* <img
  src={item.image}
  alt={item.name}
  className="w-full h-56 object-contain bg-white p-4 rounded-t-3xl"
/> */}
  <img
  src={
    item.image?.startsWith("/uploads")
      ? `http://localhost:5000${item.image}`
      : item.image
  }
  alt={item.name}
  className="w-full h-56 object-contain bg-white p-4 rounded-t-3xl"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
  }}
/>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">
          <h1 className="text-[22px] font-serif mb-2 text-black leading-tight flex-grow">
            {item.name}
          </h1>
          <p className="text-[#c89b3c] text-xl mb-5 font-semibold">
            {item.price}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-auto">
            {/* ADD TO CART */}
          <Button
            onClick={addToCart}
            className="flex-1 py-3 text-[12px]"
          >
            ADD TO CART
          </Button>
            {/* <button
              onClick={addToCart}
              className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-bold text-[12px] tracking-[2px] hover:scale-105 transition-all duration-500"
            >
              ADD TO CART
            </button> */}

            {/* WISHLIST */}
            <button
              onClick={addToWishlist}
              className="w-[50px] h-[50px] flex-shrink-0 rounded-full border border-[#c89b3c] text-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 text-lg"
            >
              ♡
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
