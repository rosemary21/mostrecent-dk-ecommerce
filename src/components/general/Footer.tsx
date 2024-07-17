import { Link } from "react-router-dom";
import "./footer.css";
import { useFormik } from "formik";
import { object, string } from "yup";
import InputError from "../../utils/InputError";
import { ROUTES } from "../../routes";
import { NewsletterPayload } from "../../types/Payload";
import { suscribeToNewsletter } from "../../services/api/API";
import { useState } from "react";
import { dkSuccess } from "../../data";
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
        email: string()
          .email("This field must be a valid email")
          .required("Email is required"),
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
      <footer>
        <div className="footer-top">
          <div className="footer-col-1">
            <img src="/assets/logo.png" alt="logo" />
            <span>
              Dkeralutive gives you the blocks and components you <br />
              need to create a truly professional website.
            </span>
          </div>

          <div className="footer-col-2">
            <h4>Company</h4>
            <Link to={ROUTES.aboutUs}>About</Link>
            <Link to={ROUTES.fashionMen}>Fashion</Link>
            <Link to={ROUTES.artCraft}>Art & Craft</Link>
            <Link to={ROUTES.CaseStudy}>Dk Sort</Link>
          </div>

          <div className="footer-col-2">
            <h4>HELP</h4>
            <Link to={ROUTES.contactUs}>Contact Us</Link>
            <Link to={ROUTES.login} className="red">
              Login
            </Link>
            <Link to={ROUTES.terms}>Terms & Conditions</Link>
            <Link to={ROUTES.privacy}>Privacy Policy</Link>
          </div>

          <div className="footer-col-2 footer-col-3">
            <h4>NEWSLETTER</h4>
            <form id="footer-form" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start gap-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <InputError errorMessage={errors.email} />}
              </div>
              <button disabled={isValid === false || isSubmitting}>
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="copyright">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by
          Dkerulative
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
