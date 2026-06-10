function ProductInfo({
  product,
  selectedImage,
  setSelectedImage,
}) {
  return (
    <div className="w-[350px] p-8 border-r border-white/10">

      <h1 className="text-4xl font-bold mb-2">
        {product.name}
      </h1>

      <div className="flex gap-3 items-center mb-6">
        <span className="text-3xl font-bold">
          ₹{product.price}
        </span>

        <span className="line-through text-gray-500">
          ₹{product.oldPrice}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelectedImage(i)}
            className={`w-16 h-16 rounded-xl cursor-pointer border-2 ${
              selectedImage === i
                ? "border-orange-500"
                : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 w-full py-4 rounded-2xl bg-orange-500 hover:scale-105 duration-300 font-bold">
        Add To Cart
      </button>

    </div>
  );
}

export default ProductInfo;