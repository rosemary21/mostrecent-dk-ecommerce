import Features from "./Featuers";
import VideoAdvert from "./VideoAdvert";
import Categories from "./Categories";
import Testimonials from "./Testimonials";

export default function ContentSection() {
  return (
    <section>
      <Categories />
      <Features />
      <VideoAdvert />
      <Testimonials />
    </section>
  );
}
