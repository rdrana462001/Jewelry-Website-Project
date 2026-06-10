import React, { useState } from 'react';
import { Search, Heart, SlidersHorizontal, ChevronDown } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Imperial Diamond Necklace",
    price: 15400,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Royal Gold Band",
    price: 3200,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Sapphire Teardrop Earrings",
    price: 8900,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Eternity Diamond Bracelet",
    price: 12500,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Solitaire Engagement Ring",
    price: 24000,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Pearl Drop Pendant",
    price: 1800,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CATEGORIES = ["All", "Necklaces", "Rings", "Earrings", "Bracelets"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $5,000", min: 0, max: 5000 },
  { label: "$5,000 - $15,000", min: 5000, max: 15000 },
  { label: "Over $15,000", min: 15000, max: Infinity }
];

export default function LuxuryCollection() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWishlist = (id) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= selectedPrice.min && product.price <= selectedPrice.max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-luxury-ivory text-luxury-charcoal font-sans selection:bg-luxury-gold selection:text-white">
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="font-cinzel text-5xl md:text-7xl font-bold tracking-wider mb-6 text-luxury-black animate-fade-in">
          Luxury Jewellery
        </h1>
        <p className="font-cormorant text-xl md:text-2xl text-luxury-goldDark mb-12 max-w-2xl mx-auto italic">
          Discover our exclusive collection of timeless masterpieces, crafted for eternity.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search our collection..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-luxury-cream border-2 border-luxury-border/50 rounded-full py-4 pl-14 pr-6 font-cormorant text-xl focus:outline-none focus:border-luxury-gold transition-colors duration-300 placeholder-luxury-charcoal/50"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-luxury-gold" size={24} />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-24 pb-24 flex flex-col lg:flex-row gap-12">
        
        {/* Products Grid - Left Side */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-luxury-border/30 hover:border-luxury-gold/50 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-luxury-cream">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 hover:scale-110"
                  >
                    <Heart 
                      size={20} 
                      className={`transition-colors duration-300 ${wishlist.has(product.id) ? 'fill-luxury-maroon text-luxury-maroon' : 'text-luxury-charcoal'}`} 
                    />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-cinzel text-luxury-gold tracking-widest uppercase mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-cinzel text-xl font-semibold mb-2 line-clamp-1 group-hover:text-luxury-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-cormorant text-2xl mb-6">
                    ${product.price.toLocaleString()}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="w-full relative overflow-hidden group/btn rounded-full border border-luxury-gold/30">
                      <div className="absolute inset-0 bg-luxury-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative block py-3 px-6 font-cinzel text-sm font-semibold tracking-wider text-luxury-charcoal group-hover/btn:text-white transition-colors duration-300">
                        Add to Cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-cormorant text-3xl text-luxury-charcoal/50">No pieces found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Sidebar - Right Side */}
        <div className="w-full lg:w-80 order-1 lg:order-2">
          <div className="lg:sticky lg:top-8 bg-white/80 backdrop-blur-md border border-luxury-border rounded-3xl p-8 shadow-xl shadow-luxury-gold/5">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-luxury-border/50">
              <SlidersHorizontal className="text-luxury-gold" size={24} />
              <h2 className="font-cinzel text-2xl font-bold tracking-wider">Refine By</h2>
            </div>

            {/* Category Filter */}
            <div className="mb-10">
              <h3 className="font-cinzel text-sm font-bold tracking-widest text-luxury-gold mb-6 uppercase">
                Collections
              </h3>
              <div className="space-y-4">
                {CATEGORIES.map(category => (
                  <label key={category} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-luxury-border rounded group-hover:border-luxury-gold transition-colors">
                      <input 
                        type="radio" 
                        name="category" 
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="opacity-0 absolute inset-0 cursor-pointer"
                      />
                      {selectedCategory === category && (
                        <div className="w-3 h-3 bg-luxury-gold rounded-sm" />
                      )}
                    </div>
                    <span className={`font-cormorant text-xl transition-colors ${selectedCategory === category ? 'text-luxury-charcoal font-semibold' : 'text-luxury-charcoal/70 group-hover:text-luxury-gold'}`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-luxury-border to-transparent mb-10" />

            {/* Price Filter */}
            <div>
              <h3 className="font-cinzel text-sm font-bold tracking-widest text-luxury-gold mb-6 uppercase">
                Price Range
              </h3>
              <div className="space-y-4">
                {PRICE_RANGES.map((range, index) => (
                  <label key={index} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-luxury-border rounded-full group-hover:border-luxury-gold transition-colors">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={selectedPrice.label === range.label}
                        onChange={() => setSelectedPrice(range)}
                        className="opacity-0 absolute inset-0 cursor-pointer"
                      />
                      {selectedPrice.label === range.label && (
                        <div className="w-2.5 h-2.5 bg-luxury-gold rounded-full" />
                      )}
                    </div>
                    <span className={`font-cormorant text-xl transition-colors ${selectedPrice.label === range.label ? 'text-luxury-charcoal font-semibold' : 'text-luxury-charcoal/70 group-hover:text-luxury-gold'}`}>
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
