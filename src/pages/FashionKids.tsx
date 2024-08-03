import { useQuery } from "@tanstack/react-query";
import FashionCategories from "../components/fashion/FashionCategories";
import FashionMain from "../components/fashion/FashionMain";
import { getProductsByDescription } from "../services/api/API";
import { GetProductDescriptionPayload } from "../types/Payload";
import { useState } from "react";
import FashionSales from "../components/fashion/FashionSales";
import { setLocalData } from "../utils/localData";
import { ProductDescription } from "../types/Response";
import Footer from "../components/general/Footer";
import { Spin } from "antd";

export default function FashionKids() {
  const [pageNo, setPageNo] = useState(0);

  const payload: GetProductDescriptionPayload = {
    pageNo,
    pageSize: 24,
    productCode: "DKFASH",
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["getFashionQuery", { pageNo }],
    queryFn: () => getProductsByDescription(payload),
  });
  products &&
    setLocalData<ProductDescription[] | undefined>(
      "fashion-products",
      products?.productDescriptionDtoList
    );

  return (
    <div>
      <FashionMain />
      <FashionCategories />
      <Spin spinning={isLoading}>
        <FashionSales
          products={products}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
      </Spin>
      <Footer />
    </div>
  );
}
