import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { homeNavs } from "../../data/Home";
import NavLink from "./NavLink";
import { Drawer } from "antd";
import isMobile from "../../utils/isMobile";

export default function HomeNavbar() {
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

        <div className="md:flex hidden items-center gap-5">
          {homeNavs.map((nav) => (
            <NavLink color="white" key={nav.id} {...nav} />
          ))}
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
          {homeNavs.map((nav) => (
            <NavLink color="black" key={nav.id} {...nav} />
          ))}
        </div>
      </Drawer>
    </>
  );
}
