import { ChangeEvent, useState } from "react";
import PrimaryInput from "../general/PrimaryInput";
import { useCartContext } from "../../contexts/CartContext";
import { DeliveryDto, LoginResponseProps } from "../../types/Response";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { getLocalData, setLocalData } from "../../utils/localData";
import openNotification from "../../utils/OpenNotification";
import { CheckoutPayload } from "../../types/Payload";
import { addDelivery, checkout } from "../../services/api/API";
import { dkSuccess } from "../../data";
import CheckoutModal from "../modals/CheckoutModal";

interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BillingDetails({
  userDetails,
  setActiveCheckoutAccordion,
  setIsLoading,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const { formValues, setFormValues } = useCartContext();

  const handleShow = () => {
    setShowModal(true);
  };

  const handleHide = () => {
    setShowModal(false);
  };

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

    // Add delivery
    setIsLoading(true);
    const payload: CheckoutPayload = {
      address: formValues.address[0],
      city: formValues.city[0],
      state: formValues.state[0],
      zipCode: formValues.zipCode,
      localGovernment: formValues.lga[0],
      userName: userDetails?.emailAddress as string,
    };

    const response = await addDelivery(payload);
    if (response?.responseDto?.code === dkSuccess) {
      const res = await checkout(payload);
      setLocalData<DeliveryDto>("deliveryDto", res?.deliverydto);
      handleShow();
      setIsLoading(false);
      setFormValues((prev) => ({
        ...prev,
        address: "",
        city: "",
        lga: "",
        state: "",
        zipCode: "",
      }));
    }
    setIsLoading(false);
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

      <CheckoutModal isOpen={showModal} onClose={handleHide} />
    </div>
  );
}
