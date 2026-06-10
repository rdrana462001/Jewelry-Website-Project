import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptOrder = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}/accept`
      );

      fetchOrders();
      alert("Order Accepted ✅");
    } catch (error) {
      console.log(error);
    }
  };
const deliverOrder = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/orders/${id}/deliver`
    );

    fetchOrders();
    alert("Order Delivered 🚚");
  } catch (error) {
    console.log(error);
  }
};
  const rejectOrder = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}/reject`
      );

      fetchOrders();
      alert("Order Rejected ❌");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1">
        <AdminNavbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <div className="min-h-screen bg-[#f8f5ef] pt-28 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-serif mb-8">
              Orders Management
            </h1>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">
                  Total Orders ({orders.length})
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left">Order ID</th>
                      <th className="p-4 text-left">User</th>
                      {/* <th className="p-4 text-left">User Name</th> */}
                      
                      <th className="p-4 text-left">Amount</th>
                      <th className="p-4 text-left">Payment</th>
                      <th className="p-4 text-left">Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order._id}
                        className="border-b"
                      >
                        <td className="p-4">
                          {order.orderId}
                        </td>

{/* <td>{order.userName}</td>     */}

                        <td className="p-4">
                          {order.userId}
                        </td>

                        <td className="p-4 font-semibold text-green-600">
                          ₹{order.amount}
                        </td>

                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                            {order.paymentStatus}
                          </span>
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full capitalize ${
                              order.status === "accepted"
                                ? "bg-green-100 text-green-700"
                                : order.status === "rejected"
                                ? "bg-red-100 text-red-700"
                                : order.status === "delivered"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="flex gap-2 justify-center">
                            {order.status === "pending" && (
                              <>
                                <button
                                  onClick={() => acceptOrder(order._id)}
                                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                >
                                  Accept
                                </button>

                                <button
                                  onClick={() => rejectOrder(order._id)}
                                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                >
                                  Reject
                                </button>
                              </>
                            )}

                            {order.status === "accepted" && (
                              <button
                                onClick={() => deliverOrder(order._id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                              >
                                Deliver Order
                              </button>
                            )}
                            
                            {(order.status === "delivered" || order.status === "rejected") && (
                              <span className="text-gray-400 italic">No actions</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}

                    {orders.length === 0 && (
                      <tr>
                        <td
                          colSpan="6"
                          className="p-10 text-center text-gray-500"
                        >
                          No Orders Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;