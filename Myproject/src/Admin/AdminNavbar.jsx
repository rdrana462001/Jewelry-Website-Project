import { useState, useEffect } from "react";
import ThemeToggle from "./Components/ThemeToggle";

function AdminNavbar({
  toggleSidebar,
  darkMode,
  setDarkMode,
}) {
  const [time, setTime] =
    useState(new Date());

  const adminName =
    localStorage.getItem("adminName")
    || "Admin";

  useEffect(() => {
    const timer =
      setInterval(
        () => setTime(new Date()),
        1000
      );

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-[#c89b3c]/20 shadow-lg sticky top-0 z-20">
      <div className="px-6 py-4 md:px-8 lg:px-10 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <button
            onClick={toggleSidebar}
            className="text-black text-2xl hover:text-[#c89b3c] transition"
          >
            ☰
          </button>

          <div>
            <h2 className="text-lg font-serif font-bold text-black">
              Welcome, {adminName}
            </h2>

            <p className="text-sm text-gray-500">
              {time.toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* Theme Toggle */}
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          {/* Time */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold text-[#c89b3c]">
              {time.toLocaleTimeString()}
            </p>

            <p className="text-xs text-gray-500">
              System Time
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-[#c89b3c]/20">

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c89b3c] to-yellow-500 flex items-center justify-center text-white font-bold shadow-lg">
              {adminName
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-bold text-black">
                {adminName}
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminNavbar;