import { motion } from "framer-motion";
import MobileAppDownloadLink from "../general/MobileAppDownloadLink";
import SoftwareNavbar from "./SoftwareNavbar";

export default function Main() {
  return (
    <main className="w-screen h-screen bg-[url('/assets/dk_sort_bg.jpg')] bg-fixed bg-center bg-cover bg-no-repeat">
      <SoftwareNavbar />

      <div className="w-full h-[90vh] md:px-[70px] px-[20px] py-0 flex flex-col items-start justify-center gap-6 overflow-hidden bg-gradient-to-r from-[transparent] to-[#00000030] bg-opacity-50">
        <div className="w-full flex items-center justify-between gap-5 overflow-hidden">
          {/* <motion.img
            animate={{ opacity: [0, 1], x: ["-100%", "0"] }}
            transition={{ duration: 1 }}
            className="lg:w-[630px] lg:h-[125px] md:w-[520px] md:h-[100px] w-full h-[73px]"
            src="/assets/technology.png"
            alt="technology-background"
          /> */}
          <div />
          <motion.img
            animate={{ opacity: [0, 1], x: ["100%", "0"] }}
            transition={{ duration: 1 }}
            className="md:flex hidden animate-spin-slow"
            src="/assets/round-logo.png"
            alt="company-name-round"
          />
        </div>

        <motion.div
          animate={{ opacity: [0, 1], x: ["-100%", "0"] }}
          transition={{ duration: 1 }}
          className="md:w-[550px] w-full flex items-center gap-5 overflow-hidden"
        >
          <div className="md:w-[170px] w-[130px] relative overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full border border-primary md:p-3 p-2"
              src="/assets/red-round.png"
              alt="play-icon"
            />
            <img
              className="play-vector"
              src="/assets/play-vector.png"
              alt="play-vector"
            />
          </div>

          <div className="text-black overflow-hidden">
            <p className="font-montserrat md:text-[18px] text-[15px] font-semibold">
              DK Sort mobile app is an app that deals with the purchase of
              airtime, data, DSTV, Cable, e.t.c.
            </p>{" "}
            <br />
            <MobileAppDownloadLink />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
