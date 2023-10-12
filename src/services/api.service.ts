import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import ResourcesConfig from "../configs/resources.env";

class OrangeForgeApi {

  private orangeForgeApiURL = ResourcesConfig.OF_RESOURCES_API_URL;
  private static instance: OrangeForgeApi;
  private axiosInstance: AxiosInstance;
  
  constructor(options?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      baseURL: `${this.orangeForgeApiURL}/`,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
  }
  
  static getInstance(options?: AxiosRequestConfig) {
    if (!OrangeForgeApi.instance) {
      OrangeForgeApi.instance = new OrangeForgeApi(options);
    }
    return OrangeForgeApi.instance;
  }
  
  post (path: string, params?: NonNullable<unknown>) {

    if (path != '/login')
    {
      this.axiosInstance.interceptors.request.use(function (config: any) {
    
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("APP_USER_SESSION_KEY")}`;
        return config;
      }, null, { synchronous: true });
      
    }

    return this.axiosInstance.post(path, { ...params ?? {} });
  }

  get (path: string, params?: NonNullable<unknown>){

    if(path != '/login')
    {
      this.axiosInstance.interceptors.request.use(function (config: any) {
    
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("APP_USER_SESSION_KEY")}`;
        return config;
      }, null, { synchronous: true });
      
    }

    return this.axiosInstance.get(path, { params:{ ...params } });
  }

  delete (path: string, params?: object){

    if(path != '/login')
    {
      this.axiosInstance.interceptors.request.use(function (config: any) {
    
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("APP_USER_SESSION_KEY")}`;
        return config;
      }, null, { synchronous: true });
      
    }

    return this.axiosInstance.delete(path,{ ...params ?? {} });
  }
  
}

export { OrangeForgeApi };
