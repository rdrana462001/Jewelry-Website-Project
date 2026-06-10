import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { addToCart as addToCartUtil, addToWishlist as addToWishlistUtil } from "../utils/storageUtils";

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import QuantitySelector from "./components/QuantitySelector";

function ProductDetails() {
  
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product from MongoDB using the _id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f5ef] flex items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-serif">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8f5ef] flex items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-serif">Product Not Found</h1>
      </div>
    );
  }

  const addToCart = () => {
    addToCartUtil({ ...product, quantity });
    alert(`${quantity} ${product.name} Added To Cart 🛍️`);
  };

  const addToWishlist = () => {
    const result = addToWishlistUtil(product);
    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] pt-32 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ProductImage image={product.image} name={product.name} />

        <div>
          <ProductInfo
            name={product.name}
            price={product.price}
            description={product.description}
          />

          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;