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

  filteredProducts = filteredProducts.filter(
    (item) => {
      const matchSearch =
        item.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchCategory =
        !selectedCategory ||
        item.category === selectedCategory;

      const matchMin =
        !minPrice ||
        Number(item.price) >= Number(minPrice);

      const matchMax =
        !maxPrice ||
        Number(item.price) <= Number(maxPrice);

      return (
        matchSearch &&
        matchCategory &&
        matchMin &&
        matchMax
      );
    }
  );

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
          "Rings",
          "Necklace",
          "Bridal",
          "Bracelet",
          "Gold",
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

export default Collection;