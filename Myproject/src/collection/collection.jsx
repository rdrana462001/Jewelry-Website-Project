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
<div
  className="animated-bg pt-36 pb-10 px-4 lg:px-10 lg:pb-22"
  style={{ minHeight: "100vh" }}
>
  <div className="flex flex-col lg:flex-row gap-8 items-start max-w-[1800px] mx-auto">
    
    {/* Left Side (Products & Headers) */}
<div className="order-2 lg:order-1 flex-1 min-w-0 w-full">
        <div className="text-center mb-12">
        <CollectionHeader />
        <div className="mt-8 flex justify-center">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>

    {/* Right Side Filter */}
<div className="order-1 lg:order-2 w-full lg:w-[320px] flex-shrink-0 lg:sticky lg:top-36 z-10">
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