import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("adminName") || "Admin";

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white px-6 md:px-10 py-6 shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#c89b3c] flex items-center justify-center text-black font-bold text-xl">
            {adminName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-lg font-bold">Welcome, {adminName}</h2>
            <p className="text-gray-300 text-sm">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/profile")}
            className="px-4 py-2 rounded-lg bg-[#c89b3c] text-black hover:bg-opacity-90 transition duration-300 font-semibold"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;