import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import InputError from "../../utils/InputError";
import { ROUTES } from "../../routes";
import { NewsletterPayload } from "../../types/Payload";
import { suscribeToNewsletter } from "../../services/api/API";
import { useState } from "react";
import { dkSuccess, ERRORS } from "../../data";
import Newsletter from "../modals/Newsletter";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const { handleChange, handleSubmit, values, isSubmitting, isValid, errors } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: object().shape({
        email: string().email(ERRORS.email).required(ERRORS.required),
      }),
      onSubmit: async ({ email }, { resetForm, setSubmitting }) => {
        const payload: NewsletterPayload = {
          emailAddress: email,
        };

        const response = await suscribeToNewsletter(payload);
        if (response?.responseDto?.code === dkSuccess) {
          setMessage(response?.responseDto?.message);
          showModal();
        }
        setSubmitting(false);
        resetForm();
      },
    });

  return (
    <>
      <footer className="w-screen md:p-[50px] p-[35px] bg-[#f8fafc] flex flex-col gap-6 overflow-hidden">
        <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-5">
          <div className="w-full flex flex-col md:items-start items-center gap-5 md:text-left text-center">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="md:w-[82px] w-[58px]"
            />
            <p className="md:text-base text-[14px] font-poppins text-[#71717a] font-normal">
              Dkeralutive gives you the blocks and components you need to create
              a truly professional website.
            </p>
          </div>

          <div className="w-full flex flex-col md:items-start items-center gap-5 md:text-left text-center">
            <h4 className="font-poppins text-[13px] text-[#94A3B8] tracking-[1px] font-semibold uppercase">
              Company
            </h4>
            <Link
              to={`/${ROUTES.aboutUs}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              About
            </Link>
            <Link
              to={`/${ROUTES.fashionMen}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Fashion
            </Link>
            <Link
              to={`/${ROUTES.artCraft}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Art & Craft
            </Link>
            <Link
              to={`/${ROUTES.CaseStudy}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Dk Sort
            </Link>
          </div>

          <div className="w-full flex flex-col md:items-start items-center gap-5 md:text-left text-center">
            <h4 className="font-poppins text-[13px] text-[#94A3B8] tracking-[1px] font-semibold uppercase">
              HELP
            </h4>
            <Link
              to={`/${ROUTES.contactUs}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Contact Us
            </Link>
            <Link
              to={`/${ROUTES.login}`}
              className="md:text-[17px] text-[15px] text-primary font-poppins font-medium"
            >
              Login
            </Link>
            <Link
              to={`/${ROUTES.terms}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              to={`/${ROUTES.privacy}`}
              className="md:text-[17px] text-[15px] font-poppins font-medium"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="w-full flex flex-col md:items-start items-center gap-5 md:text-left text-center">
            <h4 className="font-poppins text-[13px] text-[#94A3B8] tracking-[1px] font-semibold uppercase">
              NEWSLETTER
            </h4>
            <form
              className="w-full flex flex-col md:items-start items-center gap-5"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-col items-start gap-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full md:h-[55px] h-[40px] border ${
                    errors.email ? "border-primary" : "border-[#e4e4e7]"
                  } bg-white rounded-[10px] px-2 font-normal text-base text-black outline-0`}
                />
                {errors.email && <InputError errorMessage={errors.email} />}
              </div>
              <button
                disabled={isValid === false || isSubmitting}
                className="w-full bg-primary md:h-[50px] h-[40px] text-white text-[14px]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="w-full flex items-center justify-center pt-5">
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            <span className="font-semibold"> Dkeralutive</span>
          </p>
        </div>
      </footer>

      <Newsletter
        hideModal={hideModal}
        isModalOpen={isModalOpen}
        message={message}
        showModal={showModal}
      />
    </>
  );
}
