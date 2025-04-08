import { Link, useNavigate } from "react-router-dom";

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
}
export default function FashionCategoryCard({ imageUrl, link, title }: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="bg-cover bg-center bg-no-repeat w-full h-[229px] flex flex-col items-start justify-between md:py-[40px] md:px-[25px] py-[35px] px-[20px] cursor-pointer"
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      <div>
        <h1 className="font-plusJakartaSans font-bold md:text-[18px] text-[15px] text-[#18181b]">
          {title}
        </h1>
      </div>

      <Link
        to={`/${link}`}
        className="font-plusJakartaSans font-medium border border-white outline-0 text-[14px] text-[] bg-[#ffffff17] backdrop-blur-md rounded-[5px] py-[10px] px-4"
      >
        Shop Now
      </Link>
    </div>
  );
}
