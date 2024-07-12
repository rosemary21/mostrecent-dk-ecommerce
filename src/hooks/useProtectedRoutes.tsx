import { ReactNode } from "react";
import { LoginResponseProps } from "../types/Response";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: Props) {
  const data = JSON.parse(
    localStorage.getItem("user-details") as string
  ) as LoginResponseProps;
  if (!data) return;

  if (data?.token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
