import Button from "../../component/button";

function QuantitySelector({
  quantity,
  setQuantity,
  addToCart,
  addToWishlist,
}) {
  return (
    <>
      <div className="mb-8 md:mb-10">
        <p className="text-sm tracking-[2px] uppercase text-gray-500 mb-3 font-semibold">
          Quantity
        </p>

        <div className="flex items-center gap-4 w-[140px] border border-black rounded-full h-14 overflow-hidden">
          <button
            onClick={() =>
              setQuantity((q) => Math.max(1, q - 1))
            }
            className="flex-1 h-full text-2xl hover:bg-black hover:text-white transition-colors"
          >
            -
          </button>

          <span className="text-xl font-bold w-10 text-center">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((q) => q + 1)
            }
            className="flex-1 h-full text-2xl hover:bg-black hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4 md:gap-5">

        <Button onClick={addToCart}>
          ADD TO CART
        </Button>

        <button
          onClick={addToWishlist}
          className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full border border-black flex items-center justify-center text-2xl hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0"
        >
          ♡
        </button>

      </div>
    </>
  );
}

export default QuantitySelector;