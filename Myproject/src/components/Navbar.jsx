import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import { getCartCount } from "../utils/storageUtils";
import cartIcon from "../assets/cart-icon.png";
import "./Navbar.css";

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
  
const menuClass = "nav-menu-link";

const defaultLinks = (
  <>
    <a
      href="/dashboard"
      className={menuClass}
    >
      Home
    </a>

    {/* COLLECTION */}
    <div className="nav-group">
      <button
        className={menuClass}
      >
        Collection 
      </button>

      <div className="nav-dropdown">
        <a href="/collection/rings" className="nav-dropdown-link">
           Diamond Rings
        </a>

        <a href="/collection/necklace" className="nav-dropdown-link">
           Royal Necklace
        </a>

        <a href="/collection/bridal" className="nav-dropdown-link">
           Bridal Collection
        </a>

        <a href="/collection/bracelet" className="nav-dropdown-link">
          Luxury Bracelets
        </a>
      </div>
    </div>

    {/* LUXURY */}
    <div className="nav-group">
      <button
        className={menuClass}
      >
        Luxury 
      </button>

      <div className="nav-dropdown">
        <a href="/luxury/gold" className="nav-dropdown-link">
           Premium Gold
        </a>

        <a href="/luxury/celebrity" className="nav-dropdown-link">
           Celebrity Style
        </a>

        <a href="/luxury/watches" className="nav-dropdown-link">
           Luxury Watches
        </a>

        <a href="/luxury/fashion" className="nav-dropdown-link">
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
<nav className="navbar-wrapper">
<div className="navbar-container">
          {/* LOGO */}
        <div className="navbar-logo-container">
          <Link to="/dashboard" className="navbar-logo-icon">
            <span className="navbar-logo-star">✦</span>
          </Link>
          <div>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
<h1 className="navbar-logo-title">
  LUXORA
</h1>       </Link>
<p className="navbar-logo-subtitle">PREMIUM JEWELLERY</p>
          </div>
        </div>

        {/* MENU */}
<div
  className="navbar-menu-desktop"
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
  className="navbar-menu-mobile-btn"
>
  {isMenuOpen ? "✕" : "☰"}
</button>
        {/* RIGHT SIDE */}
<div className="navbar-right-container">         {/* SEARCH */}
   
          {/* ICONS */}
          <div className="navbar-icons-container">
         {user && (
  <Link
    to="/wishlist"
    className="navbar-wishlist-icon"
  >
    ♡
  </Link>
)}
{user && (
  <Link
    to="/cart"
    className="navbar-cart-wrapper"
  >
    <img
      src={cartIcon}
      alt="Cart"
      className="navbar-cart-icon"
    />

    {cartCount > 0 && (
      <span className="navbar-cart-badge">
        {cartCount}
      </span>
    )}
  </Link>
)}
{user && (
  <Link to="/profile" style={{ textDecoration: 'none' }}>
    <Button className="navbar-profile-btn">
      PROFILE
    </Button>
  </Link>
)}

{/* Mobile Profile Icon */}
<Link
  to="/profile"
  className="navbar-profile-mobile"
>
  👤
</Link>
          </div>
        </div>
      </div>
    </nav>
    {isMenuOpen && (
  <div className="navbar-mobile-menu">
    <a href="/dashboard" className="navbar-mobile-link">
      Home
    </a>

    <a href="/collection/rings" className="navbar-mobile-link">
      Rings
    </a>

    <a href="/collection/necklace" className="navbar-mobile-link">
      Necklace
    </a>

    <a href="/collection/bridal" className="navbar-mobile-link">
      Bridal
    </a>

    <a href="/collection/bracelet" className="navbar-mobile-link">
      Bracelet
    </a>

    <a href="/luxury/gold" className="navbar-mobile-link">
      Luxury
    </a>

    {user && (
      <a href="/my-orders" className="navbar-mobile-link">
        My Orders
      </a>
    )}

    {!user && (
      <a href="/login" className="navbar-mobile-link">
        Login
      </a>
    )}
  </div>
  
)}
</>
  );
}
