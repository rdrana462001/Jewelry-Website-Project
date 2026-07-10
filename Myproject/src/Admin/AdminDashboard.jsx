import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import DashboardCards from "./Components/DashboardCards";
import RevenueChart from "./Components/RevenueChart";
import OrdersChart from "./Components/OrdersChart";
import TopProducts from "./Components/TopProducts";
import DashboardHeader from "./Components/DashboardHeader";
import LowStockProducts from "./Components/LowStockProducts";
import axios from "axios";
import API_BASE_URL from "../config/api";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
  });
  const [darkMode, setDarkMode] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const fetchOrders = async () => {
    const res = await axios.get(
      `${API_BASE_URL}/api/orders`
    );

    setOrders(res.data);
  };
  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchStats();
    fetchOrders();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/auth/users`
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/stats`
      );
      setStats(response.data);
    } catch (error) {
      console.log("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/auth/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`flex min-h-screen transition-all duration-500 ${darkMode
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white"
        : "bg-gradient-to-br from-[#faf7f2] via-[#f8f1df] to-[#f4ead2] text-black"
        }`}
    >
      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col lg:ml-64">

        <AdminNavbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="p-6 overflow-auto">
          <div className="backdrop-blur-xl bg-white/30 dark:bg-black/20 rounded-3xl shadow-2xl border border-white/20 p-6">
            {/* DASHBOARD CONTENT */}

            <div className="flex-1 overflow-auto">
              <div className="p-4 md:p-8 lg:p-10 max-w-[1900px] mx-auto animate-fadeIn">
              </div>

              {/* HEADER */}
              <DashboardHeader />

              {/* STATS CARDS ROW 1 */}
              <DashboardCards
                users={users}
                products={products}
                stats={stats}
                loading={loading}
              />

              {/* CHARTS ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-8">              <RevenueChart orders={orders} />
                <OrdersChart orders={orders} />
              </div>

              {/* PRODUCTS ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <TopProducts products={products} />
                <LowStockProducts products={products} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;