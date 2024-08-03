import { useCartContext } from "../../contexts/CartContext";

interface Props {
  closeModal: () => void;
  productId: number;
}

export default function DetailCarouselFooter({ closeModal, productId }: Props) {
  const { addToCart, handleAnimateCart } = useCartContext();

  const handleAddToCart = () => {
    handleAnimateCart();
    addToCart(productId);
  };
  return (
    <div className="w-full flex items-center gap-5">
      <button
        onClick={closeModal}
        className="w-full md:h-[50px] h-[40px] bg-white border border-[#D4D4D4] outline-0 text-[#858585] text-center text-[13px] font-medium"
      >
        CLOSE
      </button>

      <button
        className="w-full md:h-[50px] h-[40px] bg-primary border-0 outline-0 text-white text-center text-[13px] font-medium "
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </div>
  );
}
