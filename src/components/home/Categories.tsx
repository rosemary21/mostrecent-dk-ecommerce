import { motion } from "framer-motion";


export default function Categories() {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:text-[30px] text-[20px] font-montserrat font-semibold text-center"
      >
        Your total solution <br /> to grow with Dkeralutive
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "60%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:text-[17px] text-[15px] text-center text-[#222222] mt-4 font-light"
      >
        Acquire high-value clients at a low cost, increase retention
        <br />
        and grow revenue through targeted referral and loyalty programs.
      </motion.p>
    </div>
  );
}
