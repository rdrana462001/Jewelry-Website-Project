import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../assets/12.jpg";
import axios from "axios";
import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
function Login() {
const [loginType, setLoginType] =
useState("user");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response =
      await axios.post(

        "http://localhost:5000/api/auth/login",

        {
          email: formData.email,
          password: formData.password,
          role: loginType,
        }

      );

    // SAVE USER

 localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
); 

    // SAVE TOKEN

    localStorage.setItem(
      "token",
      response.data.token
    );

toast.success(response.data.message);

    // ADMIN LOGIN

    if (
      loginType === "admin"
    ) {

      navigate("/admin");

    }

    // USER LOGIN

    else {

      navigate("/dashboard");

    }

  }

  catch (error) {

 toast.error(
  error.response?.data?.message ||
  "Login Failed ❌"
);

  }

};
  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
from-[#faf7f2]
via-[#f8f2e8]
to-[#efe3c6]
      px-4
      py-10
      overflow-hidden
      relative
      "
    >
      {/* <Navbar /> */}

      {/* Glow */}

      <div
        className="
        absolute
        w-[450px]
        h-[450px]
        bg-pink-300/30
        rounded-full
        blur-[120px]
        top-[-150px]
        left-[-100px]
        "
      />

      <div
        className="
        absolute
        w-[450px]
        h-[450px]
        bg-purple-300/30
        rounded-full
        blur-[120px]
        bottom-[-150px]
        right-[-100px]
        "
      />

      {/* Main Card */}

      <div
        className="
        w-full
        max-w-6xl
        bg-white/60
        backdrop-blur-3xl
        border-[#d4af37]/30
        rounded-[40px]
        shadow-[0_20px_80px_rgba(0,0,0,0.2)]
        overflow-hidden
        grid
        md:grid-cols-2
        border
        border-white/40
        relative
        z-10
        "
      >

        {/* Left Image */}

        <div
          className="
          relative
          hidden
          md:block
          h-[700px]
          overflow-hidden
          "
        >

          <img
            src={image}
            alt="Luxury"
            className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition-all
            duration-700
            "
          />

          {/* Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
            "
          />

          {/* Text */}

          <div
            className="
            absolute
            bottom-12
            left-10
            text-white
            z-10
            "
          >

            <h1
              className="
              text-6xl
              font-bold
              mb-4
              leading-tight
              "
            >
Jewelry Elegance
            </h1>

            <p
              className="
              text-lg
              text-white/90
              max-w-sm
              leading-relaxed
              "
            >
             Discover timeless luxury,
crafted with elegance and
inspired by premium jewelry collections.
            </p>

          </div>

        </div>

        {/* Right Form */}

        <div
          className="
          flex
          items-center
          justify-center
          px-8
          py-12
          md:px-14
          bg-gradient-to-br
from-white/90
to-[#fffaf0]
          backdrop-blur-xl
          "
        >

          <form
            onSubmit={handleSubmit}
            className="
            w-full
            max-w-md
            "
          >

        <h1
 className="
 text-5xl
 font-bold
 text-[#b8860b]
 tracking-[6px]
 mb-3
 "
 style={{ fontFamily: "serif" }}
>
 LOGIN
</h1>
            <p
              className="
              text-zinc-500
              mb-10
              text-lg
              "
            >
              Login to continue 
            </p>

            {/* Email */}

            <div className="mb-5">

              <label
                className="
                block
                text-zinc-700
                mb-2
                font-semibold
                "
              >
                Email
              </label>
<select
  value={loginType}
  onChange={(e) =>
    setLoginType(e.target.value)
  }
  className="
  w-full
  p-4
  rounded-xl
  border
  border-gray-300
  mb-5
  outline-none
  "
>

  <option value="user">
    User Login
  </option>

  <option value="admin">
    Admin Login
  </option>

</select>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
              border-[#d4af37]/40
              bg-[#fffdf8]
                outline-none
                focus:border-[#d4af37]
                focus:ring-[#d4af37]/20
                focus:border-pink-500
                focus:ring-4
                focus:ring-pink-200
                transition-all
                text-lg
                "
              />

            </div>

            {/* Password */}

            <div className="mb-4">

              <label
                className="
                block
                text-zinc-700
                mb-2
                font-semibold
                "
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="
              w-full
p-4
rounded-2xl
border
border-[#d4af37]/40
bg-[#fffdf8]
mb-5
outline-none
focus:border-[#d4af37]
focus:ring-4
focus:ring-[#d4af37]/20
                transition-all
                text-lg
                "
              />

            </div>

            {/* Forgot */}

            <div
              className="
              flex
              justify-end
              mb-8
              "
            >

              <a
                href="/forgot-password"
                className="
text-[#b8860b]
font-bold                hover:underline
                text-sm
                "
              >
                Forgot Password?
              </a>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="
              w-full
              py-4
              rounded-2xl
              text-xl
              font-bold
              text-white
           bg-gradient-to-r
from-[#b8860b]
via-[#d4af37]
to-[#f4d03f]
shadow-[0_10px_30px_rgba(212,175,55,0.35)]
              hover:scale-[1.03]
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              Login
            </button>

            {/* Signup */}

            <p
              className="
              text-center
              mt-7
              text-zinc-600
              text-lg
              "
            >

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="
                text-[#b8860b]
                font-medium           
                font-bold
                hover:underline
                "
              >
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Login;