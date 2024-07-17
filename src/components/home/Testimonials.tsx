import { motion } from "framer-motion";
import { testimonials } from "../../data/Home";

export default function Testimonials() {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 md:my-8 my-4 mx-auto py-4 px-2 overflow-hidden">
      {testimonials.map(({ id, name, position, testimonial }) => (
        <motion.div
          initial={{ opacity: 0, x: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ margin: "30px", once: true }}
          transition={{ duration: 1, delay: Number(`0.${id}`) }}
          key={id}
          className="w-full px-2 py-4 text-center flex flex-col items-center justify-center gap-2 shadow-md bg-white transition-all duration-500 hover:bg-[#ddd]"
        >
          <p className="md:text-[17px] text-[15px] font-medium text-[#090914]">
            {testimonial}
          </p>
          <h3 className="text-[#090914] font-bold">{name}</h3>
          <p className="text-[#71717A]">{position}</p>
        </motion.div>
      ))}
    </div>
  );
}
