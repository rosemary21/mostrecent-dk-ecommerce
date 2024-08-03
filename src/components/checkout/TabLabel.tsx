import { MutableRefObject } from "react";

interface Props {
  title: string;
  ref?: MutableRefObject<HTMLParagraphElement | null>;
}

const TabLabel = ({ title, ref }: Props) => {
  return (
    <p
      ref={ref}
      className="font-poppins font-medium md:text-base text-[#46312A] border-b-2 border-black cursor-pointer overflow-hidden"
    >
      {title}
    </p>
  );
};

export default TabLabel;
