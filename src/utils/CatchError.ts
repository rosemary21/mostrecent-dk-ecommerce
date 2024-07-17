/* eslint-disable @typescript-eslint/no-explicit-any */
export default function catchError<T>(error: any) {
  return error?.response?.data as T;
}
