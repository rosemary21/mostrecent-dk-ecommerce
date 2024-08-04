import { motion } from "framer-motion";
import { contents } from "../../data/Home";
import MobileAppDownloadLink from "./MobileAppDownloadLink";

export default function SoftwareAds() {
  return (
    <section>
      <div className="w-full grid md:grid-cols-[500px_600px] grid-cols-1 items-start justify-between gap-6 my-8">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          viewport={{ margin: "35px", once: true }}
          className="flex flex-col items-start gap-3"
        >
          <div className="md:text-[32px] text-[24px] font-bold font-plusJakartaSans">
            We teach devs how to write better content.
          </div>
          <MobileAppDownloadLink />
        </motion.div>

        <div className="flex md:flex-row flex-col items-start gap-5 justify-between py-4 px-2">
          {contents.map(({ date, id, imageUrl, title }) => (
            <div
              key={id}
              className="bg-white h-[360px] md:w-[300px] w-full rounded-[15px] transition-all duration-500 hover:shadow-lg shadow-sm"
            >
              <div className="w-full h-1/2 rounded-t-[15px] overflow-hidden">
                <img
                  src={imageUrl}
                  alt={`content-${id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-1/2 p-4 flex flex-col items-start justify-between">
                <h1 className="font-bold font-plusJakartaSans md:text-[18px] text-[15px] text-[#18181B]">
                  {title}
                </h1>
                <p className="text-[#52525B] text-[14px] font-normal font-plusJakartaSans">
                  {date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
