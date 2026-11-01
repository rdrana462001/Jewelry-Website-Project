import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";
import "./collection.css";

import Navbar from "../components/Navbar";
import CollectionHeader from "./CollectionHeader";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";
import FilterSidebar from "./FilterSidebar";

function Collection() {
  const { category } = useParams();

  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    axios
      .get(`${API_BASE_URL}/api/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products from database. Please make sure backend is running.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Map UI categories to DB categories
  const categoryMap = {
    "diamond rings": "rings",
    "royal necklace": "necklace",
    "bridal collection": "bridal",
    "luxury bracelets": "bracelet",
  };

  const getNumericPrice = (priceVal) => {
    if (typeof priceVal === "string") {
      return Number(priceVal.replace(/[^0-9.-]+/g, ""));
    }
    return Number(priceVal) || 0;
  };

  let filteredProducts = (category && category.toLowerCase() !== "all")
    ? products.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  filteredProducts = filteredProducts.filter((item) => {
    // Search
    const matchSearch = (item.name || "").toLowerCase().includes(searchTerm.toLowerCase());

    // Category
    const dbTargetCategory = selectedCategory 
      ? (categoryMap[selectedCategory.toLowerCase()] || selectedCategory.toLowerCase()) 
      : "";
    const matchCategory =
      !selectedCategory ||
      selectedCategory === "all" ||
      item.category?.toLowerCase() === dbTargetCategory;

    // Price
    const itemPriceNum = getNumericPrice(item.price);
    const matchMin = !minPrice || itemPriceNum >= Number(minPrice);
    const matchMax = !maxPrice || itemPriceNum <= Number(maxPrice);

    // Stock
    let matchStock = true;
    const stockNum = Number(item.stock) || 0;
    if (inStock && !outOfStock) matchStock = stockNum > 0;
    if (!inStock && outOfStock) matchStock = stockNum === 0;

    // Material (fallback to text search if no material field exists)
    const matchMaterial =
      selectedMaterials.length === 0 ||
      selectedMaterials.some((mat) => 
        item.material?.toLowerCase() === mat.toLowerCase() ||
        (item.name || "").toLowerCase().includes(mat.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(mat.toLowerCase()) ||
        item.category?.toLowerCase() === mat.toLowerCase()
      );

    return (
      matchSearch &&
      matchCategory &&
      matchMin &&
      matchMax &&
      matchStock &&
      matchMaterial
    );
  });

  // Sorting
  if (sortBy === "lowToHigh") {
    filteredProducts.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
  } else if (sortBy === "highToLow") {
    filteredProducts.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  } else if (sortBy === "newest") {
    filteredProducts.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  } else if (sortBy === "bestSelling") {
    filteredProducts.sort((a, b) => (b.sales || 0) - (a.sales || 0));
  }

  // Loading State
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <h2 className="text-2xl text-[#c89b3c]">
            Loading Products...
          </h2>
        </div>
      </>
    );
  }

  // Error State
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 px-4 text-center">
          <h2 className="text-2xl text-red-500 font-semibold">
            {error}
          </h2>
          <p className="text-gray-600 max-w-md">
            Please make sure your backend server is running on <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:5000</code> and MongoDB Atlas is connected.
          </p>
          <button
            onClick={fetchProducts}
            className="px-6 py-2 bg-[#c89b3c] text-white font-medium rounded-full shadow hover:bg-[#b0842e] transition"
          >
            Retry Connection
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="collection-page animated-bg">
        <div className="collection-container">

          {/* Left Side (Products & Headers) */}
          <div className="collection-content">
            <div className="collection-header">
              <CollectionHeader />

              <div className="search-container">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>

          {/* Right Side Filter */}
          <div className="filter-sidebar-wrapper">
            <FilterSidebar
              categories={[
                "All",
                "Diamond Rings",
                "Royal Necklace",
                "Bridal Collection",
                "Luxury Bracelets",
              ]}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              sortBy={sortBy}
              setSortBy={setSortBy}
              inStock={inStock}
              setInStock={setInStock}
              outOfStock={outOfStock}
              setOutOfStock={setOutOfStock}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              setSearchTerm={setSearchTerm}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Collection;