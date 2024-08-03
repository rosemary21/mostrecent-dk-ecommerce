import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function SoftwareCaseStudy() {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/${ROUTES.CaseStudy}`);
  };
  return (
    <section
      id="case-study"
      className="flex md:flex-row flex-col items-start justify-between"
    >
      <div>
        <h1 className="md:w-[405px] w-[95%] md:h-[244px] h-fit font-poppins font-semibold lg:text-[38px] md:text-[32px] text-[26px] text-[#18181B]">
          See Creative Solutions we've created for our Customers
        </h1>
        <button
          onClick={handleRoute}
          className="md:w-[185px] w-full md:h-[50px] h-[40px] font-bold font-plusJakartaSans text-center text-white border-0 outline-0 bg-primary"
        >
          Our Portfolio
        </button>

        <img
          className="mt-4"
          src="/assets/strike-lines.svg"
          alt="StrikeLines"
        />

        <div className="flex items-center gap-6 mt-5">
          <div>
            <h2 className="md:text-[36px] text-[23px] font-bold font-plusJakartaSans text-[#18181B]">
              50k+
            </h2>
            <span className="md:text-[16px] text-[13px] font-normal font-plusJakartaSans text-[#71717A]">
              Artwork
            </span>
          </div>

          <div>
            <h2 className="md:text-[36px] text-[23px] font-bold font-plusJakartaSans text-[#18181B]">
              17k+
            </h2>
            <span className="md:text-[16px] text-[13px] font-normal font-plusJakartaSans text-[#71717A]">
              Artists
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-fit w-full flex items-center gap-5 md:mt-0 mt-5">
        <img
          src="/assets/dk_sort_1.jpg"
          alt="TechImg1"
          onClick={handleRoute}
          className="md:w-[300px] md:h-[500px] w-full h-[300px] rounded-[20px] cursor-pointer"
        />
        <img
          src="/assets/dk_sort_2.jpg"
          alt="TechImg2"
          onClick={handleRoute}
          className="md:w-[300px] md:h-[500px] w-full h-[300px] rounded-[20px] cursor-pointer"
        />
      </div>
    </section>
  );
}
