import { Breadcrumb } from "antd";
import { ProductDescription } from "../../types/Response";
interface Props {
  closeModal: () => void;
  product: ProductDescription | null;
}

export default function DetailsBreadCrumb({ closeModal, product }: Props) {
  return (
    <Breadcrumb
      items={[
        {
          title: (
            <span className="md:text-base text-[14px] text-black font-semibold font-poppins">
              Home
            </span>
          ),
        },
        {
          title: (
            <span
              className="md:text-base text-[14px] text-black font-semibold font-poppins"
              onClick={closeModal}
            >
              Fashion
            </span>
          ),
        },
        {
          title: (
            <span className="md:text-base text-[14px] text-black font-semibold font-poppins">
              {product?.description}
            </span>
          ),
        },
      ]}
    />
  );
}
