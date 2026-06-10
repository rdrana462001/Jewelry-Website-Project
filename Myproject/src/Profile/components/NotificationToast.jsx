import { useEffect, useState } from "react";

function NotificationToast({ type, message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type] || "bg-gray-500";

  const icon = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  }[type] || "●";

  return (
    <div className="fixed top-24 right-6 z-50 animate-slideUp">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold`}
      >
        <span className="text-xl">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default NotificationToast;