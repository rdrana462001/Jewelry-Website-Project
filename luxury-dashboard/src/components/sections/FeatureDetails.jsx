import { motion } from 'framer-motion';

export default function FeatureDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center bg-kalyan-bg rounded-sm shadow-md overflow-hidden border border-gray-100">
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img
              src="/cat_necklace.png"
              alt="Mudhra Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left flex flex-col justify-center">
            <h4 className="text-kalyan-maroon font-bold tracking-[0.2em] text-xs uppercase mb-4">
              Handcrafted Antique Jewellery
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl text-kalyan-text mb-6">
              The Mudhra Collection
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Step into the world of regal heritage with Mudhra. Each piece is intricately designed to bring out the royal charm of traditional Indian artisanship. Celebrate your moments with our finest antique creations.
            </p>
            <button className="self-center md:self-start bg-white border border-kalyan-maroon text-kalyan-maroon px-8 py-3 font-semibold text-sm tracking-wide hover:bg-kalyan-maroon hover:text-white transition-colors">
              VIEW MUDHRA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
