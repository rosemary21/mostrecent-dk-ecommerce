import Footer from "../components/general/Footer";
import SoftwareAds from "../components/general/SoftwareAds";
import Testimonials from "../components/home/Testimonials";
import Main from "../components/software/Main";
import SoftwareCaseStudy from "../components/software/SoftwareCaseStudy";
import SoftwareServices from "../components/software/SoftwareServices";

export default function Software() {
  return (
    <div>
      <Main />
      <SoftwareServices />
      <SoftwareCaseStudy />
      <Testimonials />
      <SoftwareAds />
      <Footer />
    </div>
  );
}
