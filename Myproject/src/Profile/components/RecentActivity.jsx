function RecentActivity({ user }) {
  const activities = [
    {
      type: "order",
      title: "Order #12345",
      description: "Diamond Necklace",
      date: "2024-01-15",
      icon: "🛍️",
      status: "Delivered",
      statusColor: "green",
    },
    {
      type: "wishlist",
      title: "Added to Wishlist",
      description: "Sapphire Ring",
      date: "2024-01-14",
      icon: "❤️",
      status: "Active",
      statusColor: "red",
    },
    {
      type: "view",
      title: "Viewed Product",
      description: "Emerald Bracelet",
      date: "2024-01-13",
      icon: "👁️",
      status: "Viewed",
      statusColor: "blue",
    },
    {
      type: "reward",
      title: "Earned Rewards",
      description: "500 Loyalty Points",
      date: "2024-01-12",
      icon: "⭐",
      status: "Credited",
      statusColor: "yellow",
    },
  ];

  const getStatusClass = (color) => {
    const classes = {
      green: "bg-green-100 text-green-700",
      red: "bg-red-100 text-red-700",
      blue: "bg-blue-100 text-blue-700",
      yellow: "bg-yellow-100 text-yellow-700",
    };
    return classes[color] || classes.blue;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border-2 border-[#c89b3c]/20 p-8 md:p-10 hover:shadow-2xl transition duration-500 animate-slideUp">
      
      {/* HEADER */}
      <div className="mb-8 pb-6 border-b-2 border-gray-200">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">
          Recent Activity
        </h2>
        <p className="text-gray-600">Your latest actions and interactions</p>
      </div>

      {/* TIMELINE */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#faf6ed] to-white rounded-2xl hover:shadow-lg hover:border-[#c89b3c]/30 border-2 border-transparent transition duration-300 group"
          >
            {/* ICON */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c89b3c] to-[#f5d98a] flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition duration-300">
              {activity.icon}
            </div>

            {/* DETAILS */}
            <div className="flex-1">
              <p className="font-bold text-black text-lg">{activity.title}</p>
              <p className="text-gray-600 text-sm">{activity.description}</p>
              <p className="text-gray-500 text-xs mt-1">
                {new Date(activity.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* STATUS BADGE */}
            <span
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${getStatusClass(
                activity.statusColor
              )}`}
            >
              {activity.status}
            </span>
          </div>
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <button className="mt-8 w-full py-3 rounded-full border-2 border-[#c89b3c] text-[#c89b3c] font-bold hover:bg-[#c89b3c] hover:text-white transition duration-300">
        VIEW ALL ACTIVITY
      </button>
    </div>
  );
}

export default RecentActivity;