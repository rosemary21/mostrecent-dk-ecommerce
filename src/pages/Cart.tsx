import { FaChevronLeft } from "react-icons/fa";
import FashionNavbar from "../components/fashion/FashionNavbar";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import CartItemCard from "../components/cart/CartItemCard";
import Footer from "../components/general/Footer";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import { LoginResponseProps, ProductDescription } from "../types/Response";
import { getLocalData, setLocalData } from "../utils/localData";
import formatCurrency from "../utils/FormatCurrency";
import openNotification from "../utils/OpenNotification";

export default function Cart() {
  const [fashionItems, setFashionItems] = useState<ProductDescription[]>([]);
  const [artItems, setArtItems] = useState<ProductDescription[]>([]);
  const navigate = useNavigate();
  const { clearCart, cartCount, cart, setActiveCheckoutAccordion } =
    useCartContext();

  const totalAmount = cart.reduce((tot, cartItem) => {
    const item = [...fashionItems, ...artItems].find(
      (item) => item.id === cartItem.id
    );
    return tot + (item?.amount || 0) * cartItem.count;
  }, 0);

  setLocalData<number>("totalAmount", totalAmount);

  const routeToCheckOut = () => {
    if (cartCount() === 0) {
      openNotification("warning", "Add item(s) to cart to continue");
      return;
    }
    // Check if user is logged in
    const userDetails = getLocalData<LoginResponseProps>("user-details");
    if (!userDetails?.token) {
      navigate(`/${ROUTES.checkout}`);
      setActiveCheckoutAccordion("Sign In");
      window.scroll(0, 0);
      return;
    } else {
      navigate(`/${ROUTES.checkout}`);
      setActiveCheckoutAccordion("Delivery Details");
      return;
    }
  };

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
    <>
      <FashionNavbar />
      <div className="md:w-3/5 w-[95%] mx-auto md:mt-[25vh] mb-[30px] my-[18vh] ">
        <div className="w-full flex items-center justify-between">
          <FaChevronLeft
            size={20}
            onClick={() => navigate(-1)}
            className="cursor-pointer transition-all duration-500 hover:text-primary"
          />
          <p className="md:text-[22px] text-[18px] font-bold text-primary">
            CART
          </p>
          <div />
        </div>

        <div className="mt-5 ">
          {cartCount() === 0 ? (
            <div className="font-plusJakartaSans font-medium text-[15px] text-[#888] text-center">
              Your cart is empty, continue shopping to add items
            </div>
          ) : (
            cart?.map((item) =>
              item.count > 0 ? <CartItemCard key={item.id} {...item} /> : null
            )
          )}
        </div>

        {cart?.length > 0 && (
          <button
            onClick={clearCart}
            className="w-1/2 h-[45px] mx-auto bg-primary text-white outline-0 border-0 mt-5 flex items-center justify-center text-[13px] font-medium"
          >
            CLEAR CART
          </button>
        )}
      </div>

      <div className="md:w-3/5 w-[95%] my-[30px] mx-auto bg-[#F8FAFC] md:py-[18px] py-[12px] md:px-[30px] px-[19px] flex flex-col gap-5">
        <div className="w-full grid grid-cols-[30%_1fr] gap-3">
          <p className="font-poppins font-normal text-[16px]">Total Items</p>
          <p className="font-poppins font-normal text-[16px] flex items-center justify-end">
            {cartCount()}
          </p>
        </div>

        <div className="w-full grid grid-cols-[30%_1fr] gap-3">
          <p className="font-poppins text-[16px] font-bold">Total Amount</p>
          <p className="font-poppins font-bold text-[16px] flex items-center justify-end">
            ₦ {formatCurrency(totalAmount)}
          </p>
        </div>

        <button
          className="w-full h-[40px] text-center text-white bg-primary outline-0 border-0 text-[14px] uppercase font-poppins font-medium"
          onClick={routeToCheckOut}
        >
          continue
        </button>
      </div>
      <Footer />
    </>
  );
}
