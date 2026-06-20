import { Link, useNavigate } from "react-router-dom";
import Button from "../component/button";
import {
  addToCart as addToCartUtil,
  addToWishlist as addToWishlistUtil,
} from "../utils/storageUtils";

import { toast } from "react-toastify";
import API_BASE_URL from "../config/api";

export default function ProductCard({ item }) {

  const navigate = useNavigate();

  // ================= ADD TO CART =================

  const addToCart = (e) => {

    e.preventDefault();

    const user =
      localStorage.getItem("user");

    if (!user) {

      toast.warning(
        "Please login to continue shopping 🛒"
      );

      setTimeout(() => {

        navigate("/login");

      }, 1500);

      return;
    }

    addToCartUtil({
      ...item,
      quantity: 1,
    });

    toast.success(
      "Added To Cart 🛍️"
    );
  };

  // ================= WISHLIST =================

  const addToWishlist = (e) => {

    e.preventDefault();

    const user =
      localStorage.getItem("user");

    if (!user) {

      toast.warning(
        "Please login to use wishlist ❤️"
      );

      setTimeout(() => {

        navigate("/login");

      }, 1500);

      return;
    }

    const result =
      addToWishlistUtil(item);

    if (result.success) {

      toast.success(
        result.message
      );

    } else {

      toast.warning(
        result.message
      );

    }
  };

  return (

    <Link
      to={`/product/${item._id}`}
      className="block h-full"
    >

      <div className="h-full bg-white rounded-[25px] overflow-hidden shadow-lg group border border-gray-200 hover:-translate-y-2 transition-all duration-500 flex flex-col">

        {/* IMAGE */}

        <div className="overflow-hidden relative h-[260px] flex-shrink-0">

          <img
            src={
              item.image?.startsWith("/uploads")
                ? `${API_BASE_URL}${item.image}`
                : item.image
            }
            alt={item.name}
            className="w-full h-56 object-contain bg-white p-4 rounded-t-3xl"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x300?text=No+Image";
            }}
          />

        </div>

        {/* CONTENT */}

        <div className="p-5 flex flex-col flex-grow">

          <h1 className="text-[22px] font-serif mb-2 text-black leading-tight flex-grow">
            {item.name}
          </h1>

          <p className="text-[#c89b3c] text-xl mb-5 font-semibold">
            ₹{item.price}
          </p>

          {/* BUTTONS */}

          <div className="flex gap-3 mt-auto">

            <Button
              onClick={addToCart}
              className="flex-1 py-3 text-[12px]"
            >
              ADD TO CART
            </Button>

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