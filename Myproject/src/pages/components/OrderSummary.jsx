import Button from "../../component/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function OrderSummary({ subtotal, tax, shipping, savings, total, formatPrice }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize Razorpay Payment
  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.email) {
        toast.warning("Please login to proceed with checkout");
        navigate("/login");
        return;
      }

      // Create order on backend
      const response = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(total * 100), // Convert to paise (1 INR = 100 paise)
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          userEmail: user.email,
          userName: user.name,
          userPhone: user.phone || "",
        }),
      });

   if (!response.ok) {
  const errorData = await response.json();

  toast.error(
    errorData.message || "Failed to create order"
  );

  setIsLoading(false);

  return;
}
      const orderData = await response.json();

      // Initialize Razorpay Payment
     const options = {
  key: "rzp_test_SwdooxJh05S143",

  amount: Math.round(total * 100),
  currency: "INR",
  name: "LUXORA - Premium Jewelry",
  description: "Purchase Premium Jewelry",
  order_id: orderData.id,

  handler: async function (response) {
    await verifyPayment(response, orderData);
  },

  prefill: {
    email: user.email,
    contact: user.phone || "",
    name: user.name,
  },

  notes: {
    userId: user._id,
    userEmail: user.email,
  },

  theme: {
    color: "#c89b3c",
  },
};
      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        const razorpay = new window.Razorpay(options);
        razorpay.on("payment.failed", function (response) {
          toast.error(
  "Payment Failed: " +
  response.error.description
);
          setIsLoading(false);
        });
        razorpay.open();
      };
      script.onerror = () => {
toast.error(
  "Failed to load payment gateway"
);        setIsLoading(false);
      };
      document.body.appendChild(script);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  // Verify Payment with Backend
  const verifyPayment = async (paymentResponse, orderData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const cart = JSON.parse(localStorage.getItem(`cart_${user._id}`)) || [];

      const response = await fetch(
        "http://localhost:5000/api/orders/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: orderData.id,
            paymentId: paymentResponse.razorpay_payment_id,
            signature: paymentResponse.razorpay_signature,
            userId: user._id,
            userName: user.name, // 👈 add this
            items: cart,
            amount: orderData.amount,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        // Clear user's cart after successful payment
        localStorage.removeItem(`cart_${user._id}`);
        window.dispatchEvent(new Event("cartUpdated"));

       toast.success(
  "✨ Payment Successful! Order Created"
);
      navigate("/dashboard");
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Error verifying payment: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="lg:col-span-1">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl p-8 border-2 border-[#c89b3c] border-opacity-30 sticky top-32">
        <h2 className="text-2xl font-serif font-bold mb-8 pb-4 border-b-2 border-[#c89b3c] border-opacity-50">
          Order Summary
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-gray-300">
            <span>Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span>Tax (18% GST)</span>
            <span className="font-semibold">{formatPrice(tax)}</span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span>Shipping</span>
            <span className={`font-semibold ${shipping === 0 ? 'text-green-400' : 'text-gray-300'}`}>
              {shipping === 0 ? "FREE ✓" : formatPrice(shipping)}
            </span>
          </div>

          {savings > 0 && (
            <div className="flex justify-between text-green-400 bg-green-500 bg-opacity-10 px-3 py-2 rounded-lg">
              <span>You save</span>
              <span className="font-bold">{formatPrice(savings)}</span>
            </div>
          )}
        </div>

        <div className="border-t-2 border-[#c89b3c] border-opacity-50 pt-8 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">Total</span>
            <span className="text-4xl font-bold text-[#c89b3c]">
              {formatPrice(total)}
            </span>
          </div>
        </div>

      <Button
        className="w-full py-4 text-lg"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "PROCEED TO CHECKOUT"}
      </Button>

        <div className="bg-green-500 bg-opacity-20 border-l-4 border-green-400 px-4 py-3 rounded-lg mb-6">
          <p className="text-green-300 font-semibold text-sm">
            ✓ Your order is eligible for FREE Delivery
          </p>
          <p className="text-gray-300 text-xs mt-1">
            Choose FREE Delivery at checkout
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm border-t border-gray-700 pt-4">
          <span>🔒 Secure Checkout</span>
          <span>|</span>
          <span>💳 Multiple Payment</span>
        </div>

        <div className="mt-6 bg-blue-500 bg-opacity-10 border border-blue-400 border-opacity-50 rounded-lg p-3">
          <p className="text-blue-300 text-xs font-semibold">
            📦 Delivery by: <span className="text-white">2-3 Business Days</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
