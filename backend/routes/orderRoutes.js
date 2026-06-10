const express = require("express");

const {
  createOrder,
  getOrders,
  getUserOrders,
  createRazorpayOrder,
  verifyPayment,
  acceptOrder,      // ✅ add this
  rejectOrder,      // ✅ add this
  deliverOrder,
} = require("../controllers/orderController");

const router = express.Router();

// Legacy order routes
router.post("/orders", createOrder);
router.get("/orders", getOrders);
router.get("/orders/user/:userId", getUserOrders);

// Razorpay payment routes
router.post("/orders/create", createRazorpayOrder);
router.post("/orders/verify", verifyPayment);

// Admin order actions
router.put("/:id/accept", acceptOrder);
router.put("/:id/reject", rejectOrder);
router.put("/:id/deliver", deliverOrder);

// Main routes
router.post("/create", createRazorpayOrder);
router.post("/verify", verifyPayment);

router.get("/", getOrders);

// router.get("/test", (req, res) => {
//   res.send("Order Routes Working");
// });
router.get("/user/:userId", getUserOrders);

module.exports = router;