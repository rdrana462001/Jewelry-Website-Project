import { useState } from "react";
import products from "../data/products";
import ProductViewer from "../components/ProductViewer";
import ProductInfo from "../components/ProductInfo";

function Shop() {
  const [product] = useState(products[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white flex">
      
      <ProductInfo
        product={product}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <ProductViewer
        product={product}
        selectedImage={selectedImage}
      />

    </div>
  );
}

export default Shop;