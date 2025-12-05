import React from "react";
import Logo from "../../assets/loading/logo.jpg";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d2036]">
      <div className="flex flex-col items-center gap-5">

        {/* Larger Animated Circle containing LOGO */}
        <div className="relative w-44 h-44 flex items-center justify-center">

          {/* Electric pulsing ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping opacity-75" />

          {/* Solid base ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500" />

          {/* Larger Logo inside */}
          <img
            src={Logo}
            alt="Coltek Logo"
            className="w-28 h-28 object-cover rounded-full z-10"
          />
        </div>

        {/* Company text */}
        <p className="text-cyan-300 font-bold tracking-widest text-2xl">
          COLTEK
        </p>
      </div>
    </div>
  );
};



export default Loader;
