import PBResourcesApi from "@/config/api/pb-resources";
import CustomContent from "@/helpers/content.helper";
import { CustomContentType } from "@/lib/content";
import { LanguageType } from "@/lib/locale";

class ContentService {

  private static api = PBResourcesApi.getInstance();

  private static async fetchFromKey(key: string, language: LanguageType): Promise<CustomContentType> {
  	try {
  		return this.api.get<CustomContentType>(
  			`/content/${key}?lang=${language.toLowerCase()}`
  		);
  	} catch (e) {
  		console.log('FALHA AO BUSCAR CONTEÚDO PELA KEY ', key);
  		throw e;
  	} 
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
  	tags: string[], groupName = tags.join('--'), language: LanguageType = 'ptBR'
  ): Promise<CustomContent> {
  	const contentArray: CustomContent[] = [];

  	for (const tag of tags) {
  		const content = await this.fetchFromKey(tag, language);
  		if (content) contentArray.push(new CustomContent(content));
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
