import { useState } from "react";
import PhotoUploader from "./PhotoUploader";

function ProfileSidebar({
  user,
  formData,
  isEditing,
  profilePhoto,
  onPhotoChange,
  onEditClick,
}) {
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);

  const memberSinceDate = new Date(user?.createdAt || new Date());
  const memberSince = memberSinceDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const stats = [
    { label: "Orders", value: "12", icon: "🛍️" },
    { label: "Wishlist", value: "8", icon: "❤️" },
    { label: "Cart Items", value: "5", icon: "🛒" },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border-2 border-[#c89b3c]/20 p-8 sticky top-32 overflow-y-auto max-h-[calc(100vh-200px)] group hover:shadow-2xl transition duration-500">
      
      {/* PROFILE PHOTO */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#c89b3c] via-[#f5d98a] to-[#ffd699] flex items-center justify-center text-6xl shadow-2xl border-4 border-white ring-4 ring-[#c89b3c]/20 overflow-hidden">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              "👤"
            )}
          </div>
          {isEditing && (
            <button
              onClick={() => setShowPhotoUpload(true)}
              className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#c89b3c] text-white flex items-center justify-center text-lg hover:scale-110 transition duration-300 shadow-lg"
            >
              📷
            </button>
          )}
        </div>

        {showPhotoUpload && (
          <PhotoUploader
            onPhotoSelect={onPhotoChange}
            onClose={() => setShowPhotoUpload(false)}
          />
        )}
      </div>

      {/* NAME & BADGE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-black mb-2">
          {formData?.name || user?.name}
        </h2>
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black rounded-full font-bold text-sm shadow-lg">
          ✨ VIP MEMBER
        </div>
      </div>

      {/* MEMBER SINCE */}
      <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
        <p className="text-gray-600 text-sm">Member Since</p>
        <p className="text-xl font-bold text-[#c89b3c]">{memberSince}</p>
      </div>

      {/* QUICK STATS */}
      <div className="space-y-3 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-[#faf6ed] to-white rounded-2xl hover:shadow-lg hover:bg-[#c89b3c]/5 transition duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="font-semibold text-gray-700">{stat.label}</span>
            </div>
            <span className="text-2xl font-bold text-[#c89b3c]">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* BIO SECTION */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-6 text-center">
        <p className="text-sm text-white/70 mb-2">User Bio</p>
        <p className="text-white/90 italic leading-relaxed">
          {formData?.bio || "Luxury jewellery enthusiast & VIP member"}
        </p>
      </div>
    </div>
  );
}

export default ProfileSidebar;