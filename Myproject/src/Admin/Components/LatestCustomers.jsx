function LatestCustomers({ filteredUsers }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-[#c89b3c]/20 hover:shadow-2xl transition duration-500">
      <h2 className="text-2xl font-serif font-bold text-black mb-6 pb-4 border-b-2 border-gray-100">
        Latest Customers
      </h2>
      <div className="space-y-4">
        {filteredUsers.slice(0, 5).map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-[#faf6ed] to-white rounded-2xl hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c89b3c] to-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-black">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#c89b3c] bg-[#c89b3c]/10 px-3 py-1 rounded-full">
              {user.role || "Customer"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestCustomers;
