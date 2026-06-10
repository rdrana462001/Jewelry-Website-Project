import { useEffect, useState } from "react";

function DashboardCards({ users, products, stats, loading }) {
  const [counts, setCounts] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    if (!loading) {
      animateCount(0, users.length, (val) =>
        setCounts((prev) => ({ ...prev, users: val }))
      );
      animateCount(0, products.length, (val) =>
        setCounts((prev) => ({ ...prev, products: val }))
      );
      animateCount(0, stats.totalOrders || 0, (val) =>
        setCounts((prev) => ({ ...prev, orders: val }))
      );
      animateCount(0, stats.totalRevenue || 0, (val) =>
        setCounts((prev) => ({ ...prev, revenue: val }))
      );
    }
  }, [loading, users, products, stats]);

  const animateCount = (start, end, callback) => {
    const duration = 1000;
    const steps = 30;
    const stepValue = (end - start) / steps;
    let current = start;
    let step = 0;

    const interval = setInterval(() => {
      current += stepValue;
      step++;
      if (step >= steps) {
        current = end;
        clearInterval(interval);
      }
      callback(Math.floor(current));
    }, duration / steps);
  };

  const cards = [
    {
      title: "Total Products",
      value: counts.products,
      icon: "💎",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: "🛒",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Customers",
      value: counts.users,
      icon: "👥",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Revenue",
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: "💰",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

console.log("Stats:", stats);
console.log("Counts:", counts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#c89b3c]/20 hover:shadow-2xl hover:scale-105 transition duration-500 group overflow-hidden relative`}
        >
          {/* BACKGROUND GRADIENT */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition duration-500`}
          />

          {/* CONTENT */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  {card.title}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-black group-hover:text-[#c89b3c] transition duration-300">
                  {card.value}
                </h3>
              </div>
              <span className={`text-5xl group-hover:scale-125 transition duration-300`}>
                {card.icon}
              </span>
            </div>

            {/* PROGRESS BAR */}
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${card.color} rounded-full`}
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;