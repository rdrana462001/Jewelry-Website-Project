const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  userName: String, // 👈 add this

  items: [
    {
      productId: String,
      name: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],

  totalAmount: Number,

  amount: Number,

  status: {
    type: String,
    default: "pending",
    enum: [
      "pending",
      "accepted",
      "rejected",
      "delivered",
      "paid",
      "cancelled",
      "completed",
      "Pending"
    ]
  },
  paymentStatus: {
  type: String,
  default: "Pending",
},

  // Razorpay Payment Fields
  paymentId: {
    type: String,
    default: null,
  },

  orderId: {
    type: String,
    default: null,
  },

  paymentMethod: {
    type: String,
    default: "razorpay",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );