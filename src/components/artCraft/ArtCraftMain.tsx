import { motion } from "framer-motion";
import ArtCraftNavbar from "./ArtCraftNavbar";

export default function ArtCraftMain() {
  return (
    <main className="w-screen h-screen">
      <ArtCraftNavbar />
      <div className="w-full h-[90vh] mt-[10vh] bg-artCraftBg bg-fixed bg-center bg-cover bg-no-repeat grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-5 lg:px-[60px] md:px-[45px] px-[20px]">
        <div className="flex flex-col gap-4 overflow-hidden">
          <motion.h2
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1 }}
            className="font-plusJakartaSans font-bold text-white lg:text-[38px] md:text-[30px] text-[22px]"
          >
            Unique Wall Paintings, Handcrafted Decor & Paintings
          </motion.h2>
          <motion.p
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-base text-[14px] text-[#D4D4D8] font-normal font-plusJakartaSans"
          >
            Explore our collection of unique wall paintings and handcrafted
            decorations, perfect for adding a touch of elegance and creativity
            to your home.
          </motion.p>
          <form
            className="md:w-4/5 w-[94%] overflow-hidden"
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
        <div className="w-full md:flex hidden flex-col items-end gap-1 overflow-hidden">
          <motion.img
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1 }}
            src="/assets/beetle-king.png"
            alt="beetle-img"
            className="w-[206px] h-[251px]"
          />
          <motion.h2
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-semibold text-[18px] text-white"
          >
            Beetle King Art Work
          </motion.h2>
          <motion.button
            animate={{ opacity: [0, 1], y: ["100%", "0"] }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-[206px] h-[50px] font-semibold rounded-md border-2 border-white outline-0 text-white"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </main>
  );
}

{
  /* <form
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
</form>; */
}
