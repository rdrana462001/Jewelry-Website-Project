import { motion } from 'framer-motion';

const categories = [
  { id: 1, title: 'Necklaces', image: '/cat_necklace.png' },
  { id: 2, title: 'Bangles', image: '/cat_bangles.png' },
  { id: 3, title: 'Earrings', image: '/cat_necklace.png' },
  { id: 4, title: 'Rings', image: '/cat_bangles.png' },
  { id: 5, title: 'Mangalsutras', image: '/cat_necklace.png' },
  { id: 6, title: 'Chains', image: '/cat_bangles.png' },
];

export default function ShowcaseGallery() {
  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-6 lg:px-12 bg-kalyan-bg">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-kalyan-maroon font-bold uppercase tracking-wider mb-2">
          Shop by Category
        </h2>
        <div className="h-[2px] w-24 bg-kalyan-gold mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-kalyan-gold/30 p-1 mb-4 shadow-sm group-hover:border-kalyan-maroon transition-colors duration-300">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-sans text-sm font-semibold text-kalyan-text group-hover:text-kalyan-maroon transition-colors">
              {category.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
