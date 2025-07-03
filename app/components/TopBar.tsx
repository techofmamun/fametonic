import React from "react";

const TopBar = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2.5 mb-[35px] p-5 lg:px-auto lg:py-2.5 bg-gradient-to-r from-[#fc004e] to-[#10cbe0]">
      <div className="flex-grow-0 text-sm sm:text-base md:text-[22px] font-bold text-center  text-white font-figtree">
        🚀{" "}
        <span className="font-extrabold text-[#00e7f9]">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        <span className="font-bold">Extra 25% OFF, Limited Spots</span> - start
        your journey today!
      </div>
    </div>
  );
};

export default TopBar;
