import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import OrderSummary from "../pages/components/OrderSummary";
import axios from "axios";
import { getWishlist, getCartCount } from "../utils/storageUtils";
// Simplified profile page: safe, preserves auth/localStorage and edit/save/cancel behavior
export default function Profile() {
  const navigate = useNavigate();
  const fileRef = useRef(null);
const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [editing, setEditing] = useState(false);
  const [toast, setToast] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored) {
    navigate("/login");
    return;
  }

  setUser(stored);

  setForm({
    name: stored.name || "",
    email: stored.email || "",
    phone: stored.phone || "",
    address: stored.address || "",
    city: stored.city || "",
    notes: stored.notes || "",
  });

  setPhotoPreview(stored.photo || null);

  axios
    .get(`http://localhost:5000/api/orders/${stored._id}`)
    .then((res) => {
      setOrders(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  setWishlistCount(getWishlist().length);
  setCartCount(getCartCount());

}, [navigate]);
  const handleChange = (k, v) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const saveChanges = async () => {
    if (!validate()) {
      setToast({ type: "error", text: "Fix validation errors" });
      return;
    }
    const updated = { ...user, ...form, photo: photoPreview };
    
    try {
      await axios.put(`http://localhost:5000/api/auth/users/${user._id}`, {
        name: updated.name,
        email: updated.email,
        phone: updated.phone,
        city: updated.city,
        address: updated.address,
        notes: updated.notes,
        photo: updated.photo
      });
      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
      setEditing(false);
      setToast({ type: "success", text: "Profile saved" });
    } catch (err) {
      console.error(err);
      setToast({ type: "error", text: "Failed to update profile" });
    }
  };
  const cancelEdit = () => {
    setForm({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      city: user?.city || "",
      notes: user?.notes || "",
    });
    setPhotoPreview(user?.photo || null);
    setEditing(false);
    setErrors({});
  };

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setToast({ type: "error", text: "Select an image file" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setToast({ type: "error", text: "Max 5MB" });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setPhotoPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => handleFile(e.target.files?.[0]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8f5ef] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c89b3c]" />
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ef] via-white to-[#faf6ed] flex flex-col">
      <Navbar />

      <div className="flex-1 overflow-y-auto pt-28 pb-8 px-4 sm:px-6 md:px-10 lg:px-16 flex items-start">
        {/* <div className="max-w-7xl mx-auto"> */}
          {/* <div className="w-full px-8"> */}
<div className="max-w-[2200px] mx-auto px-4 lg:px-8 w-full">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black">My Profile</h1>
            <p className="text-gray-600 text-lg mt-2">Manage your account information</p>
          </div>

          {/* Main Grid */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* LEFT - Profile card */}
<aside className="lg:col-span-1">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-lg border border-[#c89b3c]/10">
                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#c89b3c]/20 to-gray-100 overflow-hidden shadow-2xl ring-4 ring-white flex items-center justify-center">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-7xl">👤</div>
                    )}
                  </div>

                  {editing && (
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-[#c89b3c] text-white flex items-center justify-center text-2xl hover:scale-110 transition duration-300 shadow-xl hover:shadow-2xl"
                      title="Change photo"
                    >
                      📷
                    </button>
                  )}
                </div>

                {/* Name & Role */}
                <h2 className="text-3xl font-serif font-bold text-black mb-1">
                  {form.name || user.name}
                </h2>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
                  {user.role || "Customer"}
                </p>

                {/* Member Info */}
                <div className="mt-8 px-6 py-5 bg-gradient-to-r from-[#fffaf0] to-white rounded-2xl w-full border-2 border-[#c89b3c]/20 hover:border-[#c89b3c]/50 transition">
                  <p className="text-xs text-gray-500 font-semibold">Member since</p>
                  <p className="text-2xl font-serif font-bold text-[#c89b3c] mt-2">
                    {new Date(user.createdAt || Date.now()).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long" }
                    )}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 w-full grid grid-cols-3 gap-4 py-8 border-y border-gray-200">
                  <div className="text-center hover:bg-[#f8f5ef] p-3 rounded-xl transition">
<div className="text-3xl font-bold text-black">
  {orders.length}
</div>                    <div className="text-xs text-gray-600 mt-2 font-semibold">
                      Orders
                    </div>
                  </div>
                  <div className="text-center hover:bg-[#f8f5ef] p-3 rounded-xl transition">
                    <div className="text-3xl font-bold text-black">{wishlistCount}</div>
                    <div className="text-xs text-gray-600 mt-2 font-semibold">
                      Wishlist
                    </div>
                  </div>
                  <div className="text-center hover:bg-[#f8f5ef] p-3 rounded-xl transition">
                    <div className="text-3xl font-bold text-black">{cartCount}</div>
                    <div className="text-xs text-gray-600 mt-2 font-semibold">
                      Cart
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 w-full space-y-3">
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />

                  {editing && (
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-semibold hover:shadow-lg hover:shadow-[#c89b3c]/30 transition duration-300 transform hover:scale-105"
                    >
                      📷 Change Photo
                    </button>
                  )}

                  {!editing ? (
                    <>
                      <button
                        onClick={() => setEditing(true)}
                        className="w-full py-3 px-4 rounded-xl bg-black text-white font-semibold hover:bg-[#c89b3c] hover:text-black transition duration-300 transform hover:scale-105"
                      >
                        ✎ Edit Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full py-3 px-4 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300 transform hover:scale-105"
                      >
                        🚪 Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={saveChanges}
                        className="w-full py-3 px-4 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105"
                      >
                        ✓ Save Changes
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="w-full py-3 px-4 rounded-xl bg-gray-300 text-black font-semibold hover:bg-gray-400 transition duration-300"
                      >
                        ✕ Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </aside>

            {/* RIGHT - Form and notes */}
            <div className="lg:col-span-3 space-y-6">
              {/* Personal Information */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-lg border border-[#c89b3c]/10 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-black">
                    Personal Information
                  </h2>
                  <span className="text-xs font-semibold text-[#c89b3c] bg-[#c89b3c]/10 px-3 py-1 rounded-full">
                    {editing ? "EDITING" : "VIEW"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : editing
                          ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-2 font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : editing
                          ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-2 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 ${
                        editing
                          ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 ${
                        editing
                          ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Address
                    </label>
                    <input
                      value={form.address}
                      onChange={(e) =>
                        handleChange("address", e.target.value)
                      }
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 ${
                        editing
                          ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* About / Notes */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-lg border border-[#c89b3c]/10 hover:shadow-xl transition">
                <h3 className="text-2xl font-serif font-bold text-black mb-6 pb-4 border-b-2 border-gray-200">
                  About / Notes
                </h3>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Personal Notes
                </label>
                <textarea
                  rows={5}
                  value={form.notes || ""}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  disabled={!editing}
                  placeholder="Add any personal notes or preferences..."
                  className={`w-full px-4 py-3 rounded-xl border-2 transition duration-300 resize-none ${
                    editing
                      ? "border-gray-300 bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-8 right-8 px-6 py-4 rounded-full shadow-2xl font-semibold animate-slideUp ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
