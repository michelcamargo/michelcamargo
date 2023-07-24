import { ResourcesConfig } from '@/configs';
import Axios, { AxiosRequestConfig } from 'axios';

export const createNewApi = (options?: AxiosRequestConfig) => {
  return Axios.create({
    baseURL: ResourcesConfig.MSC_RESOURCES_API_URL,
    ...options,
  });
};

const api = createNewApi();

export default api;
