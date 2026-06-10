function RecentOrdersTable() {
  const recentOrders = [
    { id: '#ORD001', customer: 'Rajesh Kumar', amount: '₹45,000', status: 'Delivered', date: '2024-01-15' },
    { id: '#ORD002', customer: 'Priya Singh', amount: '₹32,500', status: 'Processing', date: '2024-01-14' },
    { id: '#ORD003', customer: 'Amit Patel', amount: '₹58,900', status: 'Shipped', date: '2024-01-13' },
    { id: '#ORD004', customer: 'Neha Sharma', amount: '₹28,000', status: 'Pending', date: '2024-01-12' },
    { id: '#ORD005', customer: 'Vikas Gupta', amount: '₹67,500', status: 'Delivered', date: '2024-01-11' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Shipped':
        return 'bg-purple-100 text-purple-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#c89b3c]/20 hover:shadow-2xl transition duration-500">
      <h2 className="text-2xl font-serif font-bold text-black mb-6 pb-4 border-b-2 border-gray-100">
        Recent Orders
      </h2>
      <div className="space-y-3">
        {recentOrders.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-[#faf6ed] to-white rounded-2xl hover:shadow-lg hover:shadow-[#c89b3c]/10 transition duration-300"
          >
            <div className="flex-1">
              <p className="font-semibold text-black">{order.customer}</p>
              <p className="text-xs text-gray-500">{order.id}</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="font-bold text-black">{order.amount}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
            <span className={`ml-4 px-4 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrdersTable;