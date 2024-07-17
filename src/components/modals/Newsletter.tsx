import { Modal } from "antd";
import isMobile from "../../utils/isMobile";

interface Props {
  isModalOpen: boolean;
  showModal: () => void;
  hideModal: () => void;
  message: string;
}

export default function Newsletter({
  hideModal,
  isModalOpen,
  message,
  showModal,
}: Props) {
  return (
    <Modal
      title={null}
      open={isModalOpen}
      onOk={showModal}
      onCancel={hideModal}
      width={isMobile() ? "90%" : "500px"}
      footer={null}
      closeIcon={null}
    >
      <div className="w-full py-6 flex flex-col items-center justify-center gap-6">
        <img
          src="/assets/newsletter-envelope.svg"
          alt="newsletter envelope"
          className="w-[56px] h-[44px]"
        />

        <h3 className="md:text-[26px] text-[19px] font-medium font-poppins">
          {message}
        </h3>

        <div className="text-black font-poppins md:text-base text-[14px] text-center">
          <p>Thank you for subscribing to our newsletter.</p>
          <p>We're happy to always inform you about our latest activities.</p>
        </div>

        <button
          onClick={hideModal}
          className="w-[307px] mx-auto md:h-[51px] h-[40px] text-[13px] text-white bg-primary"
        >
          DONE
        </button>
      </div>
    </Modal>
  );
}
