import { Alert, Button, Modal, Space } from "antd";
import isMobile from "../../utils/isMobile";
import { useNavigate } from "react-router-dom";
import {
  clearLocalData,
  getLocalData,
  removeLocalData,
} from "../../utils/localData";
import { useEffect, useState } from "react";
import { AddTransactionPayload } from "../../types/Payload";
import { useCartContext } from "../../contexts/CartContext";
import { LoginResponseProps, ProductDescription } from "../../types/Response";
import { addTransaction } from "../../services/api/API";
import { dkSuccess } from "../../data";
import openNotification from "../../utils/OpenNotification";

interface Props {
  openIFrame: boolean;
  setOpenIFrame: (value: React.SetStateAction<boolean>) => void;
  authUrl: string;
}

export default function PayStackFrame({
  openIFrame,
  setOpenIFrame,
  authUrl,
}: Props) {
  const [showWarning, setShowWarning] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState("");

  const { setCart } = useCartContext();

  const navigate = useNavigate();

  const closeWarning = () => {
    setShowWarning(false);
  };

  const handleCancelTransaction = () => {
    closeWarning();
    setOpenIFrame(false);
    clearLocalData();
    setCart([]);
    navigate(`/`);
  };

  const handleAddTransaction = async () => {
    if (!receivedMessage) {
      openNotification(
        "warning",
        "Your transaction is probably still processing... Please wait..."
      );
      return;
    }
    const userName =
      getLocalData<LoginResponseProps>("user-details")?.emailAddress;

    const descriptionList =
      getLocalData<ProductDescription[]>("descriptionList");

    const descriptionCodeList = descriptionList?.map(
      ({
        code,
        productCategoryCode,
        productCode,
        description,
        amount,
        currency,
      }) => ({
        productDescriptionCode: code,
        productCategoryCode,
        productCode,
        productDescription: description,
        amount,
        currency,
      })
    );

    const payload: AddTransactionPayload = {
      currency: "₦",
      userName,
      reference: receivedMessage,
      descriptionCodeList,
    };

    const response = await addTransaction(payload);
    if (response?.responseDto?.code === dkSuccess) {
      setOpenIFrame(false);
      removeLocalData("cart");
      removeLocalData("activeCheckoutAccordion");
      removeLocalData("deliveryDto");
      removeLocalData("totalPrice");
      removeLocalData("delivery-details");
      removeLocalData("fashion-products");
      removeLocalData("totalAmount");
      removeLocalData("descriptionList");
      navigate("/fashion-men");
      openNotification("success", "Thank you for your purchase !");
    }
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      const origin = import.meta.env.VITE_APP_ORIGIN;
      if (e.origin !== origin) return;
      setReceivedMessage(e?.data);
    });
  }, []);

  return (
    <>
      <Modal
        open={openIFrame}
        onClose={() => setShowWarning(true)}
        onCancel={() => setShowWarning(true)}
        onOk={handleAddTransaction}
        centered
        width={isMobile() ? "95%" : 540}
        destroyOnClose
        maskClosable
        okText="Complete"
        height={500}
      >
        <iframe
          src={authUrl}
          width={isMobile() ? "95%" : 500}
          height={400}
        ></iframe>
      </Modal>

      <Modal
        open={showWarning}
        onClose={closeWarning}
        centered
        width={isMobile() ? "95%" : 540}
        destroyOnClose
        maskClosable
        okText="Complete"
        footer={null}
      >
        <div className="w-full">
          <Alert
            message={
              <h5 className="font-bold font-plusJakartaSans text-[17px]">
                Are you sure you want to cancel?
              </h5>
            }
            description={
              <p className="font-medium font-plusJakartaSans text-[14px]">
                Cancelling this transaction will clear all data related to this
                purchase, and take you to the home page.
              </p>
            }
            type="warning"
            showIcon
            action={
              <Space direction="vertical">
                <Button
                  size="small"
                  type="primary"
                  onClick={handleCancelTransaction}
                >
                  Accept
                </Button>
                <Button size="small" danger ghost onClick={closeWarning}>
                  Decline
                </Button>
              </Space>
            }
          />
        </div>
      </Modal>
    </>
  );
}
