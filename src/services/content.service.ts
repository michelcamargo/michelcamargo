import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content.helper";
import { CustomContentType } from "@/lib/content";
import { LanguageType } from "@/lib/locale";

class ContentService {

  private static api = PBResourcesApi.getInstance();

  private static async fetchFromKey(key: string, language: LanguageType): Promise<CustomContentType | null> {
  	const content = this.api.get<CustomContentType>(`/content/${key}?lang=${language.toLowerCase()}`);
	  
  	if (!content) {
  		console.log('FALHA AO BUSCAR CONTEÚDO PELA KEY ', key);
  		return null;
	  }
		
  	return content;
  }

  static async getRawByKeys(
  	tags: string[], groupName = tags.join('--'), language: LanguageType = 'ptBR'
  ): Promise<CustomContentType> {
  	const contentArray: CustomContentType[] = [];

  	for (const tag of tags) {
  		const content = await this.fetchFromKey(tag, language);
  		if (content) contentArray.push(content);
  	}

  	return {
  		key: groupName,
  		children: contentArray,
  		details: `tags:${groupName}`,
  		created_at: new Date().toUTCString(),
  		updated_at: new Date().toUTCString(),
  	};
  }

  static async getByKeys(
  	tags: string[],
	  groupName = tags.join('--'),
	  language: LanguageType = 'ptBR'
  ): Promise<CustomContent> {
  	const contentArray: CustomContent[] = [];

  	for (const tag of tags) {
  		try {
  			const content = await this.fetchFromKey(tag, language);
  			if (content) contentArray.push(new CustomContent(content));
  		} catch (error) {
  			console.warn(`Erro ao buscar conteúdo para a chave: ${tag}`, error);
  		}
  	}
	
  	return new CustomContent({
  		key: groupName,
  		children: contentArray,
  		details: `keys:${groupName}`,
  		created_at: new Date().toUTCString(),
  		updated_at: new Date().toUTCString(),
  	});
  }

}

export default ContentService;
