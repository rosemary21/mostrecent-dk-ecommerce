import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { LoginResponseProps } from "../../types/Response";
import AccordionItem from "./AccordionItem";

interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
  activeCheckoutAccordion: string;
}

export default function CheckoutLeft({
  userDetails,
  setActiveCheckoutAccordion,
  activeCheckoutAccordion,
}: Props) {
  return (
    <div className="md:w-[400px] w-full">
      <AccordionItem
        userDetails={userDetails}
        setActiveCheckoutAccordion={setActiveCheckoutAccordion}
        activeCheckoutAccordion={activeCheckoutAccordion}
      />
    </div>
  );
}
