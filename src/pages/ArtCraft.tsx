import { useState } from "react";
import ArtCraftMain from "../components/artCraft/ArtCraftMain";
import { GetProductDescriptionPayload } from "../types/Payload";
import { useQuery } from "@tanstack/react-query";
import { getProductsByDescription } from "../services/api/API";
import { setLocalData } from "../utils/localData";
import { ProductDescription } from "../types/Response";
import ArtCraftCategories from "../components/artCraft/ArtCraftCategories";
import ArtCraftSales from "../components/artCraft/ArtCraftSales";
import Footer from "../components/general/Footer";
import { Spin } from "antd";

export default function ArtCraft() {
  const [pageNo, setPageNo] = useState(0);

  const payload: GetProductDescriptionPayload = {
    pageNo,
    pageSize: 24,
    productCode: "DKART",
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["getArtCraftQuery", { pageNo }],
    queryFn: () => getProductsByDescription(payload),
  });
  products &&
    setLocalData<ProductDescription[] | undefined>(
      "artCraft-products",
      products?.productDescriptionDtoList
    );
  return (
    <>
      <ArtCraftMain />
      <ArtCraftCategories />
      <Spin spinning={isLoading}>
        <ArtCraftSales
          pageNo={pageNo}
          products={products}
          setPageNo={setPageNo}
        />
      </Spin>
      <Footer />
    </>
  );
}
