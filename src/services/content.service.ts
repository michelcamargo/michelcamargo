import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content";

class ContentService {
  
  static async fetchByKeys(keys: string[], language: string = 'ptBR'): Promise<CustomContent[]> {
    try {
      const langQuery = `?lang=${language.toLowerCase()}`;

      const results = await Promise.all(keys.map(key =>
        PBResourcesApi.getInstance().get(`/content/${key}${langQuery}`)
      ));

      return results.map(result => result.data as CustomContent);
    } catch (error) {
      console.error('Error fetching contents by keys:', error);
      // handleRequestError(0, `Falha ao buscar conteúdo: ${error?.message}`);
      return [];
    }
  }

}

export default ContentService;
