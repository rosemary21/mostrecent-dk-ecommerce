import React, { useLayoutEffect, useState } from "react";
import { Modal } from "antd";
import { getLocalData } from "../../utils/localData";
import { ProductDescription } from "../../types/Response";
import DetailCarousel from "../general/DetailCarousel";
import formatCurrency from "../../utils/FormatCurrency";
import DetailCarouselFooter from "../general/DetailCarouselFooter";
import ArtCraftDetailsBreadCrumb from "../artCraft/ArtCraftDetailsBreadcrumb";

interface Props {
  openDetail: boolean;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
  productId: number;
}

export default function ArtDetailsModal({
  openDetail,
  setOpenDetail,
  productId,
}: Props) {
  const [product, setProduct] = useState<ProductDescription | null>(null);

  function closeModal() {
    setOpenDetail(false);
  }

  useLayoutEffect(() => {
    if (productId) {
      const products = getLocalData<ProductDescription[] | undefined>(
        "artCraft-products"
      );
      if (!products) return;
      const product = products.find((product) => product.id === productId);
      if (!product) return;
      setProduct(product);
    }
  }, [productId]);
  return (
    <Modal
      open={openDetail}
      onCancel={closeModal}
      onClose={closeModal}
      destroyOnClose
      centered
      title={
        <ArtCraftDetailsBreadCrumb closeModal={closeModal} product={product} />
      }
      footer={
        <DetailCarouselFooter closeModal={closeModal} productId={productId} />
      }
    >
      <div className="w-full flex flex-col gap-5">
        <div className="w-full h-[300px]">
          <DetailCarousel product={product} />
        </div>
        <div>
          <h3 className="capitalize font-medium font-poppins md:text-[17px] text-[15px] border-b-[4px] border-black">
            {product?.description}
          </h3>
          <div className="flex items-center gap-3 mt-4 border-b border-[#D4D4D4] pb-4">
            {product?.price && (
              <del className="font-montserrat md:text-base text-[14px] font-normal">
                {product?.currency} {formatCurrency(product?.price)}
              </del>
            )}
            <span className="font-montserrat md:text-base text-[14px] font-bold">
              {product?.currency} {formatCurrency(product?.amount)}
            </span>
          </div>
          <div className="pt-4 font-montserrat md:text-base text-[14px] font-bold">
            <span>size:</span> <span>{product?.productSize}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
