import { Modal, Spin, Table, TableProps } from "antd";
import isMobile from "../../utils/isMobile";
import { getLocalData, setLocalData } from "../../utils/localData";
import formatCurrency from "../../utils/FormatCurrency";
import { DeliveryDto } from "../../types/Response";
import { InitializeCardPayload } from "../../types/Payload";
import { initializeCard } from "../../services/api/API";
import { dkSuccess } from "../../data";
import { useState } from "react";
import PayStackFrame from "./PayStackFrame";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface DataType {
  key: string;
  title: string;
  description: string;
}

export default function CheckoutModal({ isOpen, onClose }: Props) {
  const [openIFrame, setOpenIFrame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState("");
  const price = getLocalData<number>("totalAmount");
  const deliveryDto = getLocalData<DeliveryDto>("deliveryDto");
  const deliveryFee = deliveryDto?.feeDto?.doorDeliveryFee;
  const totalAmount = Number(deliveryFee) + price;
  setLocalData("totalPrice", totalAmount);

  const columns: TableProps<DataType>["columns"] = [
    {
      dataIndex: "title",
      key: "title",
      title: "Title",
      render: (_, record) => (
        <span className="font-bold text-[14px] font-plusJakartaSans text-black">
          {record?.title}
        </span>
      ),
    },
    {
      dataIndex: "description",
      key: "description",
      title: "Description",
      render: (_, record) => (
        <span className="font-normal text-[14px] font-plusJakartaSans text-black">
          {record?.description}
        </span>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      title: "Amount",
      description: price ? `₦ ${formatCurrency(price)}` : "-",
    },
    {
      key: "2",
      title: "Delivery Fee",
      description: deliveryFee ? `₦ ${formatCurrency(deliveryFee)}` : "-",
    },
    {
      key: "3",
      title: "Total Amount",
      description: totalAmount ? `₦ ${formatCurrency(totalAmount)}` : "-",
    },
    {
      key: "4",
      title: "Delivery Period",
      description: deliveryDto?.feeDto?.deliveryPeriod
        ? `${deliveryDto?.feeDto?.deliveryPeriod} days`
        : "-",
    },
    {
      key: "5",
      title: "Address",
      description: deliveryDto?.address ? deliveryDto?.address : "-",
    },
    {
      key: "6",
      title: "City",
      description: deliveryDto?.city ? deliveryDto?.city : "-",
    },
    {
      key: "7",
      title: "L.G.A.",
      description: deliveryDto?.localGovernment
        ? deliveryDto?.localGovernment
        : "-",
    },
    {
      key: "8",
      title: "State",
      description: deliveryDto?.state ? deliveryDto?.state : "-",
    },
  ];

  const handleInitializeCard = async () => {
    const payload: InitializeCardPayload = {
      amount: totalAmount * 100,
      email: deliveryDto?.userName,
    };
    setIsLoading(true);
    const response = await initializeCard(payload);
    if (response?.responseDto?.code === dkSuccess) {
      setAuthUrl(
        response?.initializeTransactionResponse?.data?.authorization_url
      );
      onClose();
      setOpenIFrame(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        centered
        width={isMobile() ? "95%" : 500}
        footer={null}
      >
        <Spin spinning={isLoading}>
          <div className="w-full font-plusJakartaSans">
            <h2 className="md:text-[20px] text-[16px] mb-3 font-bold text-center flex items-center justify-center gap-2">
              Order Details
            </h2>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              size="small"
            />

            <button
              className="w-full h-[40px] flex items-center justify-center text-base bg-primary text-white font-medium mt-3 outline-0 border-0"
              onClick={handleInitializeCard}
            >
              Pay
            </button>
          </div>
        </Spin>
      </Modal>

      <PayStackFrame
        openIFrame={openIFrame}
        setOpenIFrame={setOpenIFrame}
        authUrl={authUrl}
      />
    </>
  );
}
