export default function MobileAppDownloadLink() {
  return (
    <span className="flex items-center gap-2 font-semibold">
      Download App
      <a
        href="https://expo.dev/accounts/dasimems2/projects/dkelucrative/builds/0d2b2c6b-0c8a-4e3a-8811-a52a367380f0"
        target="_blank"
        download
      >
        <img src="/assets/logo.png" height={35} width={35} />
      </a>
    </span>
  );
}
