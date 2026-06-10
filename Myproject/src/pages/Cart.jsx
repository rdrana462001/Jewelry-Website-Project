import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCart, setCart } from "../utils/storageUtils";
import EmptyCart from "./components/EmptyCart";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import Button from "../component/button";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map(item =>
     item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    setCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item._id !== id);
    setCartItems(updated);
    setCart(updated);
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === "number") return priceStr;
    if (typeof priceStr === "string") {
      return Number(priceStr.replace(/[^0-9.]/g, ""));
    }
    return Number(String(priceStr).replace(/[^0-9.]/g, ""));
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    const quantity = item.quantity || 1;
    return total + (itemPrice * quantity);
  }, 0);

  const tax = subtotal * 0.18;
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + tax + shipping;
  const savings = cartItems.reduce((total, item) => {
    const originalPrice = parsePrice(item.originalPrice || item.price);
    const salePrice = parsePrice(item.price);
    return total + ((originalPrice - salePrice) * (item.quantity || 1));
  }, 0);

  return (
    <div className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-5">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-black mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border-2 border-[#c89b3c] border-opacity-10">
                  <h2 className="text-2xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-gray-200">
                    Shopping Cart ({cartItems.length})
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item._id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                        formatPrice={formatPrice}
                        parsePrice={parsePrice}
                      />
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-gray-200">
                    <Link
                      to="/collection/rings"
                      className="inline-block text-[#c89b3c] font-semibold hover:text-black transition-colors"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                savings={savings}
                total={total}
                formatPrice={formatPrice}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;