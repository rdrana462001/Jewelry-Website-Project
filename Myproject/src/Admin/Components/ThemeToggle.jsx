function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
        w-10 h-10
        rounded-full
        bg-[#c89b3c]
        flex items-center
        justify-center
        text-lg
        shadow-md
        hover:scale-110
        transition
      "
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;