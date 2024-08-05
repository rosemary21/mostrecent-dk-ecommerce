/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function TransactionSuccess() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reference = params.get("reference");

  const btnRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (reference) {
      const origin = import.meta.env.VITE_APP_ORIGIN;
      window.parent.postMessage(reference, origin);
    }
  };

  useEffect(() => {
    if (btnRef.current) {
      onClick();
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
      <h2 className="font-bold text-[19px] text-black font-plusJakartaSans">
        Order Successful
      </h2>
      <FaRegCheckCircle className="text-primary text-[30px] font-semibold" />

      <p className="text-[16px] text-black font-medium font-plusJakartaSans">
        You will recieve a confirmation email with order details
      </p>

      <input
        type="button"
        value="CONTINUE SHOPPING"
        hidden
        onClick={onClick}
        ref={btnRef}
      />

      {/* <button
        className="mt-5 md:w-[300px] md:h-[45px] w-3/5 h-[40px] mx-auto flex items-center justify-center text-[13px] font-semibold text-white border-0 outline-0 bg-primary"
        onClick={onClick}
      >
        CONTINUE SHOPPING
      </button> */}
    </div>
  );
}
