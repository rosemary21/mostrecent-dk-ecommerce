import { Collapse, CollapseProps } from "antd";
import TabLabel from "./TabLabel";
import SignInForm from "./SignInForm";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import BillingDetails from "./BillingDetails";
import { LoginResponseProps } from "../../types/Response";
import { useAppContext } from "../../contexts/AppContext";

interface Props {
  userDetails: LoginResponseProps | null;
}

export default function CheckoutLeft({ userDetails }: Props) {
  const { isAccordion, activeCheckoutAccordion } = useAppContext();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <TabLabel title="Sign In" />,
      children: <SignInForm userDetails={userDetails} />,
      showArrow: false,
    },
    {
      key: "2",
      label: <TabLabel title="Delivery Details" />,
      children: <DeliveryDetailsForm />,
      showArrow: false,
    },
    {
      key: "3",
      label: <TabLabel title="Billing Details" />,
      children: <BillingDetails />,
      showArrow: false,
    },
  ];

  return (
    <div className="md:w-[400px] w-full">
      <Collapse
        defaultActiveKey={[activeCheckoutAccordion]}
        ghost
        accordion={isAccordion}
        items={items}
        bordered={false}
      />
    </div>
  );
}
