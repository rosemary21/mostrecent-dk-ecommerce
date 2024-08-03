import { Carousel } from "antd";
import { ProductDescription } from "../../types/Response";

export default function DetailCarousel({
  product,
}: {
  product: ProductDescription | null;
}) {
  return (
    <Carousel
      className="w-full h-full"
      arrows
      infinite
      fade
      autoplay
      speed={1000}
      draggable
      autoplaySpeed={4000}
      nextArrow={
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="24"
            transform="matrix(-1 0 0 1 48 0)"
            fill="#E80E0F"
          />
          <path
            d="M21.9055 14L31.3333 23.4286L21.9055 32.8571L20.3333 31.2848L28.191 23.4286L20.3333 15.5712L21.9055 14Z"
            fill="white"
          />
        </svg>
      }
      prevArrow={
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#E80E0F" />
          <path
            d="M26.0948 14L16.667 23.4286L26.0948 32.8571L27.667 31.2848L19.8092 23.4286L27.667 15.5712L26.0948 14Z"
            fill="white"
          />
        </svg>
      }
    >
      {product?.imagesList?.map((image) => {
        if (image.imageUrl?.endsWith(".mp4")) {
          return (
            <video
              autoPlay
              muted
              controls
              src={image.imageUrl}
              className="w-full h-[300px]"
            >
              Your browser cannot play the video. Kindly upgrade
            </video>
          );
        } else {
          return (
            <img
              src={image.imageUrl}
              className="w-full h-[300px] object-contain"
            />
          );
        }
      })}
    </Carousel>
  );
}
