function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: "👥",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: "💎",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: "📦",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Total Revenue",
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: "💰",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 backdrop-blur-xl bg-opacity-90`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-200 text-sm font-semibold">
                {card.title}
              </p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
            <span className="text-4xl">{card.icon}</span>
          </div>
          <div className="w-full bg-white bg-opacity-20 h-1 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;