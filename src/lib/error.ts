import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { ToastOptions } from "react-toastify/dist/types";

export type AppErrorInfo = {
	code: number,
  title: string,
  message: string,
  description?: string,
  options?: ToastOptions,
}

export type RawException<T> = {
	code: number,
	request?: AxiosRequestHeaders,
	response?: AxiosResponse<T, any>,
}

export type ApiException<T> = RawException<T> & {
	apiCode?: number,
	message?: string,
	description?: string
}
