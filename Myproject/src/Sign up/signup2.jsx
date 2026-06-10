import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import image from "../assets/12.jpg";
import InputField from "./InputField";
import Button from "./Button";
import { toast } from "react-toastify";

function Signup2() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    let newErrors = {
      ...errors,
      [name]: "",
    };

    // Live Confirm Password Validation
    if (
      name === "confirmPassword" ||
      name === "password" 
    ) {

      if (
        updatedData.confirmPassword &&
        updatedData.password !==
          updatedData.confirmPassword
      ) {

        newErrors.confirmPassword =
          "Confirm Password is incorrect";

      }
      else {

        newErrors.confirmPassword = "";

      }

    }

    setErrors(newErrors);

  };

 const handleSubmit = async (e) => {

    e.preventDefault();

    let newErrors = {};

    // Username Validation
    if (!formData.username.trim()) {

      newErrors.username =
        "Username is required";

    }

    // Email Validation
    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";

    }
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Invalid email address";

    }

    // Password Validation
    if (!formData.password) {

      newErrors.password =
        "Password is required";

    }
    else if (
      formData.password.length < 6
    ) {

      newErrors.password =
        "Password must be at least 6 characters";

    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {

      newErrors.confirmPassword =
        "Confirm Password is required";

    }
    else if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Confirm Password is incorrect";

    }

    setErrors(newErrors);

    // Stop Submit if Error Exists
    if (
      Object.keys(newErrors).length > 0
    ) {
      return;
    }
try {

  const response =
    await axios.post(

      "http://localhost:5000/api/auth/signup",

      {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      }

    );

toast.success(response.data.message);
  // RESET FORM

  setFormData({

    username: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

}

catch (error) {

 toast.error(
  error.response?.data?.message ||
  "Signup Failed ❌"
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
via-[#f8f4ec]
to-[#f3ead7]
shadow-[0_20px_80px_rgba(212,175,55,0.15)]
      px-4
      py-10
      relative
      overflow-hidden
    "
    >

  {/* Gold Glow Top Left */}
  <div
    className="
    absolute
    w-[500px]
    h-[500px]
    bg-yellow-400/10
    rounded-full
    blur-[140px]
    -top-40
    -left-40
    "
  />

  {/* Gold Glow Bottom Right */}
  <div
    className="
    absolute
    w-[500px]
    h-[500px]
    bg-amber-400/10
    rounded-full
    blur-[140px]
    -bottom-40
    -right-40
    "
  />


      {/* <Navbar /> */}
      {/* Main Container */}

      <div
        className="
        relative
        z-10
        w-full
        max-w-7xl
        grid
        md:grid-cols-2
bg-white/80
backdrop-blur-3xl
border border-[#d4af37]/20
shadow-[0_25px_100px_rgba(212,175,55,0.18)]
        rounded-[40px]
        overflow-hidden
        border
      "
      >

        {/* Left Side */}

        <div
          className="
          hidden
          md:block
          relative
          min-h-[750px]
          overflow-hidden
        "
        >

          <img
            src={image}
            alt="signup"
            className="
            w-full
            h-full
            object-cover
            rounded-l-[40px]
          "
          />
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

<div
 className="
 absolute
 bottom-10
 left-10
 text-white
 "
>
 <h2
  className="
  text-5xl
  font-bold
  mb-4
  "
  style={{ fontFamily: "serif" }}
 >
  Timeless Luxury
 </h2>

 <p
  className="
  text-lg
  text-white/90
  max-w-sm
  "
 >
  Discover premium jewelry crafted
  with elegance and perfection.
 </p>
</div>
        </div>

        {/* Right Side */}

        <form
          onSubmit={handleSubmit}
          className="
          p-8
          md:p-14
          flex
          flex-col
          justify-center
bg-gradient-to-br
from-white
to-[#fffaf0]        "
        >

       <h1
 className="
 text-4xl
 md:text-5xl
 font-bold
 text-[#b8860b]
 tracking-[4px]
 uppercase
 "
 style={{ fontFamily: "serif" }}
>
 Create Account
</h1>

          <p
            className="
            text-zinc-500
            mt-3
            mb-10
            text-lg
          "
          >
           
Join our luxury jewelry collection
          </p>

<InputField
  label="Username"
  type="text"
  name="username"
  placeholder="Enter Username"
  value={formData.username}
  onChange={handleChange}
  error={errors.username}
/>

<InputField
  label="Email"
  type="email"
  name="email"
  placeholder="Enter Email"
  value={formData.email}
  onChange={handleChange}
  error={errors.email}
/>

<InputField
  label="Password"
  type="password"
  name="password"
  placeholder="Enter Password"
  value={formData.password}
  onChange={handleChange}
  error={errors.password}
/>
          <InputField
          label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <Button text="Create Account" />

          <p
            className="
            text-center
            text-zinc-500
            mt-6
          "
          >

            Already have an account?{" "}

            <Link
              to="/login"
              className="
             text-[#b8860b]
font-bold
              hover:underline
            "
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>

  );

}

export default Signup2;