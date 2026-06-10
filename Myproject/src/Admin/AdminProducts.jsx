import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";


function AdminProducts() {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
    
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Failed to delete product");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
  <div className="flex">

    <AdminSidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
    />

    <div className="flex-1">

      <AdminNavbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

    
<div className="min-h-screen py-10 px-6 pt-28 bg-gradient-to-br from-[#faf7f2] via-[#f8f1df] to-[#f4ead2]">        {/* HEADER */}
        <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
          <div>
<h1
  className="
  text-5xl
  md:text-6xl
  font-bold
  bg-gradient-to-r
  from-amber-700
  via-yellow-500
  to-amber-700
  bg-clip-text
  text-transparent
"
>
  Product Management
</h1>
            <p className="text-gray-500 mt-2">Manage your luxury inventory</p>
          </div>
          <Link
            to="/add-product"
className="
px-7
py-3
rounded-2xl
font-semibold
text-white
bg-gradient-to-r
from-amber-600
via-yellow-500
to-amber-600
shadow-lg
hover:scale-105
transition-all
duration-300
"          >
            + Add New Product
          </Link>
        </div>

        {/* SEARCH */}
        <div className="
bg-white/80
backdrop-blur-xl
rounded-[30px]
p-6
mb-8
shadow-[0_10px_40px_rgba(212,175,55,0.15)]
border
border-amber-100
max-w-7xl
mx-auto
">
          <input
            type="text"
            placeholder="Search Products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
className="
w-full
px-5
py-4
rounded-2xl
border
border-amber-200
focus:ring-2
focus:ring-amber-400
outline-none
transition-all
"          />
        </div>

        {/* PRODUCTS TABLE */}
        <div className="
bg-white/80
backdrop-blur-xl
rounded-[35px]
overflow-hidden
max-w-7xl
mx-auto
border
border-amber-100
shadow-[0_20px_60px_rgba(212,175,55,0.15)]
">
          <div className="
p-8
border-b
border-amber-100
bg-gradient-to-r
from-[#faf7f2]
to-[#f8f1df]
">
            <h2 className="text-3xl font-serif text-gray-800">All Products ({filteredProducts.length})</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="p-5 text-left text-gray-500 font-medium">Image</th>
                  <th className="p-5 text-left text-gray-500 font-medium">Name</th>
                  <th className="p-5 text-left text-gray-500 font-medium">Category</th>
                  <th className="p-5 text-left text-gray-500 font-medium">Price</th>
                  <th className="p-5 text-left text-gray-500 font-medium">Stock</th>
                  <th className="p-5 text-center text-gray-500 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product._id} className="
border-b
border-amber-50
hover:bg-amber-50/50
transition-all
duration-300
">
                    <td className="p-5">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <img 
                          src={product.image || "/placeholder.jpg"} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {e.target.src = "https://via.placeholder.com/150"}}
                        />
                      </div>
                    </td>
                    <td className="p-5 font-medium text-gray-800">{product.name}</td>
                    <td className="p-5 text-gray-600 capitalize">{product.category}</td>
                    <td className="p-5 font-semibold text-[#c89b3c]">
                      {typeof product.price === 'number' ? `₹${product.price.toLocaleString('en-IN')}` : product.price}
                    </td>
                    <td className="p-5 text-gray-600">
                      <span className={`px-3 py-1 rounded-full text-sm ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center gap-3">
                        <Link
                          to={`/edit-product/${product._id}`}
                          className="px-4 py-2 bg-[#f8f5ef] text-[#c89b3c] border border-[#c89b3c] rounded-lg hover:bg-[#c89b3c] hover:text-white transition"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteProduct(product._id)}
                          className="px-4 py-2 bg-red-50 text-red-500 border border-red-200 rounded-lg hover:bg-red-500 hover:text-white transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-10 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminProducts;
