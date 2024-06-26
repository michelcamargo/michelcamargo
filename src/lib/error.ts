import { ToastOptions } from "react-toastify/dist/types";

export type AppErrorInfo = {
	code: number,
  title: string,
  message: string,
  description?: string,
  options?: ToastOptions,
}
