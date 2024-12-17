// import Link from "next/link";
import Image from "next/image";

export default function CustomHeader() {
  return (
    <div className="w-full h-auto">
      {/* Header Section */}
      <header className="h-[38px] bg-red-800 max-sm:w-[390px] max-sm:h-[34px]">
        <h2 className="w-[411px] h-[19px] gap-2 relative top-2 left-[50%] transform -translate-x-[50%] text-white font-satoshi font-normal leading-[18.9px] text-[14px] max-sm:justify-start max-sm:bg-yellow-300 max-sm:w-[301px] max-sm:h-[16px] max-sm:left-[20px]">
          Sign up now to book your order.{" "}
          <b className="underline">Sign Up</b>
        </h2>
      </header>

      {/* Main Content */}
      <div className="h-auto w-full text-[#000000] relative top-[24px] left-0 flex justify-between items-center px-8">
        {/* Left Section (KASWA.FASHION) */}
        <div className="font-bold text-[32px] leading-[34.8px]">
          KASWA.FASHION
        </div>

        {/* Right Section (Shop, On Sale, New Arrivals, Brands + Search Button) */}
        <div className="flex items-center gap-[24px] font-normal leading-[21.6px] text-[16px]">
          <p>Shop</p>
          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brands</p>

          {/* Search Button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

// Pricing Header Component
export function Pricing() {
  return (
    <div className="relative" style={{ top: "62px", left: "100px", width: "1240px", height: "48px" }}>
      {/* Header Section */}
      <header className="h-[48px] bg-blue-800 flex items-center gap-[40px]">
        {/* Left Section (Logo or Branding) */}
        <div className="text-white font-bold text-[24px]">
          KASWA.FASHION
        </div>

        {/* Middle Section (Navigation Links) */}
        <div className="flex items-center gap-[40px] font-normal text-white">
          <p className="hover:underline cursor-pointer">Home</p>
          <p className="hover:underline cursor-pointer">Shop</p>
          <p className="hover:underline cursor-pointer">On Sale</p>
          <p className="hover:underline cursor-pointer">New Arrivals</p>
          <p className="hover:underline cursor-pointer">Brands</p>
        </div>

        {/* Right Section (Search Button or Other Actions) */}
        <div className="ml-auto">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </header>
    </div>
  );
}
