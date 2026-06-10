function Button({ text, loading }) {

  return (

    <button
      type="submit"
      disabled={loading}
      className="w-full py-4 rounded-2xl text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
    >

      {loading ? "Signing In..." : text}

    </button>

  );

}

export default Button;