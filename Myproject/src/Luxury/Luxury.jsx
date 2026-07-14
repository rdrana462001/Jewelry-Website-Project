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
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

    
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  let filteredProducts = category
    ? products.filter(
        (item) =>
          item.category?.toLowerCase() ===
          category.toLowerCase()
      )
    : products;
filteredProducts = filteredProducts.filter((item) => {
  const matchSearch = item.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchCategory =
    !selectedCategory ||
    selectedCategory === "All" ||
    item.category === selectedCategory;

  const matchMin =
    !minPrice ||
    Number(item.price) >= Number(minPrice);

  const matchMax =
    !maxPrice ||
    Number(item.price) <= Number(maxPrice);

  const matchStock =
    (!inStock && !outOfStock) ||
    (inStock && item.stock > 0) ||
    (outOfStock && item.stock === 0);

  return (
    matchSearch &&
    matchCategory &&
    matchMin &&
    matchMax &&
    matchStock
  );
});
  
if (sortBy === "lowToHigh") {
  filteredProducts.sort(
    (a, b) => Number(a.price) - Number(b.price)
  );
}

if (sortBy === "highToLow") {
  filteredProducts.sort(
    (a, b) => Number(b.price) - Number(a.price)
  );
}

if (sortBy === "name") {
  filteredProducts.sort(
    (a, b) => a.name.localeCompare(b.name)
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
                "Gold",
                "Celebrity",
                "Watches",
                "Fashion",
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
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Luxury;