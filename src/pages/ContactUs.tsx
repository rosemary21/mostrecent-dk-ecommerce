import ArtCraftNavbar from "../components/artCraft/ArtCraftNavbar";
import ContactLeft from "../components/ContactUs/ContactLeft";
import ContactRight from "../components/ContactUs/ContactRight";
import Footer from "../components/general/Footer";

export default function ContactUs() {
  return (
    <>
      <ArtCraftNavbar />
      <section className="md:h-[100vh] h-fit overflow-hidden grid md:grid-cols-2 grid-cols-1 gap-7 items-start pt-5">
        <ContactLeft />
        <ContactRight />
      </section>
      <Footer />
    </>
  );
}
