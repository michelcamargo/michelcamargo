import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content";
import {handleRequestError} from "@/helpers/error";

class ContentService {
  
  static async fetchByKeys(keys: string[], language: string = 'ptBR'): Promise<CustomContent[]> {
    try {
      const langQuery = `?lang=${language.toLowerCase()}`;

      const results = await Promise.all(keys.map(key =>
        PBResourcesApi.getInstance().get(`/content/${key}${langQuery}`)
      ));

      return results.map(result => result.data as CustomContent);
    } catch (error) {
      handleRequestError(error, `Falha ao buscar conteúdo`);
      return [];
    }
  }

}

export default ContentService;
