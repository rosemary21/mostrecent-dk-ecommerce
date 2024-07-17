import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  link: string;
  text: string;
  path: string;
  color: string;
  id: number;
}

export default function NavLink({ link, text, path, color, id }: Props) {
  const pathname = useLocation().pathname.split("/")[0];
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: ["100%", "-30%", "0"] }}
      transition={{ duration: 0.8, delay: Number(`0.${id}`) }}
    >
      <Link
        to={link}
        className={`lg:text-[15px] md:text-[14px] text-[12px] font-montserrat ${
          pathname.toLowerCase() === path.toLowerCase()
            ? "text-primary font-bold"
            : `text-${color} hover:text-primary`
        }`}
      >
        {text}
      </Link>
    </motion.div>
  );
}
