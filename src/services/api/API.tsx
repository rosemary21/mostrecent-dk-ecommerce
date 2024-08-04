import { dkSuccess } from "../../data";
import {
  CheckoutPayload,
  ContactUsPayload,
  GetProductDescriptionPayload,
  InitializeCardPayload,
  LoginPayload,
  NewsletterPayload,
  SignUpPayload,
} from "../../types/Payload";
import {
  AddDeliveryResponse,
  CheckoutResponse,
  ContactUsResponse,
  GetProductDescriptionResponse,
  InitializeCardResponse,
  LoginResponseProps,
  LogOutResponse,
  NewsletterResponse,
  SignUpResponse,
} from "../../types/Response";
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

export const getProductsByDescription = async (
  payload: GetProductDescriptionPayload
) => {
  try {
    const url = `productdescription/all/page`;
    const { data } = await axiosInstance.post<GetProductDescriptionResponse>(
      url,
      payload
    );
    if (data?.responseDto?.code === dkSuccess) {
      return data;
    }
  } catch (error) {
    const data = catchError<GetProductDescriptionResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};

export const contactUs = async (payload: ContactUsPayload) => {
  try {
    const url = `contact/add`;
    const { data } = await axiosInstance.post<ContactUsResponse>(url, payload);
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<ContactUsResponse>(error);
    openNotification("error", data?.responseDto?.code);
    return;
  }
};

export const login = async (payload: LoginPayload) => {
  try {
    const url = "login/customer";
    const { data } = await axiosInstance.post<LoginResponseProps>(url, payload);
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<LoginResponseProps>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};

export const signUp = async (payload: SignUpPayload) => {
  try {
    const url = "user/add";
    const { data } = await axiosInstance.post<SignUpResponse>(url, payload);
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<SignUpResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};

export const logOut = async () => {
  try {
    const url = `logout`;
    const { data } = await axiosInstance.get<LogOutResponse>(url);
    if (data?.resp?.code === dkSuccess) {
      openNotification("success", data?.resp?.message);
      localStorage.removeItem("user-details");
      sessionStorage.clear();
      window.location.reload();
      return data;
    }
  } catch (error) {
    const data = catchError<LogOutResponse>(error);
    openNotification("error", data?.resp?.message);
    return;
  }
};

export const addDelivery = async (payload: CheckoutPayload) => {
  try {
    const url = `delivery/add`;
    const { data } = await axiosInstance.post<AddDeliveryResponse>(
      url,
      payload
    );
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<AddDeliveryResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};

export const checkout = async (payload: CheckoutPayload) => {
  try {
    const url = `delivery/checkout`;
    const { data } = await axiosInstance.post<CheckoutResponse>(url, payload);
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<CheckoutResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};

export const initializeCard = async (payload: InitializeCardPayload) => {
  try {
    const url = `card/charge`;
    const { data } = await axiosInstance.post<InitializeCardResponse>(
      url,
      payload
    );
    if (data?.responseDto?.code === dkSuccess) {
      openNotification("success", data?.responseDto?.message);
      return data;
    }
  } catch (error) {
    const data = catchError<InitializeCardResponse>(error);
    openNotification("error", data?.responseDto?.message);
    return;
  }
};
