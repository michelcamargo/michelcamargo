/* eslint-disable  @typescript-eslint/no-explicit-any */
import { handleRequestError } from "@/helpers/error";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import ResourcesConfig from "../resources.config";

class PBResourcesApi {

  private apiUrl = ResourcesConfig.apiUrl;
  private static instance: PBResourcesApi;
  private http: AxiosInstance;
  
  constructor(options?: AxiosRequestConfig) {
  	const config = {
  		baseURL: options?.baseURL ? options?.baseURL : `${this.apiUrl}/`,
  		// responseType: "json",
  		headers: {
			  "Content-Type": "application/json",
  		},
  		...options,
  	};
		
  	this.http = axios.create(config);
   
  	this.http.interceptors.request.use(
  		config => {
  			const token = typeof window !== 'undefined' ? localStorage.getItem("APP_USER_SESSION_KEY") : null;
  			if (token) {
  				config.headers["Authorization"] = `Bearer ${token}`;
  			}
  			return config;
  		},
  		error => Promise.reject(error)
  	);
  }
  
  static getInstance(options?: AxiosRequestConfig) {
  	if (!PBResourcesApi.instance) {
  		PBResourcesApi.instance = new PBResourcesApi(options);
  	}
  	return PBResourcesApi.instance;
  }
  
  async post<T = any, R = T>(path: string, data?: any): Promise<R> {
  	try {
  		const response: AxiosResponse<T> = await this.http.post<T>(path, data);
  		return response.data as unknown as R;
  	} catch (error) {
  		handleRequestError(error);
  		throw error;
  	}
  }
	
	 async get<T = any, R = T>(path: string, params?: any): Promise<R> {
	   return this.http.get<T>(path, { params }).then(
		 fullFilled => {
		   return fullFilled.data as unknown as R;
		 }, error => {
		   console.log('error tratado no then', error);
		   throw error;
		 }
	   ).catch(err => {
		 console.log('err fora do then', err);
		 throw err;
	   });
	 }
	
  	// try {
  	// 	// const response: AxiosResponse<T> = await this.http.get<T>(
  	// 	// 	path,
  	// 	//   { params },
  	// 	// );
	  //
  	// 	// return response.data as unknown as R;
	  //
	  //  
	  //
  	// } catch (error) {
  	// 	console.log('catch mais de fora ainda', error);
  	// 	handleRequestError(error);
  	// 	throw error;
  	// }
	// }
	
	// async delete<T = any, R = AxiosResponse<T>>(path: string, params?: any): Promise<R> {
	// async delete<T = any, R = T>(path: string, params?: any): Promise<R> {
	// 	try {
	// 		const response: AxiosResponse<T> = await this.http.delete<T>(
	// 			path, { params },
	// 		);
	// 		return response as R;
	// 	} catch (error) {
	// 		handleRequestError(error);
	// 		throw error;
	// 	}
	// }

}

export default PBResourcesApi;
