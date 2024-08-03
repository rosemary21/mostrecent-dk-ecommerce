import { useFormik } from "formik";
import PrimaryInput from "../general/PrimaryInput";
import { object, string } from "yup";
import { dkSuccess, ERRORS } from "../../data";
import { LoginPayload } from "../../types/Payload";
import { login } from "../../services/api/API";
import { setLocalData } from "../../utils/localData";
import { LoginResponseProps } from "../../types/Response";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useAppContext } from "../../contexts/AppContext";
import openNotification from "../../utils/OpenNotification";
import { Spin } from "antd";
import { useState } from "react";
import InputError from "../../utils/InputError";
import { ActiveCheckoutAccordion } from "../../pages/Checkout";
import { useCartContext } from "../../contexts/CartContext";

interface FormProps {
  userName: string;
  password: string;
}
interface Props {
  userDetails: LoginResponseProps | null;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
}

export default function SignInForm({
  userDetails,
  setActiveCheckoutAccordion,
}: Props) {
  const { setTab } = useAppContext();
  const { setIsLoggedIn } = useCartContext();
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const toggleType = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const { errors, values, handleChange, handleSubmit, isValid, isSubmitting } =
    useFormik<FormProps>({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: object().shape({
        userName: string().trim().required(ERRORS.required),
        password: string()
          .min(6, "Password must be minimum of six characters")
          .trim()
          .required(ERRORS.required),
      }),
      onSubmit: async (
        { password, userName },
        { resetForm, setSubmitting }
      ) => {
        if (userDetails?.emailAddress) {
          openNotification("warning", "You're already logged in");
          setActiveCheckoutAccordion("Delivery Details");
          return;
        }
        const payload: LoginPayload = {
          password,
          userName,
        };
        const data = await login(payload);
        if (data?.responseDto?.code === dkSuccess) {
          setLocalData<LoginResponseProps>("user-details", data);
          resetForm();
          setSubmitting(false);
          setActiveCheckoutAccordion("Delivery Details");
          setIsLoggedIn(true);
        }
      },
    });
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-muted text-[15px]">Sign in to proceed to payment.</p>

      <Spin spinning={isSubmitting}>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-2 relative"
        >
          <PrimaryInput
            id="userName"
            name="userName"
            onChange={handleChange}
            value={values.userName}
            error={errors.userName}
            placeholder="Username"
          />

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
            type="submit"
            className="uppercase md:h-[50px] h-[40px] w-full bg-primary text-white font-medium text-[13px] mt-3"
            disabled={isValid === false || isSubmitting}
          >
            continue
          </button>

          <p className="text-[15px] text-black font-medium mt-2">
            Don’t have an account,{" "}
            <span
              onClick={() => {
                navigate(`/${ROUTES.login}`);
                setTab("signup");
              }}
              className="font-bold text-black cursor-pointer transition-all duration-500 hover:text-blue-600"
            >
              SIGN UP
            </span>
          </p>
        </form>
      </Spin>
    </div>
  );
}
