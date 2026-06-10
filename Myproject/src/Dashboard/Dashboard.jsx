import image from "../assets/12.jpg";
import Video1  from "../assets/v1.mp4";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion, useScroll, useTransform, useSpring,
  AnimatePresence, useInView, useMotionValue, useAnimationFrame
} from "framer-motion";

// import bgVideo from "../assets/WG.mp4";
/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
  const G = {
    bg: "#253063",
    white: "#ffffff",
    black: "#111111",
    gold: "#d4af37",
    goldLight: "#f5d98a",
    text: "#444",
  };

  function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
// const heroImages = [

//   "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop",
//  image,
//   // "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop",

//   "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop",

//   "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1600&auto=format&fit=crop",

// ];

  <video
    src={Video1}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

{/* DARK OVERLAY */}

<div
  className="absolute inset-0 z-[1]"
  style={{
    background:
      "linear-gradient(to bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.35))",
  }}
/>
const cards = [

   
  ];

  return (

    <div
      style={{
        background: G.bg,
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >

      {/* ================= GLOBAL CSS ================= */}

      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Jost:wght@300;400;500&display=swap');

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        overflow-x:hidden;
      }

      .display{
        font-family:'Playfair Display',serif;
      }

      .jost{
        font-family:'Jost',sans-serif;
      }

      @keyframes shimmer {

        0%{
          background-position:-200% 0;
        }

        100%{
          background-position:200% 0;
        }

      }

      @keyframes floatA {

        0%,100%{
          transform:translateY(0px);
        }

        50%{
          transform:translateY(-20px);
        }

      }

      @keyframes floatB {

        0%,100%{
          transform:translateY(0px) translateX(0px);
        }

        50%{
          transform:translateY(-25px) translateX(10px);
        }

      }

      @keyframes fly {

        0%{
          transform:translateX(-20vw);
        }

        100%{
          transform:translateX(120vw);
        }

      }

      `}</style>

      {/* ================= CURSOR GLOW ================= */}

      <div
        className="fixed w-[300px] h-[300px] md:w-[500px] md:h-[500px] -top-[100px] -left-[100px] md:-top-[150px] md:-left-[150px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle,rgba(212,175,85,0.25) 0%,rgba(212,175,85,0.08) 40%,transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ================= ROCKET ================= */}

      <div
        className="absolute bottom-[10%] -left-[20%] text-[40px] md:text-[70px] z-[2]"
        style={{
          animation: "fly 12s linear infinite",
        }}
      >
        
      </div>

      {/* ================= PARTICLES ================= */}

      <div
        style={{
          position: "absolute",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#d4af37",
          top: "30%",
          left: "40%",
          filter: "blur(2px)",
          animation: "floatB 5s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#ffd700",
          top: "70%",
          left: "20%",
          filter: "blur(3px)",
          animation: "floatA 6s ease-in-out infinite",
        }}
      />

      {/* ================= NAVBAR ================= */}
{/* ================= PREMIUM NAVBAR ================= */}
{/* ================= ULTRA LUXURY NAVBAR ================= */}
{/* ================= PREMIUM WHITE NAVBAR ================= */}

{/* <nav className=" fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-[#e5e5e5] shadow-[0_10px_40px_rgba(0,0,0,0.12)]"> */}
  <Navbar />

      {/* ================= HERO ================ */}

      <section
        className="min-h-screen flex items-center justify-center flex-col text-center relative py-[80px] md:py-[120px] px-5"
      >
        {/* HERO VIDEO BACKGROUND */}

<video
  src={Video1}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
/>

{/* DARK OVERLAY */}

<div
  className="absolute inset-0 z-[1]"
  style={{
    background:
      "linear-gradient(to bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.35))",
  }}
/>

{/* <AnimatePresence mode="wait">

  <motion.div
    key={currentImage}

   initial={{
  opacity: 0.7,
}}

animate={{
  opacity: 1,
}}

transition={{
  duration: 0.8,
}}

    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        `url(${heroImages[currentImage]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 0,
    }}
  />
<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.35))",
      
    zIndex: 1,
  }}
/>

</AnimatePresence> */}
        {/* Diamond */}

        <div
          className="absolute top-[20%] right-[5%] md:right-[10%] text-[60px] md:text-[120px] opacity-[0.08]"
          style={{
            animation: "floatA 6s ease-in-out infinite",
          }}
        >
          💎
        </div>

        {/* Circle */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full border border-[rgba(212,175,55,0.15)]"
        />

        {/* Text */}
<div
  style={{
    position:"relative",
    zIndex:10,
  }}
>
        <p
          className="jost"
          style={{
            letterSpacing: "8px",
            color: G.gold,
            marginBottom: "20px",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Luxury Jewellery
        </p>

        {/* <h1
          className="display"
          style={{
            fontSize: "120px",
            color: G.black,
            lineHeight: 1,
          }}
        >
          THE ART OF
        </h1> */}
<h1
  className="display text-[60px] sm:text-[80px] md:text-[120px]"
  style={{
    color: G.yellow,
    background:
"linear-gradient(90deg,#c89b3c,#f5d98a,#fff2b0,#c89b3c)",

backgroundSize:
"300% 100%",

animation:
"shimmer 5s linear infinite",

WebkitBackgroundClip:
"text",

WebkitTextFillColor:
"transparent",
    lineHeight: 1,
  }}
>
  THE ART OF
</h1>
        {/* <h1
          className="display"
          style={{
            fontSize: "120px",
            fontStyle: "italic",
            background:
              "linear-gradient(90deg,#c89b3c,#f5d98a,#c89b3c)",
            backgroundSize: "300% 100%",
            animation: "shimmer 5s linear infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          HERITAGE
        </h1> */}
<h1
  className="display text-[60px] sm:text-[80px] md:text-[120px] italic"
  style={{
    background:
      "linear-gradient(90deg,#c89b3c,#f5d98a,#c89b3c)",
    backgroundSize: "300% 100%",
    animation: "shimmer 5s linear infinite",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1,
  }}
>
  HERITAGE
</h1>
        <p
          className="jost mx-auto mt-[30px] max-w-[90%] md:max-w-[700px] text-[16px] md:text-[18px] text-white/80 leading-loose"
        >
          Discover premium handcrafted jewellery with
          cinematic luxury animations, glassmorphism
          effects and elegant royal aesthetics.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
<Link to="/collection/rings">

  <motion.button
    whileHover={{
      scale: 1.05,
    }}

    style={{
      padding: "18px 45px",
      border: "none",
      borderRadius: "100px",
      background:
        "linear-gradient(90deg,#c89b3c,#f5d98a,#c89b3c)",
      backgroundSize: "300% 100%",
      animation: "shimmer 5s linear infinite",
      color: "#111",
      letterSpacing: "4px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >

    SHOP NOW

  </motion.button>

</Link>

         <Link to="/explore">
  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    style={{
      padding: "18px 45px",
      borderRadius: "100px",
      border: "1px solid rgba(200,155,60,0.3)",
      background: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(25px)",
      color: "#111",
      letterSpacing: "4px",
      cursor: "pointer",
    }}
  >
    EXPLORE
  </motion.button>
</Link>

        </div>
</div>
      </section>
      
{/* ================= PREMIUM LUXURY SECTION ================= */}

<section className="w-full bg-[#fff4fe] pt-28 pb-0 px-6 overflow-hidden">
  {/* TOP HEADING */}

  <div className="text-center mb-20">

    <p className="tracking-[8px] text-[#c89b3c] text-sm mb-5 font-semibold">
      ROYAL EXPERIENCE
    </p>

    <h1 className="text-6xl md:text-8xl font-serif text-black leading-tight">
      Timeless Luxury
    </h1>

    <p className="max-w-3xl mx-auto mt-8 text-gray-600 text-lg leading-9">

      Crafted for elegance, inspired by heritage
      and designed with cinematic luxury effects
      to create a futuristic premium experience.

    </p>

  </div>


  {/* STORY SECTION */}

  <div className="grid md:grid-cols-2 gap-14 items-center mb-32">

    {/* IMAGE */}

    <div className="relative group overflow-hidden rounded-[40px] shadow-2xl">
<video
  src="/v2.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-[400px] md:h-[700px] object-cover transition duration-700 group-hover:scale-110"
/>
      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

      {/* TEXT */}

      <div className="absolute bottom-10 left-10 text-white">

        <p className="tracking-[6px] text-sm text-[#f5d98a] mb-4">
          PREMIUM JEWELLERY
        </p>

        <h1 className="text-5xl font-serif">
          Royal Gold Heritage
        </h1>

      </div>

    </div>


    {/* CONTENT */}

    <div>

      <p className="tracking-[8px] text-[#c89b3c] text-sm mb-5 font-semibold">
        OUR STORY
      </p>

      <h1 className="text-6xl font-serif text-black leading-tight mb-8">

        Crafted With
        <span className="text-[#c89b3c] italic">
          {" "}Luxury
        </span>

      </h1>

      <p className="text-gray-600 text-lg leading-9 mb-10">

        Discover handcrafted jewellery inspired
        by timeless royal heritage, cinematic
        aesthetics and modern luxury fashion.
        Every collection is designed to create
        a premium experience beyond imagination.

      </p>

      <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-bold tracking-[4px] hover:scale-105 transition duration-500 shadow-2xl">

        EXPLORE MORE

      </button>

    </div>

  </div>


  {/* PREMIUM GALLERY */}

  <div className="grid md:grid-cols-3 gap-10 mb-32">

    {/* CARD 1 */}

    <div className="relative overflow-hidden h-[400px] md:h-[700px] rounded-[35px] group shadow-2xl">
<img
  src="/12.jpg"
  alt=""
  className="
  w-full
  h-full
  min-h-[200px]
  object-cover
  transition
  duration-700
  group-hover:scale-110
  "
/>
{/* <img
  src="/12.jpg"
  alt="Luxury"
  className="w-full h-[700px] object-cover transition duration-700 group-hover:scale-110"
/> */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

      <div className="absolute bottom-8 left-8 text-white">

        <p className="tracking-[5px] text-sm text-[#f5d98a]">
          DIAMOND
        </p>

        <h1 className="text-4xl font-serif mt-2">
          Diamond Collection
        </h1>

      </div>

    </div>


    {/* CARD 2 */}

    <div className="relative overflow-hidden h-[400px] md:h-[700px] rounded-[35px] group shadow-2xl">

   <img
  src="/Royel%20lacklace.jpg"
  alt=""
  className="
  w-full
  h-full
  min-h-[400px] md:min-h-[700px]
  object-cover
  transition
  duration-700
  group-hover:scale-110
  "
/>

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

      <div className="absolute bottom-8 left-8 text-white">

        <p className="tracking-[5px] text-sm text-[#f5d98a]">
          GOLD
        </p>

        <h1 className="text-4xl font-serif mt-2">
          Royal Necklace
        </h1>

      </div>

    </div>


    {/* CARD 3 */}

    <div className="relative overflow-hidden h-[400px] md:h-[700px] rounded-[35px] group shadow-2xl">
  <img
  src="/v4.jpg"
  alt=""
  className="
  w-full
  h-full
  min-h-[400px] md:min-h-[700px]
  object-cover
  transition
  duration-700
  group-hover:scale-110
  "
/>

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

      <div className="absolute bottom-8 left-8 text-white">

        <p className="tracking-[5px] text-sm text-[#f5d98a]">
          BRIDAL
        </p>

        <h1 className="text-4xl font-serif mt-2">
          Bridal Luxury
        </h1>

      </div>

    </div>

  </div>


  {/* STATS SECTION */}

  <div className="grid md:grid-cols-3 gap-10 mb-32">

    <div className="bg-white/70 backdrop-blur-xl border border-[#e7d7ab] rounded-[35px] py-16 text-center shadow-xl hover:-translate-y-3 transition duration-500">

      <h1 className="text-6xl font-bold text-[#c89b3c] mb-4">
        25K+
      </h1>

      <p className="text-gray-600 tracking-[4px]">
        LUXURY CUSTOMERS
      </p>

    </div>


    <div className="bg-white/70 backdrop-blur-xl border border-[#e7d7ab] rounded-[35px] py-16 text-center shadow-xl hover:-translate-y-3 transition duration-500">

      <h1 className="text-6xl font-bold text-[#c89b3c] mb-4">
        120+
      </h1>

      <p className="text-gray-600 tracking-[4px]">
        PREMIUM STORES
      </p>

    </div>


    <div className="bg-white/70 backdrop-blur-xl border border-[#e7d7ab] rounded-[35px] py-16 text-center shadow-xl hover:-translate-y-3 transition duration-500">

      <h1 className="text-6xl font-bold text-[#c89b3c] mb-4">
        50+
      </h1>

      <p className="text-gray-600 tracking-[4px]">
        ROYAL COLLECTIONS
      </p>

    </div>

  </div>


  {/* FOOTER */}

  <footer className="bg-black text-white rounded-[30px] md:rounded-[45px] p-8 md:p-16">

    <div className="grid md:grid-cols-4 gap-14">

      {/* LOGO */}

      <div>

        <h1 className="text-5xl font-serif text-[#f5d98a] mb-6">
          LUXORA
        </h1>

        <p className="text-gray-400 leading-8">

          Timeless luxury jewellery crafted
          with elegance, cinematic aesthetics
          and premium royal heritage.

        </p>

      </div>


      {/* LINKS */}

      <div>

        <h2 className="text-2xl mb-6 text-[#f5d98a]">
          Quick Links
        </h2>

        <div className="space-y-4 text-gray-400">

          <p className="hover:text-white cursor-pointer">
            Home
          </p>

          <p className="hover:text-white cursor-pointer">
            Collection
          </p>

          <p className="hover:text-white cursor-pointer">
            Luxury
          </p>

          <p className="hover:text-white cursor-pointer">
            Contact
          </p>

        </div>

      </div>


      {/* COLLECTION */}

      <div>

        <h2 className="text-2xl mb-6 text-[#f5d98a]">
          Collections
        </h2>

        <div className="space-y-4 text-gray-400">

          <p>Diamond Rings</p>

          <p>Luxury Gold</p>

          <p>Royal Necklace</p>

          <p>Bridal Jewellery</p>

        </div>

      </div>


      {/* CONTACT */}

      <div>

        <h2 className="text-2xl mb-6 text-[#f5d98a]">
          Contact
        </h2>

        <div className="space-y-4 text-gray-400">

          <p>Ahmedabad, India</p>

          <p>luxora@gmail.com</p>

          <p>+91 99999 99999</p>

        </div>

      </div>

    </div>


    {/* COPYRIGHT */}

    <div className="border-t border-white/10 mt-20 pt-20 text-center text-gray-500">

      © 2026 Luxora Jewellery.
      All Rights Reserved.

    </div>

  </footer>

</section>
        </div>

  );

}

export default Dashboard;