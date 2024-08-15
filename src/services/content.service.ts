import PBResourcesApi from "@/config/api/pb-resources";
// import ResourcesConfig from "@/config/resources.config";
import CustomContent from "@/helpers/content.helper";
// import fetcher from "@/helpers/fetcher";
import { CustomContentType } from "@/lib/content";
// import { SWRFetchType } from "@/lib/swr";
// import useSWR from "swr";

class ContentService {
 
	static async fetchByKeys(keys: string[], language = 'ptBR'): Promise<CustomContent[]> {
		const results = await Promise.all(keys.map(key =>
			PBResourcesApi.getInstance().get<CustomContentType>(`/content/${key}?lang=${language.toLowerCase()}`)
		));
  
		return results.map(result => new CustomContent(result.data));
	}
 
	static async SSRFetchByKeys(keys: string[], language = 'ptBR'): Promise<CustomContentType[]> {
		const results = await Promise.all(keys.map(key =>
			PBResourcesApi.getInstance().get<CustomContentType>(`/content/${key}?lang=${language.toLowerCase()}`)
		));
  
		return results.map(result => result.data);
	}

}

export default ContentService;
