export default function VideoAdvert() {
  return (
    <div className="w-full md:mt-[5rem] mt-4">
      <video
        src="/assets/fashion-video.mp4"
        className="md:h-[600px] w-full rounded-[20px]"
        autoPlay
        loop
        muted
      />
    </div>
  );
}
