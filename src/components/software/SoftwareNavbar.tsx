import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Drawer } from "antd";
import isMobile from "../../utils/isMobile";
import { ROUTES } from "../../routes";
import { HashLink } from "react-router-hash-link";

export default function SoftwareNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full h-[10vh] flex items-center justify-between lg:px-[60px] md:px-[45px] px-[20px] overflow-hidden`}
      >
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

        <FaBars
          className="cursor-pointer text-white text-[20px] transition-all duration-500 hover:text-primary md:hidden flex"
          onClick={() => setIsOpen(true)}
        />

        <div className="md:flex hidden items-center gap-5 text-white">
          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`/${ROUTES.software}`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HashLink
              to={`/${ROUTES.software}#case-study`}
              smooth
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Case Study
            </HashLink>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HashLink
              to={`/${ROUTES.software}#software-services`}
              smooth
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Services
            </HashLink>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`https://latest-dk-property.vercel.app`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Products
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`/${ROUTES.contactUs}`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
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
        <div className="flex flex-col items-start gap-5">
          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`/${ROUTES.software}`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HashLink
              to={`/${ROUTES.software}#case-study`}
              smooth
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Case Study
            </HashLink>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HashLink
              to={`/${ROUTES.software}#software-services`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Services
            </HashLink>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`https://latest-dk-property.vercel.app`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Products
            </Link>
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to={`/${ROUTES.contactUs}`}
              className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat`}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </Drawer>
    </>
  );
}
