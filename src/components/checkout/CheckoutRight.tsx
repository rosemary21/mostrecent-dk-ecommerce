import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import formatCurrency from "../../utils/FormatCurrency";
import CheckoutCartCard from "./CheckoutCartCard";
import { getLocalData } from "../../utils/localData";

export default function CheckoutRight() {
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const { cart } = useCartContext();

  useEffect(() => {
    const data = getLocalData<number>("totalAmount");
    if (!data) return;
    setTotalAmount(data);
  }, []);
  return (
    <div className="md:w-[400px] bg-[#F8FAFC] md:py-[25px] py-[20px] md:px-[15px] px-[10px] gap-5">
      {cart?.map((item) => (
        <CheckoutCartCard key={item.id} {...item} />
      ))}

      <div className="w-full flex items-center mt-5 justify-between">
        <p className="font-poppins text-[14px] text-[#46312a] font-normal">
          Total
        </p>
        <p className="font-poppins text-[15px] text-[#46312a] font-semibold">
          ₦ {formatCurrency(totalAmount!)}
        </p>
      </div>
    </div>
  );
}
