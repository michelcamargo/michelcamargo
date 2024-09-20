import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content.helper";
import { CustomContentType } from "@/lib/content";
import { LanguageType } from "@/lib/locale";

class ContentService {
	
	private static async fetchContentByTag(tag: string, language: LanguageType): Promise<CustomContent | null> {
		try {
			const fetched = await PBResourcesApi.getInstance().get<CustomContentType>(
				`/content/${tag}?lang=${language.toLowerCase()}`
			);
			
			if (!fetched || !fetched.data) return null;
			
			return new CustomContent(fetched.data);
		} catch(error) {
			throw Error(`Não foi possível obter conteúdo pela tag ${tag}, idioma: ${language}\n ` + error);
		}
	}
 
	static async fetchByKeys(keys: string[], language: LanguageType = 'ptBR'): Promise<CustomContent[]> {
		const contentArray: CustomContent[] = [];
		
		for (const tag of keys) {
			const content = await this.fetchContentByTag(tag, language);
			if (content) contentArray.push(content);
		}
		
		return contentArray;
	}

}

export default ContentService;
