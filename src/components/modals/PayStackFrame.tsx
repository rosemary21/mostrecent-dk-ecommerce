import { Modal } from "antd";
import isMobile from "../../utils/isMobile";

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
  return (
    <Modal
      open={openIFrame}
      onClose={() => setOpenIFrame(false)}
      onOk={() => setOpenIFrame(false)}
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
  );
}
