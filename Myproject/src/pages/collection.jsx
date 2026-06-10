import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CollectionHeader from "../components/collection/CollectionHeader";
import SearchBar from "../components/collection/SearchBar";
import ProductGrid from "../components/collection/ProductGrid";
import { useLocation } from "react-router-dom";
import API_BASE_URL from "../config/api";

function Collection() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const search = query.get("search") || "";
  
  let filteredProducts = category
    ? products.filter(
        (item) =>
          item.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  // Apply search filter
  filteredProducts = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f8f5ef] px-5 md:px-10 py-36">
        <CollectionHeader category={category} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}

export default Collection;