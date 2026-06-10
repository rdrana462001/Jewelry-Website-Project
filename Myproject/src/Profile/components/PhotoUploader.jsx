import { useRef, useState } from "react";

function PhotoUploader({ onPhotoSelect, onClose }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      setPreview(result);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (preview) {
      onPhotoSelect(preview);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-[40px] shadow-2xl p-8 max-w-md w-full animate-slideUp">
        
        {/* HEADER */}
        <h2 className="text-2xl font-serif font-bold text-black mb-2">
          Upload Profile Photo
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Choose a new profile picture
        </p>

        {/* PREVIEW */}
        {preview ? (
          <div className="mb-6 rounded-2xl overflow-hidden border-2 border-[#c89b3c]/30">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
          </div>
        ) : (
          <div className="mb-6 w-full h-64 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <p className="text-4xl mb-2">📷</p>
              <p className="text-gray-600 text-sm">Click to select image</p>
            </div>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 rounded-lg">
            <p className="text-red-700 text-sm font-semibold">{error}</p>
          </div>
        )}

        {/* FILE INPUT */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 py-3 rounded-full border-2 border-[#c89b3c] text-[#c89b3c] font-bold hover:bg-[#c89b3c]/10 transition duration-300"
          >
            CHOOSE FILE
          </button>
          <button
            onClick={handleUpload}
            disabled={!preview}
            className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            UPLOAD
          </button>
        </div>

        {/* CANCEL */}
        <button
          onClick={onClose}
          className="w-full mt-3 py-3 rounded-full bg-gray-200 text-black font-bold hover:bg-gray-300 transition duration-300"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default PhotoUploader;