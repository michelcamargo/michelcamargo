import { ResourcesConfig } from '@/configs';
import Axios from 'axios';

export const createNewApi = (options = undefined) => {
  return Axios.create({
    baseURL: ResourcesConfig.MSC_RESOURCES_API_URL,
    ...options,
  });
};

const api = createNewApi();

export default api;
