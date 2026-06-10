
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import { getCartCount } from "../utils/storageUtils";
import cartIcon from "../assets/cart-icon.png";

export default function Navbar({ customLinks }) {
const user = JSON.parse(
  localStorage.getItem("user")
);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const count = getCartCount();
      setCartCount(count);
    };
    handleStorageChange(); // initial load
    window.addEventListener("storage", handleStorageChange);
    // Custom event for local changes
    window.addEventListener("cartUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);
  
const menuClass = `
relative
text-[30px]
font-extrabold
font-semibold
tracking-[1.5px]
text-[#f5d98a]
hover:text-[#f5d98a]
transition-all
duration-500
after:absolute
after:left-0
after:-bottom-2
after:w-0
after:h-[2px]
after:bg-gradient-to-r
after:from-[#c89b3c]
after:to-[#f5d98a]
after:transition-all
after:duration-500
hover:after:w-full
`;
const defaultLinks = (
  <>
    <a
      href="/dashboard"
      className={menuClass}
    >
      Home
    </a>

    {/* COLLECTION */}
    <div className="relative group">
      <button
        className={menuClass}
      >
        Collection 
      </button>

      <div
        className="
        absolute
        top-[65px]
        left-1/2
        -translate-x-1/2
        w-[300px]
        bg-white/95
        backdrop-blur-xl
        border
        border-[#f1e3b0]
        rounded-2xl
        shadow-[0_25px_60px_rgba(0,0,0,0.15)]
        opacity-0
        invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all
        duration-500
        p-6
        space-y-4
        z-50
        "
      >
        <a href="/collection/rings" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Diamond Rings
        </a>

        <a href="/collection/necklace" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Royal Necklace
        </a>

        <a href="/collection/bridal" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Bridal Collection
        </a>

        <a href="/collection/bracelet" className="block text-black hover:text-[#c89b3c] text-lg transition">
          Luxury Bracelets
        </a>
      </div>
    </div>

    {/* LUXURY */}
    <div className="relative group">
      <button
        className={menuClass}
      >
        Luxury 
      </button>

      <div
        className="
        absolute
        top-[65px]
        left-1/2
        -translate-x-1/2
        w-[300px]
        bg-white/95
        backdrop-blur-xl
        border
        border-[#f1e3b0]
        rounded-2xl
        shadow-[0_25px_60px_rgba(0,0,0,0.15)]
        opacity-0
        invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all
        duration-500
        p-6
        space-y-4
        z-50
        "
      >
        <a href="/luxury/gold" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Premium Gold
        </a>

        <a href="/luxury/celebrity" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Celebrity Style
        </a>

        <a href="/luxury/watches" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Luxury Watches
        </a>

        <a href="/luxury/fashion" className="block text-black hover:text-[#c89b3c] text-lg transition">
           Royal Fashion
        </a>
      </div>
    </div>

    {user && (
      <a
        href="/my-orders"
        className={menuClass}
      >
        My Orders
      </a>
    )}

    {!user && (
      <a
        href="/login"
        className={menuClass}
      >
        Login
      </a>
    )}

    <a
      href="/logout"
      className={menuClass}
    >
      Logout
    </a>
  </>
);
  return (
    <>
<nav className="fixed top-0 left-0 w-full z-50">
<div className="bg-[#252f4a] px-5 md:px-10 py-4 md:py-5 flex items-center justify-between">
          {/* LOGO */}
          {/* #182C36 */}
          {/* #253063 */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/dashboard" className="w-10 h-10 md:w-14 md:h-14 rounded-none bg-gradient-to-br from-[#c89b3c] via-[#f5d98a] to-[#fff2b0] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform">
            <span className="text-black text-lg md:text-xl">✦</span>
          </Link>
          <div>
            <Link to="/dashboard">
<h1
  className="
  text-2xl
  sm:text-3xl
  md:text-6xl
  font-semibold
  tracking-[4px]
  text-[#f5d98a]
  leading-none
  "
  style={{
    fontFamily: "Bodoni Moda, serif"
  }}
>
  LUXORA
</h1>       </Link>
<p className="text-white hidden sm:block text-[8px] md:text-[10px] tracking-[3px] md:tracking-[5px] text-[#c89b3c] mt-1 font-bold">PREMIUM JEWELLERY</p>
          </div>
        </div>

        {/* MENU */}
<div
  className="
  hidden
  lg:flex
  items-center
  gap-12
  xl:gap-16
  text-[22px]
  xl:text-[28px]
  text-white
  "
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: "1px",
    fontWeight: "600"
  }}
>
  {customLinks || defaultLinks}
</div>
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="
  lg:hidden
  text-white
  text-3xl
  px-2
  "
>
  {isMenuOpen ? "✕" : "☰"}
</button>
        {/* RIGHT SIDE */}
<div className="flex items-center gap-2 md:gap-6">         {/* SEARCH */}
   
          {/* ICONS */}
          <div className="flex items-center gap-4 md:gap-6">
         {user && (
  <Link
    to="/wishlist"
    className="text-2xl md:text-3xl text-white"
  >
    ♡
  </Link>
)}
{/* 
{user && (
  <Link
    to="/cart"
    className="relative group"
  >
    <span>🛍️</span>

    {cartCount > 0 && (
      <span>
        {cartCount}
      </span>
    )}
  </Link>
)} */}
{user && (
  <Link
    to="/cart"
    className="relative group"
  >
    <img
      src={cartIcon}
      alt="Cart"
      className="
        w-8
        h-8
        object-contain
        hover:scale-110
        transition
        duration-300
      "
    />

    {cartCount > 0 && (
      <span
        className="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          text-xs
          font-bold
          w-5
          h-5
          rounded-full
          flex
          items-center
          justify-center
        "
      >
        {cartCount}
      </span>
    )}
  </Link>
)}
{user && (
  <Link to="/profile">
    <Button
      className="
      hidden md:flex
      items-center
      justify-center
      px-6
      py-2
      text-sm
      "
    >
      PROFILE
    </Button>
  </Link>
)}

{/* Mobile Profile Icon */}
<Link
  to="/profile"
className="
md:hidden
text-white
text-xl
hover:text-[#c89b3c]
"
>
  👤
</Link>
          </div>
        </div>
      </div>
    </nav>
    {isMenuOpen && (
  <div
    className="
    fixed
    top-[80px]
    left-0
    w-full
    z-40
    lg:hidden
    bg-black/95
    backdrop-blur-xl
    text-white
    px-6
    py-5
    space-y-4
    border-t
    border-white/10
    "
  >
    <a href="/dashboard" className="block">
      Home
    </a>

    <a href="/collection/rings" className="block">
      Rings
    </a>

    <a href="/collection/necklace" className="block">
      Necklace
    </a>

    <a href="/collection/bridal" className="block">
      Bridal
    </a>

    <a href="/collection/bracelet" className="block">
      Bracelet
    </a>

    <a href="/luxury/gold" className="block">
      Luxury
    </a>

    {user && (
      <a href="/my-orders" className="block">
        My Orders
      </a>
    )}

    {!user && (
      <a href="/login" className="block">
        Login
      </a>
    )}
  </div>
  
)}
</>
  );
}
