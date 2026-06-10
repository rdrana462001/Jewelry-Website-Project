function ProductInfo({ name, price, description }) {
  return (
    <>
      <p className="tracking-[4px] md:tracking-[6px] text-[#c89b3c] mb-3 md:mb-5 font-semibold text-sm md:text-base uppercase">
        PREMIUM JEWELLERY
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-black leading-tight">
        {name}
      </h1>

      <p className="text-3xl md:text-4xl lg:text-5xl text-[#c89b3c] mb-6 md:mb-10 font-medium">
        {price}
      </p>

      <p className="text-gray-600 text-base md:text-lg leading-8 md:leading-9 mb-8 md:mb-10 max-w-lg">
        {description || "A premium, beautifully crafted piece of luxury jewellery, designed to bring elegance and royalty to your style."}
      </p>

      <div className="flex gap-2 text-2xl md:text-3xl mb-8 md:mb-10">
        ⭐⭐⭐⭐⭐
      </div>
    </>
  );
}

export default ProductInfo;
