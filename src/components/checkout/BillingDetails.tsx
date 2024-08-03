import { ChangeEvent } from "react";
import PrimaryInput from "../general/PrimaryInput";
import { useCartContext } from "../../contexts/CartContext";
import { LoginResponseProps } from "../../types/Response";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { getLocalData } from "../../utils/localData";
import openNotification from "../../utils/OpenNotification";

interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
}

export default function BillingDetails({
  userDetails,
  setActiveCheckoutAccordion,
}: Props) {
  const { formValues, setFormValues } = useCartContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleCheckout = async () => {
    // Check if user is logged in
    const data = getLocalData<LoginResponseProps>("user-details");
    if (!data) {
      openNotification("warning", "Sign In to continue...");
      setActiveCheckoutAccordion("Sign In");
      return;
    }
    // Check if we have all the data needed for checkout
    if (
      !formValues.address ||
      !formValues.city ||
      !formValues.lga ||
      !formValues.state ||
      !formValues.zipCode
    ) {
      openNotification("warning", "Enter complete delivery details...");
      setActiveCheckoutAccordion("Delivery Details");
      return;
    }
    // Initiate Checkout
    // Display the doorDeliveryFee & deliveryPeriod on a modal
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <PrimaryInput
        id="state"
        name="state"
        onChange={handleChange}
        value={userDetails?.emailAddress as string}
        placeholder="State"
        disabled
      />

      <PrimaryInput
        id="zipCode"
        name="zipCode"
        onChange={handleChange}
        value={formValues.zipCode}
        placeholder="Zip code"
        disabled
      />
      <button
        className="w-full h-[40px] grid col-span-2 border border-black place-content-center text-[#46312A] text-[14px] bg-white font-bold"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
