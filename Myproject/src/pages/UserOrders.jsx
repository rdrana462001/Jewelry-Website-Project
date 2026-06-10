import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";
import Navbar from "../components/Navbar";
import "../collection/Collection.css";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user && user._id) {
      fetchUserOrders();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserOrders = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/orders/user/${user._id}`
      );
      setOrders(res.data);
    } catch (error) {
      console.log("Error fetching user orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const s = status ? status.toLowerCase() : "pending";
    switch (s) {
      case "accepted":
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wider">Accepted</span>;
      case "delivered":
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider">Delivered</span>;
      case "rejected":
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold tracking-wider">Rejected</span>;
      default:
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold tracking-wider">Pending</span>;
    }
  };

  const downloadBill = (order) => {
    const doc = new jsPDF();

    // Add company logo or text
    doc.setFontSize(22);
    doc.setTextColor(200, 155, 60); // #c89b3c
    doc.text("LUXORA", 105, 20, null, null, "center");

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Premium Jewelry & Royal Heritage", 105, 28, null, null, "center");
    doc.text("Ahmedabad, India | luxora@gmail.com", 105, 34, null, null, "center");

    // Line break
    doc.setDrawColor(200, 155, 60);
    doc.setLineWidth(0.5);
    doc.line(14, 40, 196, 40);

    // Bill Details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Order ID: ${order.orderId || order._id.slice(-8).toUpperCase()}`, 14, 50);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 14, 58);
    
    doc.text(`Billed To: ${order.userName || user?.name || "Customer"}`, 120, 50);
    doc.text(`Payment Status: ${order.paymentStatus || "Completed"}`, 120, 58);

    // Table
    const tableColumn = ["Item Description", "Quantity", "Price (INR)", "Total (INR)"];
    const tableRows = [];
    
    if (order.items && order.items.length > 0) {
      order.items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemData = [
          item.name,
          item.quantity,
          `Rs. ${item.price}`,
          `Rs. ${itemTotal}`
        ];
        tableRows.push(itemData);
      });
    } else {
       tableRows.push(["Order Items", 1, `Rs. ${order.amount}`, `Rs. ${order.amount}`]);
    }

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 70,
      theme: 'grid',
      headStyles: { fillColor: [200, 155, 60], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [253, 250, 245] },
    });

    const finalY = doc.lastAutoTable.finalY || 70;

    // Totals
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Total Amount Paid: Rs. ${order.amount}`, 120, finalY + 15);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Thank you for shopping with Luxora!", 105, finalY + 35, null, null, "center");

    doc.save(`Invoice_${order.orderId || order._id.slice(-8)}.pdf`);
  };

  return (
    <div className="bg-[#fdfaf5] min-h-screen font-sans">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="tracking-[8px] text-[#c89b3c] text-sm mb-4 font-semibold uppercase">Your Journey</p>
          <h1 className="text-5xl md:text-7xl font-serif text-black leading-tight">My Orders</h1>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">Loading your orders...</div>
        ) : !user ? (
          <div className="text-center py-20 text-gray-500 text-lg">Please login to view your orders.</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20 bg-white/60 backdrop-blur-md border border-[#e7d7ab] rounded-3xl shadow-xl">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">No Orders Yet</h2>
            <p className="text-gray-500 mb-8">You haven't made any purchases yet.</p>
            <a href="/explore" className="px-8 py-3 bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-bold tracking-[2px] rounded-full hover:scale-105 transition duration-500 inline-block">
              START SHOPPING
            </a>
          </div>
        ) : (
          <div className="grid gap-10">
            {orders.map((order) => (
              <div key={order._id} className="bg-white/80 backdrop-blur-lg border border-[#e7d7ab] rounded-[30px] shadow-lg overflow-hidden hover:shadow-2xl transition duration-500">
                <div className="bg-gradient-to-r from-[#fcf9f2] to-[#f6eed9] p-6 border-b border-[#e7d7ab] flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order ID</p>
                    <p className="font-semibold text-black tracking-wider">{order.orderId || order._id.slice(-8).toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-black">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                    <p className="font-semibold text-green-700">₹{order.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order Status</p>
                    {getStatusBadge(order.status)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Payment</p>
                    <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold">
                      {order.paymentStatus || "Completed"}
                    </span>
                  </div>
                  <div>
                    <button 
                      onClick={() => downloadBill(order)}
                      className="px-4 py-2 bg-gradient-to-r from-[#c89b3c] to-[#f5d98a] text-black font-semibold rounded-full hover:scale-105 transition-transform text-sm shadow-md"
                    >
                      Download Bill
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl mb-6 text-gray-800">Purchased Items</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {order.items && order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <img 
                          src={item.image || "/placeholder.jpg"} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-xl shadow-sm"
                        />
                        <div>
                          <h4 className="font-semibold text-black text-lg">{item.name}</h4>
                          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                          <p className="text-[#c89b3c] font-semibold mt-1">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserOrders;
