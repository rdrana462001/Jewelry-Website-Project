import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
const [imageFile, setImageFile] = useState(null);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      // Assuming GET /api/products/:id exists
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);

      if (
  ["rings", "necklace", "bridal", "bracelet"].includes(response.data.category)
) {
  setMainCategory("collection");
} else {
  setMainCategory("luxury");
}

setSubCategory(response.data.category);


      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch product details. Please make sure the backend supports GET by ID.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        product
      );
      alert("Product Updated Successfully");
      navigate("/products");
    } catch (error) {
      console.log(error);
      alert("Failed to update product");
    }
  };

  if (loading) {
    return (
      <>
        <AdminNavbar />
        <div className="min-h-screen bg-[#f8f5ef] p-10 flex justify-center items-center">
          <p className="text-2xl text-[#c89b3c] font-serif">Loading Product...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />

      <div className="min-h-screen bg-[#f8f5ef] p-10 pt-28">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-[30px] shadow-xl border border-[#c89b3c]/20">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-5xl font-serif text-black">
              Edit Product
            </h1>
            <button 
              onClick={() => navigate("/products")}
              className="text-gray-500 hover:text-[#c89b3c] transition"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
                className="w-full border border-[#c89b3c] p-4 rounded-xl focus:ring-2 focus:ring-[#c89b3c]/50 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border border-[#c89b3c] p-4 rounded-xl focus:ring-2 focus:ring-[#c89b3c]/50 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Stock</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="w-full border border-[#c89b3c] p-4 rounded-xl focus:ring-2 focus:ring-[#c89b3c]/50 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Category</label>
            <select
  value={mainCategory}
  onChange={(e) => {
    setMainCategory(e.target.value);
    setSubCategory("");
  }}
  className="w-full border border-[#c89b3c] p-4 rounded-xl"
>
  <option value="">Select Main Category</option>

  <option value="collection">
    Collection
  </option>

  <option value="luxury">
    Luxury
  </option>
</select>

<select
  value={subCategory}
  onChange={(e) => {
    setSubCategory(e.target.value);

    setProduct({
      ...product,
      category: e.target.value,
    });
  }}
  className="w-full border border-[#c89b3c] p-4 rounded-xl mt-4"
>
              <label className="block text-gray-700 mb-2 font-medium">Sub Category</label>

  <option value="Select Sub Category">Select Sub Category</option>

  {mainCategory === "collection" && (
    <>
      <option value="rings">Diamond Rings</option>
      <option value="necklace">Royal Necklace</option>
      <option value="bridal">Bridal Collection</option>
      <option value="bracelet">Luxury Bracelets</option>
    </>
  )}

  {mainCategory === "luxury" && (
    <>
      <option value="gold">Premium Gold</option>
      <option value="celebrity">Celebrity Style</option>
      <option value="watches">Luxury Watches</option>
      <option value="fashion">Royal Fashion</option>
    </>
  )}
</select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Image URL</label>
          <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImageFile(e.target.files[0])
  }
  className="w-full border border-[#c89b3c] p-4 rounded-xl"
/>
             {product.image && (
  <div className="mt-4 w-32 h-32 rounded-xl overflow-hidden border border-gray-200">
    <img
      src={
        product.image.startsWith("/uploads")
          ? `http://localhost:5000${product.image}`
          : product.image
      }
      alt="Preview"
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.src =
          "https://via.placeholder.com/150?text=No+Image";
      }}
    />
  </div>
)}
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
                className="w-full border border-[#c89b3c] p-4 rounded-xl h-32 focus:ring-2 focus:ring-[#c89b3c]/50 outline-none"
              />
            </div>

            <button
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] font-bold text-lg hover:shadow-lg transition transform hover:-translate-y-1"
            >
              UPDATE PRODUCT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
