function DashboardHeader({ darkMode }) {
  return (
    <div className="mb-10 animate-fadeIn">
      <h1
        className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 ${
          darkMode
            ? "text-white"
            : "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent"
        }`}
      >
        Dashboard
      </h1>

      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 mb-4"></div>

      <p
        className={`text-lg md:text-xl ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        Welcome back! Here's your performance overview.
      </p>
    </div>
  );
}

export default DashboardHeader;