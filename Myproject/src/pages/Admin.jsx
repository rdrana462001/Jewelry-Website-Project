import { useState } from "react";

function Admin() {
  const [products, setProducts] = useState([
    { id: 1, name: "Diamond Ring", price: "₹1,20,000", category: "Rings", image: "/ring1.jpg" },
    { id: 2, name: "Gold Ring", price: "₹80,000", category: "Rings", image: "/ring2.jpg" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Add Product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...formData, id: editingId } : p
        )
      );
      setEditingId(null);
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", price: "", category: "", image: "" });
  };

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Edit Product
  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-black text-white p-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-400 mt-2">Manage your products</p>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* ADD PRODUCT FORM */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {editingId ? "Edit Product" : "Add New Product"}
          </h2>

          <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#c89b3c]"
              required
            />

            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#c89b3c]"
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#c89b3c]"
              required
            >
              <option value="">Select Category</option>
              <option value="Rings">Rings</option>
              <option value="Necklace">Necklace</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Earring">Earring</option>
            </select>

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#c89b3c]"
              required
            />

            <button
              type="submit"
              className="col-span-2 bg-black text-white py-3 rounded-lg font-bold hover:bg-[#c89b3c] transition duration-500"
            >
              {editingId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        {/* PRODUCTS TABLE */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-6 border-b">Products List</h2>

          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4 text-sm text-gray-500">{product.image}</td>
                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;