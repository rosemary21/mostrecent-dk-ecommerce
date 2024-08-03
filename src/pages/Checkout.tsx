import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ArtCraftNavbar from "../components/artCraft/ArtCraftNavbar";
import CheckoutLeft from "../components/checkout/CheckoutLeft";
import CheckoutRight from "../components/checkout/CheckoutRight";
import Footer from "../components/general/Footer";
import { useEffect, useState } from "react";
import { getLocalData } from "../utils/localData";
import { LoginResponseProps } from "../types/Response";

export default function Checkout() {
  const [userDetails, setUserDetails] = useState<LoginResponseProps | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    const data = getLocalData<LoginResponseProps>("user-details");
    if (!data) return;
    setUserDetails(data);
  }, []);

  console.log("first");

  return (
    <>
      <ArtCraftNavbar />
      <div className="md:w-4/5 w-[95%] mx-auto md:mt-[15vh] mb-[30px] my-[18vh] ">
        <div className="w-full flex items-center justify-between">
          <FaChevronLeft
            size={20}
            onClick={() => navigate(-1)}
            className="cursor-pointer transition-all duration-500 hover:text-primary"
          />
          <p className="md:text-[22px] text-[18px] font-bold text-black">
            Checkout
          </p>
          <div />
        </div>

        {userDetails?.emailAddress && (
          <p className="text-[14px] font-medium text-muted text-center">
            You are logged in as {userDetails.emailAddress}
          </p>
        )}

        <div className="mt-8 w-full flex md:flex-row flex-col items-start justify-between gap-6 my-6">
          <CheckoutLeft userDetails={userDetails} />
          <CheckoutRight />
        </div>
      </div>
      <Footer />
    </>
  );
}
