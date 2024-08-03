/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import PrimaryInput from "../general/PrimaryInput";
import NaijaStates from "naija-state-local-government";
import { NigeriaZipCodes } from "../../data";
import { LoginResponseProps } from "../../types/Response";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { useCartContext } from "../../contexts/CartContext";
interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
}

export default function DeliveryDetailsForm({
  userDetails,
  setActiveCheckoutAccordion,
}: Props) {
  const { formValues, setFormValues } = useCartContext();
  const [lgas, setLgas] = useState<string[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = NaijaStates.states()?.indexOf(e.target.value);
    const zipCode = NigeriaZipCodes[index];
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
      zipCode: zipCode,
    }));
    setLgas(NaijaStates.lgas(e.target.value)?.lgas);
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <select
        name="state"
        id="state"
        value={formValues.state}
        onChange={handleStateChange}
        className="w-full h-[42px] leading-[42px] bg-white border-b border-[#d0d5dd] outline-0 transition-all duration-500 rounded-none placeholder:text-muted text-black text-[14px] font-normal font-poppins"
      >
        <option value="">--Select state--</option>
        {NaijaStates.states()?.map((state: any) => (
          <option key={state}>{state}</option>
        ))}
      </select>

      <PrimaryInput
        id="zipCode"
        name="zipCode"
        onChange={handleChange}
        value={formValues.zipCode}
        placeholder="Zip code"
      />

      <PrimaryInput
        id="address"
        name="address"
        onChange={handleChange}
        value={formValues.address}
        placeholder="Address"
      />

      <PrimaryInput
        id="city"
        name="city"
        onChange={handleChange}
        value={formValues.city}
        placeholder="City"
      />

      <PrimaryInput
        id="username"
        name="username"
        onChange={handleChange}
        value={userDetails?.emailAddress as string}
        placeholder="User name"
        disabled
      />

      <select
        name="lga"
        id="lga"
        value={formValues.lga}
        onChange={(e) => {
          handleChange(e);
          if (
            formValues.address &&
            formValues.city &&
            formValues.lga &&
            formValues.state &&
            formValues.zipCode
          ) {
            setActiveCheckoutAccordion("Billing Details");
          }
        }}
        className="w-full h-[42px] leading-[42px] bg-white border-b border-[#d0d5dd] outline-0 transition-all duration-500 rounded-none placeholder:text-muted text-black text-[14px] font-normal font-poppins"
      >
        <option value="">--Select L.G.A.--</option>
        {lgas?.map((state: any) => (
          <option key={state}>{state}</option>
        ))}
      </select>
    </div>
  );
}
