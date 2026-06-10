function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-gradient-to-r
        from-[#c89b3c]
        to-[#f5d98a]
        text-black
        font-bold
        tracking-[2px]
        rounded-full
        px-6
        py-3
        hover:scale-105
        transition-all
        duration-300
        shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;