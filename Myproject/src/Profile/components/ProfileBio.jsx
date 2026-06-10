function ProfileBio({ formData, isEditing, onFieldChange }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border-2 border-[#c89b3c]/20 p-8 md:p-10 hover:shadow-2xl transition duration-500 animate-slideUp">
      
      {/* HEADER */}
      <div className="mb-6 pb-4 border-b-2 border-gray-200">
        <h2 className="text-3xl font-serif font-bold text-black mb-2">
          About Me
        </h2>
        <p className="text-gray-600">
          {isEditing ? "Tell us about yourself" : "Your personal bio"}
        </p>
      </div>

      {/* BIO TEXTAREA */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="text-xl">📝</span>
          Personal Bio
        </label>
        <textarea
          value={formData?.bio || ""}
          onChange={(e) => onFieldChange("bio", e.target.value)}
          disabled={!isEditing}
          placeholder="Share your luxury preferences and interests..."
          rows={5}
          className={`w-full px-4 py-3 rounded-2xl border-2 border-gray-300 font-medium resize-none transition duration-300 ${
            isEditing
              ? "bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
              : "bg-[#f8f5ef] cursor-not-allowed text-gray-600"
          }`}
        />
      </div>

      {/* NOTES TEXTAREA */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="text-xl">📌</span>
          Personal Notes
        </label>
        <textarea
          value={formData?.notes || ""}
          onChange={(e) => onFieldChange("notes", e.target.value)}
          disabled={!isEditing}
          placeholder="Add any personal notes or preferences..."
          rows={4}
          className={`w-full px-4 py-3 rounded-2xl border-2 border-gray-300 font-medium resize-none transition duration-300 ${
            isEditing
              ? "bg-white focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
              : "bg-[#f8f5ef] cursor-not-allowed text-gray-600"
          }`}
        />
      </div>

      {isEditing && (
        <p className="text-xs text-gray-500 mt-4">
          💡 Tip: These details help us personalize your experience
        </p>
      )}
    </div>
  );
}

export default ProfileBio;