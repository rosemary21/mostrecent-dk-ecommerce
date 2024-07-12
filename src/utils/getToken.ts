import { LoginResponseProps } from "../types/Response";

export default function getToken() {
  const localData = localStorage.getItem("user-details");
  if (!localData) return;
  const user: LoginResponseProps = JSON.parse(localData);
  return user?.token;
}
