import { Search, MapPin, Phone, User, ShoppingCart, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["GOLD", "DIAMOND", "SILVER", "WEDDING", "COLLECTIONS", "GIFTING"];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 shadow-md`}>
      {/* Top Bar - Maroon */}
      <div className={`bg-kalyan-maroon text-white text-xs py-1.5 px-6 md:px-12 flex justify-between items-center transition-all ${isScrolled ? 'hidden' : 'flex'}`}>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 hover:text-kalyan-gold cursor-pointer"><MapPin size={14} /> Store Locator</span>
          <span className="flex items-center gap-1 hover:text-kalyan-gold cursor-pointer"><Phone size={14} /> 1800-425-7333</span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-kalyan-gold cursor-pointer">Franchise Enquiries</span>
          <span className="hover:text-kalyan-gold cursor-pointer">About Us</span>
        </div>
      </div>

      {/* Main Nav - White */}
      <div className="bg-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-kalyan-text hover:text-kalyan-maroon">
            <Menu strokeWidth={1.5} size={24} />
          </button>
          {/* Brand Logo */}
          <div className="text-center cursor-pointer">
            <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-kalyan-maroon uppercase">
              Kalyan
            </h1>
            <p className="text-[10px] tracking-widest text-kalyan-gold uppercase font-semibold">Jewellers</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-kalyan-text hover:text-kalyan-maroon transition-colors tracking-wide">
              {link}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-kalyan-text">
          <button className="hover:text-kalyan-maroon transition-colors">
            <Search strokeWidth={1.5} size={20} />
          </button>
          <button className="hover:text-kalyan-maroon transition-colors hidden md:block">
            <User strokeWidth={1.5} size={20} />
          </button>
          <button className="hover:text-kalyan-maroon transition-colors relative">
            <ShoppingCart strokeWidth={1.5} size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-kalyan-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
