function MembershipCard({ user }) {
  const membershipLevel = "PLATINUM";
  const memberSince = new Date(user?.createdAt).getFullYear();
  const memberID = user?._id?.slice(-8).toUpperCase() || "XXXXX";

  return (
    <div className="relative group overflow-hidden rounded-[40px]">
      {/* CARD */}
      <div className="bg-gradient-to-br from-[#c89b3c] via-[#d4a574] to-[#f5d98a] rounded-[40px] shadow-2xl p-8 md:p-12 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#c89b3c]/50 transition duration-500 transform group-hover:scale-105">
        
        {/* DECORATIVE ELEMENTS */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition duration-500" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition duration-500" />

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* HEADER */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-white/80 text-xs font-bold tracking-[4px] mb-2">
                LUXORA MEMBERSHIP
              </p>
              <h2 className="text-4xl font-serif font-bold text-white">
                VIP {membershipLevel}
              </h2>
            </div>
            <div className="text-6xl">💎</div>
          </div>

          {/* MEMBER DETAILS */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-[2px] mb-2">
                MEMBER ID
              </p>
              <p className="text-2xl font-mono font-bold text-white">
                {memberID}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-xs font-semibold tracking-[2px] mb-2">
                MEMBER SINCE
              </p>
              <p className="text-2xl font-bold text-white">{memberSince}</p>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mb-8 pb-8 border-b border-white/30">
            <p className="text-white/80 text-xs font-bold tracking-[4px] mb-4">
              EXCLUSIVE BENEFITS
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Free Shipping",
                "Early Access",
                "Special Discounts",
                "Priority Support",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90 text-sm font-semibold">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/70 text-xs font-semibold">
                CARDHOLDER NAME
              </p>
              <p className="text-white font-bold text-lg">
                {user?.name?.toUpperCase()}
              </p>
            </div>
            <div className="text-3xl font-bold text-white/80">⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;