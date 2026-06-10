import { Link } from "react-router-dom";

function NoProductsFound() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20">
      <div className="text-7xl mb-6">🔍</div>
      <h2 className="text-3xl font-serif text-black mb-4">No Products Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We couldn't find any products matching your search. Try adjusting your
        filters or search terms.
      </p>
      <Link
        to="/collection"
        className="px-8 py-3 bg-black text-white rounded-full hover:bg-[#c89b3c] hover:text-black transition duration-300 font-semibold"
      >
        View All Products
      </Link>
    </div>
  );
}

export default NoProductsFound;