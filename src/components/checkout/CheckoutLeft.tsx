import { useState } from "react";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { LoginResponseProps } from "../../types/Response";
import AccordionItem from "./AccordionItem";
import { Spin } from "antd";

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
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="md:w-[400px] w-full">
      <Spin spinning={isLoading}>
        <AccordionItem
          userDetails={userDetails}
          setActiveCheckoutAccordion={setActiveCheckoutAccordion}
          activeCheckoutAccordion={activeCheckoutAccordion}
          setIsLoading={setIsLoading}
        />
      </Spin>
    </div>
  );
}
