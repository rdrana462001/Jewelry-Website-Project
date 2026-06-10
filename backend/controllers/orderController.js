const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');

// Make sure to load environment variables first if Razorpay instance is created outside
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// exports.createRazorpayOrder = async (req, res) => {
//   try {
//     const { amount, currency, receipt, userEmail, userName, userPhone } = req.body;
    
//     const razorpay = getRazorpayInstance();
//     const options = {
//       amount: amount, // amount is already in paise from frontend
//       currency: currency || "INR",
//       receipt: receipt || `receipt_${Date.now()}`
//     };

//     const razorpayOrder = await razorpay.orders.create(options);

//     res.status(200).json({
//       id: razorpayOrder.id,
//       amount: razorpayOrder.amount,
//       currency: razorpayOrder.currency,
//     });
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
exports.createRazorpayOrder = async (req, res) => {
  try {

    console.log(
      "Amount Received:",
      req.body.amount
    );

    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const razorpayOrder =
      await razorpay.orders.create(options);

    res.json(razorpayOrder);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};
exports.verifyPayment = async (req, res) => {
  try {
const {
  orderId,
  paymentId,
  signature,
  userId,
  userName,
  items,
  amount,
} = req.body;

    const body = orderId + "|" + paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'Gpegxp5M28QMB1ZhmbrmN8rN')
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === signature) {
      // Payment successful, save order in DB
     const newOrder = new Order({
  userId,
  userName,
  items,
  amount: amount / 100,
  orderId,
  paymentId,
  status: "pending",
  paymentStatus: "Completed",
});
      await newOrder.save();

      res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    // Populate user details if you want, or just return orders
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Legacy order creation (if needed)
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.acceptOrder = async (req, res) => {
  try {
    console.log("Accept Route Hit");
    console.log("Order ID:", req.params.id);

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );

    console.log("Updated Order:", order);

    res.status(200).json(order);
  } catch (error) {
    console.log("Accept Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.rejectOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: "rejected"
      },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.deliverOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "delivered" },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
