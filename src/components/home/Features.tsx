import { motion } from "framer-motion";
import { features } from "../../data/Home";

export default function Features() {
  return (
    <div className="w-full h-fit py-5 grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-9 mt-5 overflow-hidden">
      {features.map(({ id, image, subtitle, title, link }) => (
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0" }}
          href={link}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-fit bg-white rounded-[14px] flex items-start justify-between gap-4 px-4 py-5 transition-all duration-500 hover:bg-[#ddd] hover:border-[#131313] shadow-lg hover:-translate-y-2 cursor-pointer"
          key={id}
        >
          <img src={image} alt="features icon" />
          <div className="flex flex-col items-start basis-[78%]">
            <h1 className="font-montserrat md:text-[24px] text-[18px] font-semibold">
              {title}
            </h1>
            <p className="font-poppins md:text-[14px] text-[12px] text-muted">
              {subtitle}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
