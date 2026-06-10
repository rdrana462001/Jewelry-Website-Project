import { useEffect, useState } from "react";

function AccountStatistics({ user }) {
  const [stats, setStats] = useState([
    { label: "Total Orders", value: 12, icon: "🛍️", color: "blue" },
    { label: "Wishlist Items", value: 8, icon: "❤️", color: "red" },
    { label: "Cart Items", value: 5, icon: "🛒", color: "purple" },
    { label: "Total Spent", value: "₹1,45,000", icon: "💰", color: "gold" },
    { label: "Loyalty Points", value: "2,450", icon: "⭐", color: "yellow" },
    { label: "Rewards", value: "₹5,000", icon: "🎁", color: "green" },
  ]);

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50",
      red: "from-red-500 to-red-600 bg-red-50",
      purple: "from-purple-500 to-purple-600 bg-purple-50",
      gold: "from-[#c89b3c] to-[#f5d98a] bg-[#faf6ed]",
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-50",
      green: "from-green-500 to-green-600 bg-green-50",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border-2 border-[#c89b3c]/20 p-8 md:p-10 hover:shadow-2xl transition duration-500 animate-slideUp">
      
      {/* HEADER */}
      <div className="mb-8 pb-6 border-b-2 border-gray-200">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">
          Account Statistics
        </h2>
        <p className="text-gray-600">Your activity and rewards overview</p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const colorClass = getColorClasses(stat.color);
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${colorClass.split(" ")[0]} text-white rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition duration-300 group overflow-hidden relative`}
            >
              {/* BACKGROUND EFFECT */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-30 group-hover:scale-150 transition duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <p className="text-white/80 text-sm font-semibold mb-2">
                  {stat.label}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold mb-3">
                  {stat.value}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{stat.icon}</span>
                  <span className="text-white/70 text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccountStatistics;