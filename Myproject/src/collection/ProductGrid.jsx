import ProductCard from "../components/ProductCard";

function ProductGrid({ products }) {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">      
  
  
  {products.length > 0 ? (
        products.map((item) => (
          <ProductCard
            key={item._id}
            item={item}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found</p>
      )}
    </div>
  );
}

export default ProductGrid;