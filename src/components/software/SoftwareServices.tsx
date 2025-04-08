import { Link } from "react-router-dom";
import { ourServices } from "../../data";

export default function SoftwareServices() {
  return (
    <section id="software-services">
      <h1 className="text-center text-[#18181B] font-plusJakartaSans font-bold md:text-[35px] text-[22px]">
        Our Services
      </h1>
      <p className="text-center text-[#52525B] font-plusJakartaSans font-normal md:text-[18px] text-[15px]">
        Below are the services we render...
      </p>

      <div className="mt-12 grid md:grid-cols-2 grid-cols-1">
        {ourServices.map((service) => (
          <Link
            key={service.id}
            className="p-5 flex flex-col items-center border border-[#E4E4E7] gap-[10px]"
            to={service.link}
          >
            <img
              className="md:w-[49px] w-[35px] md:h-[49px] h-[35px]"
              src={service.icon}
              alt={service.title.toLowerCase()}
            />
            <h2>{service.title}</h2>
            <p>{service.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
