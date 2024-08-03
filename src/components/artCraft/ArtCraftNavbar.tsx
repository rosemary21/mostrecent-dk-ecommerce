import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "/assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Drawer, Tooltip } from "antd";
import { useCartContext } from "../../contexts/CartContext";
import { artCraftNavs } from "../../data";
import { ROUTES } from "../../routes";
import isMobile from "../../utils/isMobile";

export default function ArtCraftNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname.split("/")[1];

  const { cartCount, cartControls } = useCartContext();

  return (
    <>
      <nav className="w-screen h-[10vh] fixed top-0 left-0 z-[500] shadow-md flex items-center justify-between lg:px-[60px] md:px-[45px] px-[20px] overflow-hidden bg-white">
        <motion.div
          animate={{ opacity: [0, 1], x: ["-100%", "30%", "0"] }}
          transition={{ duration: 0.8, ease: "circInOut" }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="lg:w-[52px] md:w-[45px] w-[35px] cursor-pointer"
            />
          </Link>
        </motion.div>

        <div className="md:flex hidden items-center gap-5">
          {artCraftNavs.map(({ id, link, path, text }) => (
            <motion.div
              animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
              transition={{ duration: 0.8, delay: Number(`0.${id}`) }}
              key={id}
            >
              <Link
                to={`/${link}`}
                className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat ${
                  pathname.toLowerCase() === path.toLowerCase()
                    ? "text-primary font-bold"
                    : `text-[#606068] hover:text-primary`
                }`}
              >
                {text}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-7 relative overflow-visible">
          <Link to={`/${ROUTES.login}`}>
            <img
              src="/assets/user-icon.svg"
              alt="user icon"
              className="cursor-pointer w-[19px] h-[20px]"
              title="Login or Create account"
            />
          </Link>

          <Link to={`#`}>
            <Tooltip title="WishList Coming soon">
              <img
                src="/assets/heart.svg"
                alt="user icon"
                className="cursor-pointer w-[19px] h-[20px]"
              />
            </Tooltip>
          </Link>

          <Link to={`/${ROUTES.cart}`}>
            <img
              src="/assets/cart-icon.svg"
              alt="cart icon"
              className="cursor-pointer w-[19px] h-[20px]"
              title="Cart"
            />
            <motion.span
              animate={cartControls}
              initial={{
                backgroundColor: "#5754FF",
                scale: 1,
                shadow: "4px 7px 7px rgb(173 59 246 / 50%)",
              }}
              transition={{ duration: 1, ease: "backInOut" }}
              className="absolute -top-[10px] -right-[12px] w-[22px] h-[22px] bg-[#5754FF] rounded-full font-medium text-center text-[13px] text-white grid place-content-center"
            >
              {cartCount()}
            </motion.span>
          </Link>
        </div>

        <FaBars
          className="cursor-pointer text-[#71717A] text-[20px] transition-all duration-500 hover:text-primary md:hidden flex"
          onClick={() => setIsOpen(true)}
        />
      </nav>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        width={isMobile() ? "60%" : "500px"}
        placement="right"
        closeIcon={null}
        title={null}
        destroyOnClose={true}
      >
        <div className="flex flex-col gap-5">
          {artCraftNavs.map(({ id, link, path, text }) => (
            <motion.div
              animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
              transition={{ duration: 0.8, delay: Number(`0.${id}`) }}
              key={id}
            >
              <Link
                to={`/${link}`}
                className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat ${
                  pathname.toLowerCase() === path.toLowerCase()
                    ? "text-primary font-bold"
                    : `text-[#606068] hover:text-primary`
                }`}
              >
                {text}
              </Link>
            </motion.div>
          ))}
        </div>
      </Drawer>
    </>
  );
}
