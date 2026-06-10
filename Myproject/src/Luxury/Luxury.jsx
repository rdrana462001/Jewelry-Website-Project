import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterSidebar from "../collection/FilterSidebar";
import Navbar from "../components/Navbar";
import LuxuryHeader from "./LuxuryHeader";
import ProductGrid from "../collection/ProductGrid";
import SearchBar from "../collection/SearchBar";
// import "./Luxury.css";
import "../collection/Collection.css";

function Luxury() {
  const { category } = useParams();
  

//   const [inStock, setInStock] = useState(false);
// const [outOfStock, setOutOfStock] = useState(false);

//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

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
      .get("http://localhost:5000/api/products")
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
        className="animated-bg pt-36 pb-10 px-4 lg:px-10 lg:pb-22"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-[1800px] mx-auto">
          
          {/* Left Side (Products & Headers) */}
          <div className="flex-1 min-w-0 w-full">
            <div className="text-center mb-12">
              <LuxuryHeader />
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
          <div className="w-full lg:w-[320px] flex-shrink-0 lg:sticky lg:top-36 z-10">
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