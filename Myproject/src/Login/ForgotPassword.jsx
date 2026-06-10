import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-4 border rounded-xl"
        />

        <button
          type="submit"
          className="w-full mt-5 p-4 bg-yellow-500 text-white rounded-xl"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;