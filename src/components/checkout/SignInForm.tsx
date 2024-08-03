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

interface FormProps {
  userName: string;
  password: string;
}
interface Props {
  userDetails: LoginResponseProps | null;
}

export default function SignInForm({ userDetails }: Props) {
  const { setTab, setIsAccordion, setActiveCheckoutAccordion } =
    useAppContext();
  const navigate = useNavigate();

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
          setActiveCheckoutAccordion("2");
          setIsAccordion(true);
          window.location.reload();
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
          setActiveCheckoutAccordion("2");
          setIsAccordion(true);
          window.location.reload();
        }
      },
    });
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-muted text-[15px]">Sign in to proceed to payment.</p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
        <PrimaryInput
          id="userName"
          name="userName"
          onChange={handleChange}
          value={values.userName}
          error={errors.userName}
          placeholder="Username"
        />

        <PrimaryInput
          id="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          error={errors.password}
          placeholder="Password"
        />

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
    </div>
  );
}
