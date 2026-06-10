function ProductImage({ image, name }) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt={name}
        className="w-full h-auto max-h-[700px] object-cover rounded-[35px] shadow-2xl"
      />
    </div>
  );
}

export default ProductImage;
