import { useState } from "react";
import FashionNavbar from "./FashionNavbar";
import useCountUp from "../../hooks/useCountUp";

export default function FashionMain() {
  const [showDeliveries, setShowDeliveries] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const deliveryCount = useCountUp({
    duration: 3,
    end: 3942,
    onComplete: () => setShowDeliveries(true),
  });
  const customerCount = useCountUp({
    duration: 3,
    end: 1836,
    onComplete: () => setShowCustomers(true),
  });
  return (
    <main className="w-screen h-screen">
      <FashionNavbar />
      <div className="w-full h-full bg-fashionBg bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5">
        <div className="md:w-[600px] w-[95%] flex flex-col gap-5 items-center">
          <h1 className="md:text-[42px] text-[30px] font-plusJakartaSans font-bold text-center text-white">
            Find the best High <br />
            Quality outfit in one tap
          </h1>
          <p className="md:text-[17px] text-[15px] text-[#d4d4d8] font-plusJakartaSans text-center">
            We have a wide range of products that serves various Demographic{" "}
            <br />
            groups and markets. Our product Range are Trendy and always On point
          </p>

          <form className="w-4/5 mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-t-md py-[17px] px-4 gap-3 w-full h-[45px] bg-white shadow-md overflow-hidden grid grid-cols-[25px_1fr] items-center">
              <img src="/assets/search.svg" className="w-[20px]" />
              <input
                type="search"
                placeholder="Try joggers, Polo, T-shirts etc..."
                className="text-[16px] placeholder:text-[#71717A] text-black border-0 outline-0 font-plusJakartaSans"
              />
            </div>
            <button className="w-full h-[45px] border-0 outline-0 bg-primary text-white text-[14px] uppercase font-medium font-plusJakartaSans text-center tracking-[2px] rounded-b-md">
              Search now
            </button>
          </form>

          <div className="w-full flex items-center justify-center gap-7 mt-8">
            <div>
              <h1 className="font-plusJakartaSans text-[33px] text-white font-bold text-center">
                {deliveryCount}
              </h1>
              <p className="font-plusJakartaSans text-[16px] text-[#D4D4D8] font-bold text-center">
                {showDeliveries && "Order Delivered"}
              </p>
            </div>
            <span>
              <h1 className="font-plusJakartaSans text-[33px] text-white font-bold text-center">
                {customerCount}
              </h1>
              <p className="font-plusJakartaSans text-[16px] text-[#D4D4D8] font-bold text-center">
                {showCustomers && "Registered Customers"}
              </p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
