import TabLabel from "./TabLabel";
import SignInForm from "./SignInForm";
import { LoginResponseProps } from "../../types/Response";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import BillingDetails from "./BillingDetails";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";

interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
  activeCheckoutAccordion: string;
}

export default function AccordionItem({
  userDetails,
  setActiveCheckoutAccordion,
  activeCheckoutAccordion,
}: Props) {
  return (
    <>
      <div className="w-full mt-5">
        <div onClick={() => setActiveCheckoutAccordion("Sign In")}>
          <TabLabel title="Sign In" />
        </div>

        <div
          className={`overflow-hidden mt-3 transition-[max-height] duration-500 ease-in ${
            activeCheckoutAccordion === "Sign In" ? "max-h-[20rem]" : "max-h-0"
          }`}
        >
          <SignInForm
            userDetails={userDetails}
            setActiveCheckoutAccordion={setActiveCheckoutAccordion}
          />
        </div>
      </div>

      <div className="w-full mt-5">
        <div onClick={() => setActiveCheckoutAccordion("Delivery Details")}>
          <TabLabel title="Delivery Details" />
        </div>

        <div
          className={`overflow-hidden mt-3 transition-[max-height] duration-500 ease-in ${
            activeCheckoutAccordion === "Delivery Details"
              ? "max-h-[14rem]"
              : "max-h-0"
          }`}
        >
          <DeliveryDetailsForm
            userDetails={userDetails}
            setActiveCheckoutAccordion={setActiveCheckoutAccordion}
          />
        </div>
      </div>

      <div className="w-full mt-5">
        <div onClick={() => setActiveCheckoutAccordion("Billing Details")}>
          <TabLabel title="Billing Details" />
        </div>

        <div
          className={`overflow-hidden mt-3 transition-[max-height] duration-500 ease-in ${
            activeCheckoutAccordion === "Billing Details"
              ? "max-h-[7rem]"
              : "max-h-0"
          }`}
        >
          <BillingDetails
            userDetails={userDetails}
            setActiveCheckoutAccordion={setActiveCheckoutAccordion}
          />
        </div>
      </div>
    </>
  );
}
