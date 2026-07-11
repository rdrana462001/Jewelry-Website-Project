import image from "../assets/12.jpg";
import Video1  from "../assets/v1.mp4";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion, useScroll, useTransform, useSpring,
  AnimatePresence, useInView, useMotionValue, useAnimationFrame
} from "framer-motion";
import './Dashboard.css';

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
    className="bg-video"
  />

{/* DARK OVERLAY */}

<div
  className="dark-overlay"
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

      {/* ================= CURSOR GLOW ================= */}

      <div
        className="cursor-glow"
        style={{
          background:
            "radial-gradient(circle,rgba(212,175,85,0.25) 0%,rgba(212,175,85,0.08) 40%,transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ================= ROCKET ================= */}

      <div
        className="rocket-anim"
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
        className="hero-section"
      >
        {/* HERO VIDEO BACKGROUND */}

<video
  src={Video1}
  autoPlay
  muted
  loop
  playsInline
  className="bg-video"
/>

{/* DARK OVERLAY */}

<div
  className="dark-overlay"
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
          className="hero-diamond"
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
          className="hero-circle"
        />

        {/* Text */}
<div
  style={{
    position:"relative",
    zIndex:10,
  }}
>
        <p
          className="jost-font"
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
  className="hero-title"
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
  className="hero-title-italic"
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
          className="hero-desc"
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

<section className="premium-section">
  {/* TOP HEADING */}

  <div className="text-center-mb-20">

    <p className="subtitle-gold">
      ROYAL EXPERIENCE
    </p>

    <h1 className="title-large">
      Timeless Luxury
    </h1>

    <p className="desc-text">

      Crafted for elegance, inspired by heritage
      and designed with cinematic luxury effects
      to create a futuristic premium experience.

    </p>

  </div>


  {/* STORY SECTION */}

  <div className="story-grid">

    {/* IMAGE */}

    <div className="image-container">
<video
  src="/v2.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="story-video"
/>
      {/* OVERLAY */}

      <div className="overlay-gradient"></div>

      {/* TEXT */}

      <div className="overlay-text-bottom-left">

        <p className="tracking-6px-gold">
          PREMIUM JEWELLERY
        </p>

        <h1 className="title-medium">
          Royal Gold Heritage
        </h1>

      </div>

    </div>


    {/* CONTENT */}

    <div>

      <p className="subtitle-gold">
        OUR STORY
      </p>

      <h1 className="title-medium-mb8">

        Crafted With
        <span className="text-gold-italic">
          {" "}Luxury
        </span>

      </h1>

      <p className="desc-text-left">

        Discover handcrafted jewellery inspired
        by timeless royal heritage, cinematic
        aesthetics and modern luxury fashion.
        Every collection is designed to create
        a premium experience beyond imagination.

      </p>

      <button className="btn-explore">

        EXPLORE MORE

      </button>

    </div>

  </div>


  {/* PREMIUM GALLERY */}

  <div className="gallery-grid">

    {/* CARD 1 */}

    <div className="gallery-card">
<img
  src="/12.jpg"
  alt=""
  className="gallery-img-1"
/>
{/* <img
  src="/12.jpg"
  alt="Luxury"
  className="w-full h-[700px] object-cover transition duration-700 group-hover:scale-110"
/> */}
      <div className="gallery-overlay"></div>

      <div className="gallery-text-bottom-left">

        <p className="tracking-5px-gold">
          DIAMOND
        </p>

        <h1 className="title-small">
          Diamond Collection
        </h1>

      </div>

    </div>


    {/* CARD 2 */}

    <div className="gallery-card">

   <img
  src="/Royel%20lacklace.jpg"
  alt=""
  className="gallery-img-2"
/>

      <div className="gallery-overlay"></div>

      <div className="gallery-text-bottom-left">

        <p className="tracking-5px-gold">
          GOLD
        </p>

        <h1 className="title-small">
          Royal Necklace
        </h1>

      </div>

    </div>


    {/* CARD 3 */}

    <div className="gallery-card">
  <img
  src="/v4.jpg"
  alt=""
  className="gallery-img-2"
/>

      <div className="gallery-overlay"></div>

      <div className="gallery-text-bottom-left">

        <p className="tracking-5px-gold">
          BRIDAL
        </p>

        <h1 className="title-small">
          Bridal Luxury
        </h1>

      </div>

    </div>

  </div>


  {/* STATS SECTION */}

  <div className="gallery-grid">

    <div className="stats-card">

      <h1 className="stats-number">
        25K+
      </h1>

      <p className="stats-text">
        LUXURY CUSTOMERS
      </p>

    </div>


    <div className="stats-card">

      <h1 className="stats-number">
        120+
      </h1>

      <p className="stats-text">
        PREMIUM STORES
      </p>

    </div>


    <div className="stats-card">

      <h1 className="stats-number">
        50+
      </h1>

      <p className="stats-text">
        ROYAL COLLECTIONS
      </p>

    </div>

  </div>


  {/* FOOTER */}

  <footer className="footer">

    <div className="footer-grid">

      {/* LOGO */}

      <div>

        <h1 className="footer-logo">
          LUXORA
        </h1>

        <p className="footer-desc">

          Timeless luxury jewellery crafted
          with elegance, cinematic aesthetics
          and premium royal heritage.

        </p>

      </div>


      {/* LINKS */}

      <div>

        <h2 className="footer-title">
          Quick Links
        </h2>

        <div className="footer-links">

          <p className="footer-link-hover">
            Home
          </p>

          <p className="footer-link-hover">
            Collection
          </p>

          <p className="footer-link-hover">
            Luxury
          </p>

          <p className="footer-link-hover">
            Contact
          </p>

        </div>

      </div>


      {/* COLLECTION */}

      <div>

        <h2 className="footer-title">
          Collections
        </h2>

        <div className="footer-links">

          <p>Diamond Rings</p>

          <p>Luxury Gold</p>

          <p>Royal Necklace</p>

          <p>Bridal Jewellery</p>

        </div>

      </div>


      {/* CONTACT */}

      <div>

        <h2 className="footer-title">
          Contact
        </h2>

        <div className="footer-links">

          <p>Ahmedabad, India</p>

          <p>luxora@gmail.com</p>

          <p>+91 99999 99999</p>

        </div>

      </div>

    </div>


    {/* COPYRIGHT */}

    <div className="footer-copyright">

      © 2026 Luxora Jewellery.
      All Rights Reserved.

    </div>

  </footer>

</section>
        </div>

  );

}

export default Dashboard;