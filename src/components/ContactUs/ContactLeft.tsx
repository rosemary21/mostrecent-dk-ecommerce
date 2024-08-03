import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactLeft() {
  return (
    <div className="w-full">
      <h5 className="text-center text-primary font-bold text-[15px]">
        Contact us
      </h5>
      <h1 className="text-center text-black font-bold text-[19px]">
        Get in touch
      </h1>
      <p className="text-center text-slate-500 font-normal text-[13px]">
        We'd love to hear how we can leverage the internet to solving your
        problems. Please fill out this form.
      </p>

      <div className="w-full grid grid-cols-2 gap-5 mt-7">
        <div className="flex flex-col items-start justify-between w-full h-[90px]">
          <img src="/assets/logo.png" alt="logo" width={40} height={40} />
          <h3 className="md:text-[16px] text-[13px] font-plusJakartaSans font-extrabold overflow-hidden">
            ADDRESS
          </h3>
          <span className="text-left font-plusJakartaSans text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden">
            5 shobande street akoka bariga
          </span>
        </div>

        <div className="flex flex-col items-start justify-between w-full h-[90px]">
          <FaPhoneAlt size={25} />
          <h3 className="md:text-[16px] text-[13px] font-plusJakartaSans font-extrabold overflow-hidden">
            PHONE NUMBER
          </h3>
          <a
            href="tel:08169696443"
            className="text-left font-plusJakartaSans text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
          >
            08169696443
          </a>
        </div>

        <div className="flex flex-col items-start justify-between w-full h-[90px]">
          <CgWebsite size={25} />
          <h3 className="md:text-[16px] text-[13px] font-plusJakartaSans font-extrabold overflow-hidden">
            WEBSITE
          </h3>
          <a
            href="http://dkerulative.com.ng/"
            className="text-left font-plusJakartaSans text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
            target="_blank"
          >
            http://dkerulative.com.ng
          </a>
        </div>

        <div className="flex flex-col items-start justify-between w-full h-[90px]">
          <MdAlternateEmail size={25} />
          <h3 className="md:text-[16px] text-[13px] font-plusJakartaSans font-extrabold overflow-hidden">
            EMAIL
          </h3>
          <a
            href="mailto:tech@dkeralutive.com"
            className="text-left font-plusJakartaSans text-capitalize text-slate-500 md:text-base text-[13px] overflow-hidden"
          >
            tech@dkeralutive.com
          </a>
        </div>
      </div>
    </div>
  );
}
