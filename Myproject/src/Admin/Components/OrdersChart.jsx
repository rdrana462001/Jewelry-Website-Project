import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function OrdersChart({ orders = [] }) {

  const pending = orders.filter(
    (o) => o.status?.toLowerCase() === "pending"
  ).length;

  const accepted = orders.filter(
    (o) => o.status?.toLowerCase() === "accepted"
  ).length;

  const rejected = orders.filter(
    (o) => o.status?.toLowerCase() === "rejected"
  ).length;

  const data = [
    {
      status: "Pending",
      orders: pending,
    },
    {
      status: "Accepted",
      orders: accepted,
    },
    {
      status: "Rejected",
      orders: rejected,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-serif font-bold mb-6">
        Orders Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="status" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="orders"
            fill="#c89b3c"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrdersChart;