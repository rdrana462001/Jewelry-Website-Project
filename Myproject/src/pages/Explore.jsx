import { Link } from "react-router-dom";

function Explore() {
  return (
    <div className="bg-black text-white">

      {/* HERO VIDEO */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/v1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
            LUXORA
          </h1>

          <p className="max-w-3xl text-xl md:text-2xl text-gray-200 leading-relaxed">
            Discover timeless elegance crafted with passion.
            Every jewel tells a story of luxury, prestige,
            and unmatched craftsmanship.
          </p>

          <Link
            to="/dashboard"
            className="mt-10 px-10 py-4 bg-[#c89b3c] text-black rounded-full font-bold tracking-wider hover:scale-105 transition"
          >
            EXPLORE COLLECTION
          </Link>

        </div>
  
      </section>

      {/* BRAND STORY */}
      <section className="py-24 px-6 md:px-16 bg-[#111111]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#c89b3c] mb-8">
            Our Story
          </h2>

          <p className="text-lg text-gray-300 leading-9 max-w-4xl mx-auto">
            Luxora was founded with a vision to redefine luxury jewelry.
            Every piece is meticulously designed using premium materials,
            exquisite diamonds, and expert craftsmanship.
            We create jewelry that celebrates life's most cherished moments.
          </p>

        </div>

      </section>

      {/* COLLECTIONS */}
      <section className="py-24 px-6 md:px-16 bg-black">

        <h2 className="text-center text-5xl font-serif text-[#c89b3c] mb-16">
          Signature Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-[#111] p-8 rounded-3xl border border-[#c89b3c]/20 hover:border-[#c89b3c] transition">
            <div className="text-6xl mb-6">💍</div>

            <h3 className="text-3xl font-serif mb-4">
              Diamond Rings
            </h3>

            <p className="text-gray-400">
              Elegant rings crafted to symbolize
              everlasting love and sophistication.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-[#c89b3c]/20 hover:border-[#c89b3c] transition">
            <div className="text-6xl mb-6">👑</div>

            <h3 className="text-3xl font-serif mb-4">
              Royal Necklaces
            </h3>

            <p className="text-gray-400">
              Luxurious necklaces inspired by royal
              heritage and timeless beauty.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-[#c89b3c]/20 hover:border-[#c89b3c] transition">
            <div className="text-6xl mb-6">✨</div>

            <h3 className="text-3xl font-serif mb-4">
              Premium Sets
            </h3>

            <p className="text-gray-400">
              Exclusive collections designed for
              unforgettable celebrations.
            </p>
          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 bg-[#111111]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#c89b3c] mb-10">
            The Luxora Experience
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-5xl font-bold text-[#c89b3c]">
                500+
              </h3>
              <p className="text-gray-400 mt-2">
                Luxury Products
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c89b3c]">
                1000+
              </h3>
              <p className="text-gray-400 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c89b3c]">
                99%
              </h3>
              <p className="text-gray-400 mt-2">
                Satisfaction Rate
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c89b3c]">
                24/7
              </h3>
              <p className="text-gray-400 mt-2">
                Premium Support
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-5xl font-serif mb-6">
          Begin Your Luxury Journey
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Discover handcrafted masterpieces designed
          to celebrate elegance, beauty, and prestige.
        </p>

        <Link
          to="/collection/rings"
          className="inline-block px-12 py-5 bg-[#c89b3c] text-black rounded-full font-bold tracking-widest hover:scale-105 transition"
        >
          SHOP NOW
        </Link>

      </section>

    </div>
  );
}

export default Explore;