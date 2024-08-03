import isMobile from "../../utils/isMobile";
import SoftwareNavbar from "../software/SoftwareNavbar";
import styles from "./CaseStudyMain.module.css";

export default function CaseStudyMain() {
  return (
    <main
      className={`${
        isMobile() ? styles.caseStudyMainMobile : styles.caseStudyMain
      }`}
    >
      <SoftwareNavbar />
      <div
        className={`w-full h-[90vh] flex flex-col justify-end pb-16 font-poppins ${
          isMobile() ? "px-[20px]" : "md:px-[45px]"
        }`}
      >
        <p className="font-bold md:text-[19px] text-[16px] text-white font-plusJakartaSans">
          DKerulative — DK Sort App
        </p>
        <p className="text-white text-[13px] md:text-[16px] font-plusJakartaSans">
          April 14, 2024
        </p>
      </div>
    </main>
  );
}
