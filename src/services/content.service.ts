import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content.helper";
import { CustomContentType } from "@/lib/content";
import { LanguageType } from "@/lib/locale";

class ContentService {
	
	private static async fetchFromKey(key: string, language: LanguageType): Promise<CustomContentType> {
		return await PBResourcesApi.getInstance().get<CustomContentType>(
			`/content/${key}?lang=${language.toLowerCase()}`
		);
	}
	
	static async getRawByKeys(tags: string[], language: LanguageType): Promise<CustomContentType[]> {
		const contentArray: CustomContentType[] = [];
  
		for (const tag of tags) {
			const content = await this.fetchFromKey(tag, language);
			if (content) contentArray.push(content);
		}
  
		return contentArray;
	}
 
	static async getByKeys(tags: string[], language: LanguageType = 'ptBR'): Promise<CustomContent[]> {
		const contentArray: CustomContent[] = [];
    
		for (const tag of tags) {
			const content = await this.fetchFromKey(tag, language);
			if (content) contentArray.push(new CustomContent(content));
		}
    
		return contentArray;
	}

}

export default ContentService;
