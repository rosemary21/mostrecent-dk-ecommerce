import { Pagination, PaginationProps } from "antd";
import { GetProductDescriptionResponse } from "../../types/Response";
import SalesCard from "../general/SalesCard";
import isMobile from "../../utils/isMobile";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  products: GetProductDescriptionResponse | undefined;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  pageNo: number;
}

export default function FashionSales({ products, setPageNo, pageNo }: Props) {
  const onChange: PaginationProps["onChange"] = (page) => {
    setPageNo(page);
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <div className="w-[30px] h-[30px] text-white rounded-full bg-primary overflow-hidden grid place-content-center">
          <FaChevronLeft />
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className="w-[30px] h-[30px] text-white rounded-full bg-primary overflow-hidden grid place-content-center">
          <FaChevronRight />
        </div>
      );
    }
    return originalElement;
  };

  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 overflow-hidden">
        {products?.productDescriptionDtoList?.map((card) => (
          <SalesCard key={card.id} card={card} type="fashion" />
        ))}
      </section>
      
      <section className="flex items-center justify-center overflow-hidden">
        <Pagination
          defaultCurrent={1}
          current={pageNo + 1}
          align="center"
          onChange={onChange}
          total={products?.productDescriptionDtoList?.length}
          className="overflow-hidden"
          size={isMobile() ? "small" : "default"}
          itemRender={itemRender}
          hideOnSinglePage
        />
      </section>
    </>
  );
}
