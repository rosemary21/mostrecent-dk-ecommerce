/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ProductDescription } from "../../types/Response";
import formatCurrency from "../../utils/FormatCurrency";
import { useState, MouseEvent } from "react";
import { useCartContext } from "../../contexts/CartContext";
import ArtDetailsModal from "../modals/ArtDetailModal";
import DetailsModal from "../modals/DetailsModal";

interface Props {
  card: ProductDescription;
  type: string;
}

export default function SalesCard({ card, type }: Props) {
  const [openDetail, setOpenDetail] = useState(false);
  const [productId, setProductId] = useState<number>(0);

  const { addToCart, handleAnimateCart } = useCartContext();

  function viewProduct() {
    setProductId(card?.id);
    setOpenDetail(true);
  }

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.stopPropagation();
    handleAnimateCart();
    addToCart(card?.id);
  }

  return (
    <>
      <figure
        className="w-full lg:h-[400px] md:h-[350px] h-[300px] border border-white cursor-pointer transition-all duration-500 hover:shadow-lg flex flex-col items-start justify-end lg:p-5 md:p-4 p-3 bg-center bg-no-repeat bg-cover relative rounded-md overflow-hidden"
        style={{ backgroundImage: `url(${card?.imagesList[0].imageUrl})` }}
        onClick={viewProduct}
      >
        <figcaption
          className="absolute bottom-0 left-0 w-full h-3/5 md:p-6 p-4 flex flex-col justify-end gap-3 opacity-90 text-white"
          style={{
            background:
              "linear-gradient(0deg, #090914 0%, rgba(189, 189, 190, 0) 98.51%)",
          }}
        >
          <div className="flex items-center gap-3">
            {card?.price && (
              <del className="font-montserrat md:text-base text-[14px] font-normal">
                {card?.currency} {formatCurrency(card?.price)}
              </del>
            )}
            <span className="font-montserrat md:text-base text-[14px] font-bold">
              {card?.currency} {formatCurrency(card?.amount)}
            </span>
          </div>

          <div>
            <div className="mt-1 grid md:grid-cols-[1fr_50px] grid-cols-[1fr_35px] items-center justify-between">
              <div className="flex flex-col gap-1">
                {card?.description && (
                  <h1 className="md:text-[15px] text-[13px] font-semibold font-poppins capitalize overflow-hidden">
                    {card?.description}
                  </h1>
                )}

                <div className="flex items-center gap-1">
                  <FaStar className="md:text-[17px] text-[15px]" />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>

              <button
                className="w-full md:h-[50px] h-[35px] md:rounded-[15px] rounded-[12px] bg-[#FFFFFF17] border border-white grid place-content-center"
                onClick={handleAddToCart}
              >
                <svg
                  className="md:w-[25px] w-[20px] md:h-[19px] h-[16px]"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.648 2.32586C24.573 2.23345 24.4785 2.15879 24.3713 2.10726C24.264 2.05572 24.1467 2.02859 24.0277 2.0278H7.25605L7.77967 3.63891H22.9724L20.8216 13.3056H8.73828L5.05689 1.64919C5.01707 1.5255 4.94792 1.41329 4.85534 1.32211C4.76276 1.23093 4.6495 1.16351 4.52522 1.12558L1.22244 0.110579C1.12089 0.0793717 1.01418 0.068473 0.908413 0.0785049C0.802645 0.0885369 0.699889 0.119303 0.606011 0.169047C0.416417 0.269509 0.274497 0.441173 0.211471 0.646273C0.148445 0.851374 0.169477 1.07311 0.269939 1.26271C0.370401 1.4523 0.542065 1.59422 0.747166 1.65725L3.63911 2.54336L7.33661 14.2239L6.0155 15.3034L5.91078 15.4081C5.58399 15.7847 5.39877 16.2634 5.387 16.7619C5.37524 17.2604 5.53768 17.7473 5.84633 18.1389C6.06589 18.4059 6.3449 18.6178 6.66102 18.7577C6.97715 18.8976 7.32162 18.9616 7.66689 18.9445H21.1116C21.3253 18.9445 21.5302 18.8596 21.6812 18.7085C21.8323 18.5575 21.9172 18.3526 21.9172 18.1389C21.9172 17.9253 21.8323 17.7204 21.6812 17.5693C21.5302 17.4182 21.3253 17.3334 21.1116 17.3334H7.538C7.44524 17.3302 7.35486 17.3032 7.2756 17.2549C7.19633 17.2066 7.13086 17.1386 7.08551 17.0577C7.04016 16.9767 7.01646 16.8854 7.0167 16.7925C7.01694 16.6997 7.04112 16.6085 7.08689 16.5278L9.02828 14.9167H21.4661C21.6523 14.9212 21.8343 14.8611 21.9812 14.7466C22.1281 14.632 22.2307 14.4701 22.2716 14.2884L24.8252 3.01058C24.8497 2.89048 24.8465 2.76638 24.8158 2.64773C24.7851 2.52907 24.7277 2.41899 24.648 2.32586Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </figcaption>
      </figure>

      {type === "fashion" ? (
        <DetailsModal
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
          productId={productId}
        />
      ) : (
        <ArtDetailsModal
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
          productId={productId}
        />
      )}
    </>
  );
}
