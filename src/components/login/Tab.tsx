import { LoginTabProps } from "../../pages/Login";

interface Props {
  tab: LoginTabProps;
  setTab: React.Dispatch<React.SetStateAction<LoginTabProps>>;
}

export default function Tab({ setTab, tab }: Props) {
  return (
    <div className="w-full grid grid-cols-2 items-center">
      <button
        className={`w-full h-[45px] pb-[2px] text-[15px] font-medium outline-0 ${
          tab === "login"
            ? "border-b-primary text-primary border-b-2"
            : "border-b-black text-black border-b"
        }`}
        onClick={() => setTab("login")}
      >
        Sign In
      </button>

      <button
        className={`w-full h-[45px] pb-[2px] text-[15px] font-medium outline-0 ${
          tab === "signup"
            ? "border-b-primary text-primary border-b-2"
            : "border-b-black text-black border-b"
        }`}
        onClick={() => setTab("signup")}
      >
        Register
      </button>
    </div>
  );
}
