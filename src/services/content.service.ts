import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content";
import { handleRequestError } from "@/helpers/error";
import useSWR from "swr";
import fetcher from "@/helpers/fetcher";
import { SWRFetchType } from "@/lib/swr";
import ResourcesConfig from "@/config/resources.config";

class ContentService {
  
  static async fetchByKeys(keys: string[], language: string = 'ptBR'): Promise<CustomContent[]> {
    try {
      const results = await Promise.all(keys.map(key =>
        PBResourcesApi.getInstance().get(`/content/${key}?lang=${language.toLowerCase()}`)
      ));
      
      return results.map(result => result.data as CustomContent);
    } catch (error) {
      handleRequestError(error, `Falha ao buscar conteúdo`);
      return [];
    }
  }
  
  static fetchSWRTemplate(key: string, language: string = 'ptBR'): SWRFetchType {
    try {
      const { apiUrl } = ResourcesConfig;
      const { data, error, isLoading } = useSWR(`${apiUrl}/content/template/${key}?lang=${language}`, fetcher);
      
      return {
        data,
        error,
        isLoading,
      }
    } catch (error) {
      throw handleRequestError(error, `Falha ao buscar conteúdo`);
    }
  }

}

export default ContentService;
