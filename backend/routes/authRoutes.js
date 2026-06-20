const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getUsers,
  deleteUser,
  updateUser,
  verifyOTP,
  resendOTP,
} = require("../controllers/authController");

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);

// OTP Routes
// router.post("/verify-otp", verifyOTP);
// router.post("/resend-otp", resendOTP);

// User Management
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;