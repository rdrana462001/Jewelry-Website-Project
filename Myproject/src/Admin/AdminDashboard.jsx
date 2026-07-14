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
        className={`admin-dashboard ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      {/* MAIN CONTENT */}
      <div className="admin-main-content">

        <AdminNavbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="admin-dashboard-body">
          <div className="admin-dashboard-content-wrapper">
            {/* DASHBOARD CONTENT */}

            <div className="admin-dashboard-inner-content">
              <div className="admin-dashboard-header-placeholder">
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
              <div className="admin-charts-row">
                <RevenueChart orders={orders} />
                <OrdersChart orders={orders} />
              </div>

              {/* PRODUCTS ROW */}
              <div className="admin-products-row">
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