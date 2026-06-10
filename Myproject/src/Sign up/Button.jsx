function Button({ text }) {

  return (

    <button
      className="
      w-full
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-[#b8860b]
      via-[#d4af37]
      to-[#f4d03f]
      text-white
      font-bold
      text-lg
      tracking-wide
      hover:scale-[1.03]
      hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)]
      transition-all
      duration-300
      shadow-[0_10px_30px_rgba(212,175,55,0.30)]
      border
      border-[#d4af37]/30
      "
    >
      {text}
    </button>

  );

}

export default Button;