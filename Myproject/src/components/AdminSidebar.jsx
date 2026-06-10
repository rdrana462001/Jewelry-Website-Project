import { useNavigate } from "react-router-dom";

function AdminSidebar({ activeTab, onLogout }) {
  const navigate = useNavigate();

const menuItems = [
  {
    label: "Dashboard",
    icon: "📊",
    path: "/admin",
  },

  {
    label: "Add Product",
    icon: "➕",
    path: "/add-product",
  },

  {
    label: "Products",
    icon: "📦",
    path: "/products",
  },

  {
    label: "Users",
    icon: "👥",
    path: "/users",
  },
  {
    label: "Admin User",
    icon: "👥",
    path: "/admin-orders",
  },
];

  return (
    <div className="w-64 bg-black text-white flex flex-col shadow-2xl fixed h-screen left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-[#c89b3c]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c89b3c] rounded-lg flex items-center justify-center font-bold text-black">
            L
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#c89b3c]">
              LUXORA
            </h1>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-6">
        {menuItems.map((item) => (
      <button
  key={item.label}
  onClick={() => navigate(item.path)}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 mb-3 ${
    window.location.pathname === item.path
      ? "bg-[#c89b3c] text-black font-semibold"
      : "text-gray-300 hover:bg-gray-900 hover:text-[#c89b3c]"
  }`}
>
  <span className="text-xl">
    {item.icon}
  </span>

  <span>
    {item.label}
  </span>
</button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-[#c89b3c]">
        <button
          onClick={onLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;