import { useEffect } from "react";
import { Link } from "react-router-dom";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#05010f]">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl">

        <h1 className="text-5xl font-bold text-white mb-4">
          Logged Out
        </h1>

        <p className="text-white/60 mb-6">
          You have successfully logged out
        </p>

     <Link to="/login">

  <button
    className="
    px-6
    py-3
    bg-red-500
    text-white
    rounded-xl
    font-semibold
    hover:bg-red-600
    transition
    "
  >

    Logout

  </button>

</Link>
      </div>

    </div>

  );

}

export default Logout;