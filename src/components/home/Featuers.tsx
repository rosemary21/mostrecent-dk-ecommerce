import { features } from "../../data/Home";

export default function Features() {
  return (
    <div className="w-full h-fit py-5 grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-9 mt-5">
      {features.map(({ id, image, subtitle, title }) => (
        <div
          className="w-full h-fit bg-white rounded-[14px] flex items-start justify-between gap-4 px-4 py-5 transition-all duration-500 hover:bg-[#ddd] hover:border-[#131313] shadow-lg hover:-translate-y-2"
          key={id}
        >
          <img src={image} alt="features icon" />
          <div className="flex flex-col items-start basis-[78%]">
            <h1 className="font-montserrat md:text-[24px] text-[18px] font-semibold">
              {title}
            </h1>
            <p className="font-poppins md:text-[14px] text-[12px] text-[#888888]">
              {subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
