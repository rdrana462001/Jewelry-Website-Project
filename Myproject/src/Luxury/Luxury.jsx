import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";
import FilterSidebar from "../collection/FilterSidebar";
import Navbar from "../components/Navbar";
import LuxuryHeader from "./LuxuryHeader";
import ProductGrid from "../collection/ProductGrid";
import SearchBar from "../collection/SearchBar";
import "./Luxury.css";

function Luxury() {
  const { category } = useParams();
  
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

  let filteredProducts = category
    ? products.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  filteredProducts = filteredProducts.filter((item) => {
    // Search
    const matchSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase());

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

    // Material
    const matchMaterial =
      selectedMaterials.length === 0 ||
      selectedMaterials.some((mat) => 
        item.material?.toLowerCase() === mat.toLowerCase() ||
        item.name?.toLowerCase().includes(mat.toLowerCase()) ||
        item.description?.toLowerCase().includes(mat.toLowerCase()) ||
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

  return (
    <>
      <Navbar />
      <div
        className="animated-bg luxury-container"
        style={{ minHeight: "100vh" }}
      >
        <div className="luxury-layout">
          
          {/* Left Side (Products & Headers) */}
          <div className="luxury-main-content">
            <div className="luxury-header-wrapper">
              <LuxuryHeader />
              <div className="luxury-search-wrapper">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>

          {/* Right Side Filter */}
          <div className="luxury-sidebar-wrapper">
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

export default Luxury;