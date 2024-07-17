import { dkSuccess } from "../../data";
import { NewsletterPayload } from "../../types/Payload";
import { NewsletterResponse } from "../../types/Response";
import catchError from "../../utils/CatchError";
import openNotification from "../../utils/OpenNotification";
import axiosInstance from "../axiosInterceptors/interceptors";

export const suscribeToNewsletter = async (payload: NewsletterPayload) => {
  try {
    const url = `subscription/subcribe`;
    const { data } = await axiosInstance.post<NewsletterResponse>(url, payload);
    if (data?.responseDto?.code === dkSuccess) {
      return data;
    } else {
      openNotification("error", data?.responseDto?.message);
      return;
    }
  } catch (error) {
    const data = catchError<NewsletterResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};
