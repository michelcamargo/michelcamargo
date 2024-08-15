
import AuthConfig from "@/config/auth.config";
import ApiHelper from "@/helpers/api.helper";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class PBAuthApi {

  private apiUrl = AuthConfig.apiUrl;
  private static instance: PBAuthApi;
  private axiosInstance: AxiosInstance;
  
  constructor(options?: AxiosRequestConfig) {
  	this.axiosInstance = axios.create({
  		baseURL: `${this.apiUrl}/`,
  		responseType: "json",
  		headers: {
			  "Content-Type": "application/json",
  		},
  		...options
  	});
  }
  
  static getInstance(options?: AxiosRequestConfig) {
  	if (!PBAuthApi.instance) {
  		PBAuthApi.instance = new PBAuthApi(options);
  	}
  	return PBAuthApi.instance;
  }
  
  async post<T = unknown, R = AxiosResponse<T>>(path: string, data?: unknown): Promise<R> {
  	try {
  		const response: AxiosResponse<PbResponseType<T>> = await this.axiosInstance.post<PbResponseType<T>>(path, data);
  		return { ...response, data: response.data?.data ? response.data.data : response.data } as R;
  	} catch (error) {
  		const exception = ApiHelper.handleException<PbResponseType<T>>(error);
  		console.warn(exception);
  		throw exception;
  	}
  }

  async get<T = unknown, R = AxiosResponse<T>>(path: string, params?: unknown): Promise<R> {
  	try {
  		const response: AxiosResponse<PbResponseType<T>> = await this.axiosInstance.get<PbResponseType<T>>(
  			path, { params }
  		);
  		return { ...response, data: response.data?.data ? response.data.data : response.data } as R;
  	} catch (error) {
  		const exception = ApiHelper.handleException<PbResponseType<T>>(error);
  		console.warn(exception);
  		throw exception;
  	}
  }

	// async delete<T = unknown, R = AxiosResponse<T>>(path: string, params?: unknown): Promise<R> {
	// 	try {
	// 		const response: AxiosResponse<PbResponseType<T>> = await this.axiosInstance.delete<PbResponseType<T>>(
	// 			path, { params }
	// 		);
	// 		return { ...response, data: response.data?.data ? response.data.data : response.data } as R;
	// 	} catch (error) {
	// 		const exception = ApiHelper.handleException<PbResponseType<T>>(error);
	// 		console.warn(exception);
	// 		throw exception;
	// 	}
	// }
	//
	// async put<T = unknown, R = AxiosResponse<T>>(path: string, data?: unknown): Promise<R> {
	// 	try {
	// 	  const response: AxiosResponse<PbResponseType<T>> = await this.axiosInstance.put<PbResponseType<T>>(path, data);
	// 	  return { ...response, data: response.data?.data ? response.data.data : response.data } as R;
	// 	} catch (error) {
	// 	  const exception = ApiHelper.handleException<PbResponseType<T>>(error);
	// 	  console.warn(exception);
	// 	  throw exception;
	// 	}
	// }
 
}

export default PBAuthApi;
