import { useEffect, useState } from "react";
import { getLocalData } from "../../utils/localData";
import { ProductDescription } from "../../types/Response";
import formatCurrency from "../../utils/FormatCurrency";

interface Props {
  id: number | string;
  count: number;
}

export default function CheckoutCartCard({ count, id }: Props) {
  const [fashionItems, setFashionItems] = useState<ProductDescription[]>([]);
  const [artItems, setArtItems] = useState<ProductDescription[]>([]);

  const item = [...fashionItems, ...artItems].find((item) => item.id === id);

  useEffect(() => {
    const fashionItems = getLocalData<ProductDescription[] | undefined>(
      "fashion-products"
    );
    if (!fashionItems) return;
    setFashionItems(fashionItems);
  }, []);
  useEffect(() => {
    const artItems = getLocalData<ProductDescription[] | undefined>(
      "artCraft-products"
    );
    if (!artItems) return;
    setArtItems(artItems);
  }, []);

  return (
    <div className="w-full py-2 border-b border-muted bg-transparent h-[70px] grid grid-cols-[70px_1fr_80px] gap-4 overflow-hidden">
      <img
        src={item?.imagesList[0].imageUrl}
        alt={item?.description}
        className="w-full h-full overflow-hidden"
      />

      <div className="overflow-hidden">
        <h4 className="text-[13px] font-poppins font-medium">
          {item?.description}
        </h4>
        <p className="text-muted text-[13px]">QTY {count}</p>
      </div>

      <h5 className="text-[12px] font-poppins font-medium">
        {item?.currency} {formatCurrency(item?.amount && item?.amount * count)}
      </h5>
    </div>
  );
}
