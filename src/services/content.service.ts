import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content.helper";
import useSWR from "swr";
import fetcher from "@/helpers/fetcher";
import { SWRFetchType } from "@/lib/swr";
import ResourcesConfig from "@/config/resources.config";
import {CustomContentType} from "@/lib/content";

class ContentService {
  
  static async fetchByKeys(keys: string[], language: string = 'ptBR'): Promise<CustomContent[]> {
    const results = await Promise.all(keys.map(key =>
      PBResourcesApi.getInstance().get<CustomContentType>(`/content/${key}?lang=${language.toLowerCase()}`)
    ));
    
    return results.map(result => new CustomContent(result.data));
  }
  
  static async SSRFetchByKeys(keys: string[], language: string = 'ptBR'): Promise<CustomContentType[]> {
    const results = await Promise.all(keys.map(key =>
      PBResourcesApi.getInstance().get<CustomContentType>(`/content/${key}?lang=${language.toLowerCase()}`)
    ));
    
    return results.map(result => result.data);
  }
  
  static fetchSWRTemplate(key: string, language: string = 'ptBR'): SWRFetchType {
    const { apiUrl } = ResourcesConfig;
    const { data, error, isLoading } = useSWR(`${apiUrl}/content/template/${key}?lang=${language}`, fetcher);
    
    return {
      data,
      error,
      isLoading,
    }
  }

}

export default ContentService;
