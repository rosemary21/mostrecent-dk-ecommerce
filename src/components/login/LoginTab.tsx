import { useFormik } from "formik";
import PrimaryInput from "../general/PrimaryInput";
import { object, string } from "yup";
import { dkSuccess, ERRORS } from "../../data";
import { useState } from "react";
import InputError from "../../utils/InputError";
import { login } from "../../services/api/API";
import { LoginPayload } from "../../types/Payload";
import { useNavigate } from "react-router-dom";
import { setLocalData } from "../../utils/localData";
import { LoginResponseProps } from "../../types/Response";
import { Spin } from "antd";
import { useCartContext } from "../../contexts/CartContext";

export default function LoginTab() {
  const [type, setType] = useState("password");
  const { setIsLoggedIn } = useCartContext();

  const navigate = useNavigate();

  const toggleType = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const { values, handleSubmit, handleChange, errors, isSubmitting, isValid } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: object().shape({
        userName: string().trim().email(ERRORS.email).required(ERRORS.required),
        password: string()
          .min(6, "Password must be minimum of six characters")
          .trim()
          .required(ERRORS.required),
      }),
      onSubmit: async (
        { password, userName },
        { resetForm, setSubmitting }
      ) => {
        const payload: LoginPayload = {
          password,
          userName,
        };
        const data = await login(payload);
        if (data?.responseDto?.code === dkSuccess) {
          navigate(-1);
          setLocalData<LoginResponseProps>("user-details", data);
          setIsLoggedIn(true);
          resetForm();
          setSubmitting(false);
        }
      },
    });

  return (
    <div>
      <p className="text-muted text-[14px] font-medium text-center">
        Sign in with your Email and password
      </p>

      <Spin spinning={isSubmitting}>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <PrimaryInput
              id="userName"
              name="userName"
              autoFocus
              onChange={handleChange}
              value={values.userName}
              placeholder="Enter Username"
              error={errors.userName}
            />
          </div>

          <div className="mt-4">
            <div className="w-full border-b border-[#d0d5dd] grid grid-cols-[1fr_40px] items-center">
              <input
                className="w-full h-[40px] bg-white border-0 outline-0 transition-all duration-500 rounded-none placeholder:text-muted text-black text-[14px] font-normal font-poppins"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter password"
                type={type}
              />
              <span
                className="text-[12px] text-muted transition-all duration-500 hover:text-primary cursor-pointer"
                onClick={toggleType}
              >
                {type === "password" ? "SHOW" : "HIDE"}
              </span>
            </div>
            {errors.password && <InputError errorMessage={errors.password} />}
          </div>

          <button
            disabled={isValid === false || isSubmitting}
            className="w-full bg-primary text-white border-0 outline-0 h-[40px] mt-4 font-medium"
          >
            SIGN IN
          </button>
        </form>
      </Spin>
    </div>
  );
}
