/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

import AuthConfig from "@/config/auth.config";

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
      ...options,
    });
  }
  
  static getInstance(options?: AxiosRequestConfig) {
    if (!PBAuthApi.instance) {
      PBAuthApi.instance = new PBAuthApi(options);
    }
    return PBAuthApi.instance;
  }
  
  async post<T = any, R = AxiosResponse<T>>(path: string, data?: any): Promise<R> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post<T>(path, data);
      return response as R;
    } catch (error) {
      console.error('Erro na requisição POST:', error);
      throw error;
    }
  }

  async get<T = any, R = AxiosResponse<T>>(path: string, params?: any): Promise<R> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(path, { params });
      return response as R;
    } catch (error) {
      console.error('Erro na requisição GET:', error);
      throw error;
    }
  }

  async delete<T = any, R = AxiosResponse<T>>(path: string, params?: any): Promise<R> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(path, { params });
      return response as R;
    } catch (error) {
      console.error('Erro na requisição DELETE:', error);
      throw error;
    }
  }
  
}

export default PBAuthApi;
