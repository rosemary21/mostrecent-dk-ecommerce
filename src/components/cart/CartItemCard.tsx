import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductDescription } from "../../types/Response";
import formatCurrency from "../../utils/FormatCurrency";
import { getLocalData } from "../../utils/localData";
import { ImBin } from "react-icons/im";
import { useCartContext } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

interface Props {
  id: number | string;
  count: number;
}

export default function CartItemCard({ count, id }: Props) {
  const [fashionItems, setFashionItems] = useState<ProductDescription[]>([]);
  const [artItems, setArtItems] = useState<ProductDescription[]>([]);
  const { addToCart, removeItemFromCart, removeFromCart } = useCartContext();

  const item = [...fashionItems, ...artItems].find((item) => item.id === id);
  console.log(item);

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
    <div className="md:w-full w-[95%] mx-auto bg-slate-50 h-[80px] mt-2 rounded-sm border border-slate-200 grid md:grid-cols-[80px_30%_35%_1fr] grid-cols-[80px_45%_1fr] gap-5 overflow-hidden">
      <img
        src={item?.imagesList[0].imageUrl}
        alt={item?.description}
        className="w-full h-full"
      />
      <h4 className="md:text-[14px] text-[12px] font-poppins font-medium md:flex hidden">
        {item?.description}
      </h4>

      <div className="w-full h-full flex flex-col justify-between py-1">
        <p className="md:text-[13px] text-[11px] font-poppins font-medium text-slate-500">
          QTY: {count} @ {item?.currency} {formatCurrency(item?.amount)}
        </p>

        <div className="w-full flex items-center gap-4 overflow-hidden">
          <button
            className="text-white font-medium bg-[#46312A] md:w-[35px] w-[28px] md:h-[30px] h-[25px] flex items-center justify-center transition-all duration-500 hover:text-[#46312A] hover:bg-white hover:border hover:border-[#46312A] active:text-blue-500"
            onClick={() => addToCart(Number(id))}
          >
            <FaPlus size={15} />
          </button>

          <button
            className="text-white font-medium bg-[#46312A] md:w-[35px] w-[28px] md:h-[30px] h-[25px] flex items-center justify-center transition-all duration-500 hover:text-[#46312A] hover:bg-white hover:border hover:border-[#46312A] active:text-blue-500"
            onClick={() => removeFromCart(Number(id))}
          >
            <FaMinus size={15} />
          </button>

          <button
            className="text-white font-medium bg-primary md:w-[35px] w-[28px] md:h-[30px] h-[25px] flex items-center justify-center"
            onClick={() => removeItemFromCart(Number(id))}
          >
            <ImBin size={15} />
          </button>
        </div>
      </div>

      {item?.amount && (
        <h5 className="md:text-[14px] text-[12px] font-poppins font-medium">
          {item?.currency} {formatCurrency(item?.amount * count)}
        </h5>
      )}
    </div>
  );
}
