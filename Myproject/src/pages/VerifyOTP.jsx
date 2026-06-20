import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import API_BASE_URL from "../config/api";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleVerify = async () => {

    try {

      const res = await axios.post(
        `${API_BASE_URL}/api/auth/verify-otp`,
        {
          email,
          otp,
        }
      );

      toast.success(res.data.message);

      navigate("/login");

    } catch (err) {

      toast.error(
        err.response?.data?.message
      );

    }

  };

  return (
    <div className="p-10">

      <h1>Verify OTP</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        placeholder="OTP"
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value)
        }
      />

      <button
        onClick={handleVerify}
      >
        Verify OTP
      </button>

    </div>
  );
}

export default VerifyOTP;