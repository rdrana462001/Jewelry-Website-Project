import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

//   const menuItems = [
//     { id: "dashboard", label: "Dashboard", icon: "📊" },
//     { id: "add-product", label: "Add Product", icon: "➕" },
//     { id: "products", label: "Products", icon: "📦" },
//     { id: "orders", label: "Orders", icon: "🛒" },
//     { id: "customers", label: "Customers", icon: "👥" },
//     { id: "reviews", label: "Reviews", icon: "⭐" },
//     { id: "analytics", label: "Analytics", icon: "📈" },
//     { id: "settings", label: "Settings", icon: "⚙️" },
//   ];
const menuItems = [
  {
    label: "Dashboard",
    icon: "",
    path: "/admin",
  },

  {
    label: "Add Product",
    icon: "",
    path: "/add-product",
  },

  {
    label: "Products",
    icon: "",
    path: "/products",
  },

  {
    label: "Users",
    icon: "",
    path: "/users",
  },
   {
    label: "Admin Orders",
    icon: "",
    path: "/admin-orders",
  },
  
];
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      {/* <div
        className={`fixed lg:relative w-64 h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      > */}
  <div
  className={`fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-black via-[#020617] to-black text-white shadow-2xl z-50 transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
  }`}
>
        {/* LOGO */}
        <div className="p-6 border-b border-[#c89b3c]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#c89b3c] to-yellow-500 rounded-lg flex items-center justify-center font-bold text-black text-xl shadow-lg">
              L
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#c89b3c]">
                LUXORA
              </h1>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => (
           <Link
  key={item.label}
  to={item.path}
  className="
  flex
  items-center
  gap-3
  px-4
  py-3
  rounded-xl
  text-gray-300
  hover:bg-[#c89b3c]
  hover:text-black
  transition
  duration-300
  group
  "
>
                <span className="text-2xl group-hover:scale-110 transition duration-300">
                  {item.icon}
                </span>
                <span className="font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* LOGOUT */}
        <div className="p-6 border-t border-[#c89b3c]/30">
          <button
            onClick={handleLogout}
            className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/30"
          >
             Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;