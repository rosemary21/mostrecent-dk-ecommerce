/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { CreateAxiosDefaults } from "axios";
import getToken from "../../utils/getToken";
import openNotification from "../../utils/OpenNotification";

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_APP_BASE_URL + "/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (request) => {
    const token = getToken();

    if (token !== null) {
      request.headers.apiKey = token;
      return request;
    } else {
      return request;
    }
  },
  (error: any) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status >= 202 && response?.status <= 226) {
      const error =
        response?.data?.errors.toString() || response?.data?.description;
      window.location.href = "/profile";
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      const errMessage = error?.response?.data?.error;
      const response =
        "Our Enginners are currently working on it, please try again in few minutes";
      if (errMessage) {
        return openNotification("error", errMessage);
      } else if (response) {
        return openNotification("error", response);
      }
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
    if (error.response.status === 405) {
      const errMessage = error?.response?.data?.error;
      if (errMessage) return openNotification("error", errMessage);
      return Promise.reject(error);
    }
    if (error.response.status === 403) {
      const errMessage = error?.response?.data?.error;
      if (errMessage) return openNotification("error", errMessage);
      return Promise.reject(errMessage);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
