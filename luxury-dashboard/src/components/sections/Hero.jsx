import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-kalyan-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="/hero_banner.png" 
          alt="Muhurat Collection" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center md:items-start text-center md:text-left mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-xl max-w-lg border-t-4 border-kalyan-maroon"
        >
          <p className="font-sans text-kalyan-maroon font-bold tracking-widest text-xs uppercase mb-3">
            Muhurat Wedding Collection
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl text-kalyan-text mb-6 leading-tight">
            Crafting Memories <br/> 
            <span className="text-kalyan-maroon">in Gold</span>
          </h2>
          
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Explore our exquisite range of traditional bridal jewelry designed to make your special day truly unforgettable.
          </p>

          <button className="bg-kalyan-maroon text-white px-8 py-3 font-semibold text-sm tracking-wide hover:bg-[#6A151A] transition-colors shadow-lg">
            SHOP THE COLLECTION
          </button>
        </motion.div>
      </div>
    </section>
  );
}
