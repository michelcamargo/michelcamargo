import AppConfig from "@/configs/next.env";

class ContentService {
  
  private static contentURL = `${AppConfig.APP_URL}/api/content`;
  
  static async fetchByKey(key: string, language?: string) {
    const langQuery = language ? `?lang=${language}` : '';
    
    return fetch(`${this.contentURL}/${key}${langQuery}`, {
      method: 'GET',
    });
  }

}

export default ContentService;
