import Carousel, { ResponsiveType } from "react-multi-carousel";

export default function AdSlider() {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 90,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 60,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className="h-[240px] w-screen"
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      <img
        src="/assets/slide-1.png"
        alt="slider-1"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-2.png"
        alt="slider-2"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-3.png"
        alt="slider-3"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-4.png"
        alt="slider-4"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-5.png"
        alt="slider-5"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-6.png"
        alt="slider-6"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-7.png"
        alt="slider-7"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-8.png"
        alt="slider-8"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-9.png"
        alt="slider-9"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-10.png"
        alt="slider-10"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-11.png"
        alt="slider-11"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-12.png"
        alt="slider-12"
        className="h-[240px] w-full object-cover"
      />
      <img
        src="/assets/slide-13.png"
        alt="slider-13"
        className="h-[240px] w-full object-cover"
      />
    </Carousel>
  );
}
