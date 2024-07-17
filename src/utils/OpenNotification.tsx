import { toast } from "react-toastify";

export default function openNotification(
  status: "error" | "success" | "warning",
  message: string,
  duration?: number
) {
  if (status === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: duration || 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (status === "error") {
    toast.error(message, {
      position: "top-right",
      autoClose: duration || 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    toast.warn(message, {
      position: "top-right",
      autoClose: duration || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}
