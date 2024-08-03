import { ChangeEvent } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import PrimaryInput from "../general/PrimaryInput";

interface FormValues {
  email: string;
  amount: string;
}

export default function BillingDetails() {
  const [formValues, setFormValues] = useLocalStorage<FormValues>(
    "delivery-details",
    {
      email: "",
      amount: "",
    }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <PrimaryInput
        id="state"
        name="state"
        onChange={handleChange}
        value={formValues.email}
        placeholder="State"
      />
      <PrimaryInput
        id="zipCode"
        name="zipCode"
        onChange={handleChange}
        value={formValues.amount}
        placeholder="Zip code"
      />
      <button className="w-full h-[40px] grid col-span-2 border border-black place-content-center text-[#46312A] text-[14px] bg-white font-bold">
        PayStack
      </button>
    </div>
  );
}
