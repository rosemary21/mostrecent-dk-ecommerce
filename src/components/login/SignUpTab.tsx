import { useFormik } from "formik";
import { object, ref, string } from "yup";
import { dkSuccess, ERRORS } from "../../data";
import { SignUpPayload } from "../../types/Payload";
import { signUp } from "../../services/api/API";
import { LoginTabProps } from "../../pages/Login";
import { Spin } from "antd";
import PrimaryInput from "../general/PrimaryInput";
import { Dispatch, SetStateAction, useState } from "react";
import InputError from "../../utils/InputError";

interface Props {
  setTab: React.Dispatch<React.SetStateAction<LoginTabProps>>;
}

export default function SignUpTab({ setTab }: Props) {
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");

  const toggleType = (
    type: string,
    setType: Dispatch<SetStateAction<string>>
  ) => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const { values, handleSubmit, handleChange, errors, isSubmitting, isValid } =
    useFormik<SignUpPayload>({
      initialValues: {
        confirmPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        userName: "",
        userType: "fashion",
      },
      validationSchema: object().shape({
        confirmPassword: string()
          .trim()
          .oneOf([ref("password")], "Passwords must match"),
        email: string().trim().email(ERRORS.email).required(ERRORS.required),
        firstName: string().required(ERRORS.required),
        lastName: string().required(ERRORS.required),
        password: string()
          .min(6, "Password must be minimum of six characters")
          .trim()
          .required(ERRORS.required),
        userName: string().required(ERRORS.required),
        userType: string(),
      }),
      onSubmit: async (
        {
          confirmPassword,
          email,
          firstName,
          lastName,
          password,
          userName,
          userType,
        },
        { resetForm, setSubmitting }
      ) => {
        const payload: SignUpPayload = {
          password,
          userName,
          confirmPassword,
          email,
          firstName,
          lastName,
          userType,
        };
        const data = await signUp(payload);
        if (data?.responseDto?.code === dkSuccess) {
          setTab("login");
          resetForm();
          setSubmitting(false);
        }
      },
    });
  return (
    <div className="overflow-hidden">
      <p className="text-[#888888] text-[14px] font-medium text-center">
        Create an Account
      </p>

      <Spin spinning={isSubmitting}>
        <form onSubmit={handleSubmit} className="overflow-hidden">
          <PrimaryInput
            autoFocus
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            placeholder="Enter FirstName"
            error={errors.firstName}
          />

          <PrimaryInput
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            placeholder="Enter LastName"
            error={errors.lastName}
          />

          <PrimaryInput
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Enter Email"
            error={errors.email}
          />

          <PrimaryInput
            id="userName"
            name="userName"
            onChange={handleChange}
            value={values.userName}
            placeholder="Enter Preferred UserName"
            error={errors.userName}
          />

          <div>
            <div className="w-full border-b border-[#d0d5dd] grid grid-cols-[1fr_40px] items-center">
              <input
                className="w-full h-[40px] bg-white border-0 outline-0 transition-all duration-500 rounded-none placeholder:text-muted text-black text-[14px] font-normal font-poppins"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter password"
                type={type1}
              />
              <span
                className="text-[12px] text-[#888888] transition-all duration-500 hover:text-primary cursor-pointer"
                onClick={() => toggleType(type1, setType1)}
              >
                {type1 === "password" ? "SHOW" : "HIDE"}
              </span>
            </div>
            {errors.password && <InputError errorMessage={errors.password} />}
          </div>

          <div>
            <div className="w-full border-b border-[#d0d5dd] grid grid-cols-[1fr_40px] items-center">
              <input
                className="w-full h-[40px] bg-white border-0 outline-0 transition-all duration-500 rounded-none placeholder:text-muted text-black text-[14px] font-normal font-poppins"
                value={values.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm Password"
                type={type2}
              />
              <span
                className="text-[12px] text-[#888888] transition-all duration-500 hover:text-primary cursor-pointer"
                onClick={() => toggleType(type2, setType2)}
              >
                {type2 === "password" ? "SHOW" : "HIDE"}
              </span>
            </div>
            {errors.password && <InputError errorMessage={errors.password} />}
          </div>

          <button
            disabled={isValid === false || isSubmitting}
            className="w-full bg-primary text-white border-0 outline-0 h-[40px] mt-4 font-medium"
          >
            SIGN UP
          </button>
        </form>
      </Spin>
    </div>
  );
}
