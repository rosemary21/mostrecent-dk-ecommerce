import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { ROUTES } from "../../routes";
import { motion } from "framer-motion";

export default function ArtCraftCategories() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "30px" }}
        className="md:text-[32px] text-[24px] font-plusJakartaSans font-bold text-[#18181B]"
      >
        Select from our amazing categories
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "30px" }}
        className="md:text-base text-[14px] font-plusJakartaSans font-normal text-[#52525B]"
      >
        We delight in handcrafted designs and lovely painting that will beautify
        your interiors
      </motion.span>

      <div className="mt-5 w-full flex md:flex-row flex-col items-center gap-5">
        <div
          className="w-full rounded-md md:h-[300px] h-[250px] bg-cover bg-center bg-no-repeat flex flex-col items-start justify-end p-5 gap-5 "
          style={{
            background:
              "linear-gradient(0deg, #090914 0%, rgba(9, 9, 20, 0) 98.51%), url('/assets/art-cat-1.png')",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 1 }}
            className="md:text-[30px] text-[24px] text-white font-plusJakartaSans font-semibold"
          >
            HandCrafted Art Decoration
          </motion.h1>
          <div className="w-full grid grid-cols-[1fr_45px] gap-5 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "20px" }}
              className="md:text-base text-[14px] text-white"
            >
              Where handcrafted art meets blending paintings, drawings, and
              innovative decorative pieces seamlessly.
            </motion.p>
            <HashLink to={`/${ROUTES.wallPainting}`}>
              <button className="bg-[#FFFFFF17] border-2 border-white rounded-[14px] grid place-content-center text-[20px] w-[45px] h-[45px] text-white">
                <FaArrowRight />
              </button>
            </HashLink>
          </div>
        </div>

        <div
          className="w-full rounded-md md:h-[300px] h-[250px] bg-cover bg-center bg-no-repeat flex flex-col items-start justify-end p-5 gap-5"
          style={{
            background:
              "linear-gradient(0deg, #090914 0%, rgba(9, 9, 20, 0) 98.51%), url('/assets/art-cat-2.png')",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "30px" }}
            className="md:text-[30px] text-[24px] text-white font-plusJakartaSans font-semibold"
          >
            Paintings and Drawings
          </motion.h1>
          <div className="w-full grid grid-cols-[1fr_45px] gap-5 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "20px" }}
              className="md:text-base text-[14px] text-white"
            >
              Where handcrafted art meets blending paintings, drawings, and
              innovative decorative pieces seamlessly.
            </motion.p>
            <HashLink to={`/${ROUTES.wallPainting}`}>
              <button className="bg-[#FFFFFF17] border-2 border-white rounded-[14px] grid place-content-center text-[20px] w-[45px] h-[45px] text-white">
                <FaArrowRight />
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}
