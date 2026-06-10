import { motion } from "framer-motion";

function ProductViewer({ product, selectedImage }) {
  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-500/20 blur-3xl"></div>

      {/* Animated Image */}
      <motion.img
        key={selectedImage}
        src={product.images[selectedImage]}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-[350px] object-contain relative z-10 drop-shadow-2xl"
      />
    </div>
  );
}

export default ProductViewer;