import FashionNavbar from "./FashionNavbar";
import { motion } from "framer-motion";

export default function FashionMain() {
  return (
    <main className="w-screen h-screen">
      <FashionNavbar />
      <div className="w-full h-[90vh] mt-[10vh] bg-fashionBg bg-fixed bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5">
        <div className="md:w-[600px] w-[95%] flex flex-col gap-5 items-center">
          <motion.h1
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1 }}
            className="md:text-[42px] text-[30px] font-plusJakartaSans font-bold text-center text-white"
          >
            Find the best High <br />
            Quality outfit in one tap
          </motion.h1>
          <motion.p
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-[17px] text-[15px] text-[#d4d4d8] font-plusJakartaSans text-center"
          >
            We have a wide range of products that serves various Demographic{" "}
            <br />
            groups and markets. Our product Range are Trendy and always On point
          </motion.p>

          <form
            className="md:w-4/5 w-[94%] mx-auto overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              className="rounded-t-md py-[17px] px-4 gap-3 w-full h-[45px] bg-white shadow-md overflow-hidden grid grid-cols-[25px_1fr] items-center"
              animate={{ opacity: [0, 1], y: ["100%", "0"] }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img src="/assets/search.svg" className="w-[20px]" />
              <input
                type="search"
                placeholder="Try joggers, Polo, T-shirts etc..."
                className="text-[16px] placeholder:text-[#71717A] text-black border-0 outline-0 font-plusJakartaSans"
              />
            </motion.div>
            <motion.button
              animate={{ opacity: [0, 1], y: ["100%", "0"] }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full h-[45px] border-0 outline-0 bg-primary text-white text-[14px] uppercase font-medium font-plusJakartaSans text-center tracking-[2px] rounded-b-md"
            >
              Search now
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}
