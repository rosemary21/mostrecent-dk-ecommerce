import Footer from "../components/general/Footer";
import SoftwareAds from "../components/general/SoftwareAds";
import ContentSection from "../components/home/ContentSection";
import Main from "../components/home/Main";
import AdSlider from "../components/home/Slider";

export default function Home() {
  return (
    <>
      <Main />
      <ContentSection />
      <AdSlider />
      <SoftwareAds />
      <Footer />
    </>
  );
}
