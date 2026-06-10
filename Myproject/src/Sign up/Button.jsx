function Button({ text }) {

  return (

    <button
      className="
      w-full
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-pink-500
      to-purple-500
      text-white
      font-bold
      hover:scale-[1.02]
      transition-all
      duration-300
      shadow-lg
      shadow-pink-200
      "
    >
      {text}
    </button>

  );

}

export default Button;