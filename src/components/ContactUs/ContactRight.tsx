import { useFormik } from "formik";
import { ContactUsPayload } from "../../types/Payload";
import { object, string } from "yup";
import { dkSuccess, ERRORS } from "../../data";
import { contactUs } from "../../services/api/API";
import SecondaryInput from "../general/SecondaryInput";
import { useState } from "react";
import InputError from "../../utils/InputError";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import getToken from "../../utils/getToken";
import { ROUTES } from "../../routes";
import openNotification from "../../utils/OpenNotification";

export default function ContactRight() {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors, values, isSubmitting, isValid } =
    useFormik<ContactUsPayload>({
      initialValues: {
        emailAddress: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNumber: "",
      },
      validationSchema: object().shape({
        emailAddress: string().email(ERRORS.email).required(ERRORS.required),
        firstName: string().required(ERRORS.required),
        lastName: string().required(ERRORS.required),
        message: string().required(ERRORS.required),
        phoneNumber: string()
          .matches(/^[0-9]*$/, ERRORS.digits)
          .required(ERRORS.required),
      }),
      onSubmit: async (
        { emailAddress, firstName, lastName, message, phoneNumber },
        { resetForm, setSubmitting }
      ) => {
        const token = getToken();
        if (!token) {
          resetForm();
          navigate(`/${ROUTES.login}`);
          openNotification(
            "warning",
            "Kindly login or create an account to send a message"
          );
        } else {
          const payload: ContactUsPayload = {
            emailAddress,
            firstName,
            lastName,
            message,
            phoneNumber,
          };
          const data = await contactUs(payload);
          if (data?.responseDto?.code === dkSuccess) {
            setSubmitting(false);
            resetForm();
          }
        }
      },
    });

  return (
    <div>
      <Spin spinning={isSubmitting}>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-end gap-2 overflow-hidden"
        >
          <div className="w-full flex items-center gap-3">
            <SecondaryInput
              autoFocus
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              label="First Name"
              placeholder="Enter First Name"
              error={errors.firstName}
            />
            <SecondaryInput
              autoFocus
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              label="Last Name"
              placeholder="Enter Last Name"
              error={errors.lastName}
            />
          </div>

          <SecondaryInput
            autoFocus
            id="emailAddress"
            name="emailAddress"
            onChange={handleChange}
            value={values.emailAddress}
            label="Email Address"
            placeholder="Enter Email Address"
            error={errors.emailAddress}
          />

          <SecondaryInput
            autoFocus
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            value={values.phoneNumber}
            label="Phone Number"
            placeholder="Enter Phone Number"
            error={errors.phoneNumber}
          />

          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-[13px] font-plusJakartaSans font-semibold text-black"
            >
              Message
            </label>
            <textarea
              placeholder="Enter message"
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              title="Enter your message"
              className="w-full bg-white p-3 border border-[#d0d5dd] outline-0 transition-all duration-500 rounded-[8px] placeholder:text-slate-500 text-black text-[14px] font-normal font-poppins resize-none"
              rows={5}
            />
            {errors.message && <InputError errorMessage={errors.message} />}
          </div>

          <div className="w-full flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              required
              title="This field must be checked before submitting the form"
              className="accent-primary"
            />
            <label
              htmlFor="checkbox"
              className="text-[12px] font-semibold font-poppins"
            >
              You agree to our friendly privacy policy.
            </label>
          </div>

          <button
            disabled={isChecked === false || isValid === false || isSubmitting}
            className="w-full h-[45px] bg-primary text-white text-[13px] font-semibold font-plusJakartaSans"
          >
            Send message
          </button>
        </form>
      </Spin>
    </div>
  );
}
