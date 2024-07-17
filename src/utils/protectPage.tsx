import { useNavigate } from "react-router-dom";
import { LoginResponseProps } from "../types/Response";

export default function ProtectRoute() {
  const navigate = useNavigate();
  const data = JSON.parse(
    localStorage.getItem("userDetails") as string
  ) as LoginResponseProps;
  if (!data) {
    return navigate("/");
  } else if (!data?.token) {
    return navigate("/");
  } else return;
}
