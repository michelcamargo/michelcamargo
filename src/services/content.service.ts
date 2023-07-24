import AppConfig from "@/configs/next.env";
import staticPageData from "@/helpers/static-content";

class ContentService {
  
  private static contentURL = `${AppConfig.APP_URL}/api/content`;
  
  static fetchByKey_static(key: string, language?: string) {
    // const langQuery = language ? `?lang=${language}` : '';
    
    return staticPageData[key];
  }
  
  static async fetchByKey_client(key: string, language?: string) {
    const langQuery = language ? `?lang=${language}` : '';
    
    return fetch(`${this.contentURL}/${key}${langQuery}`, {
      method: 'GET',
    });
  }

}

export default ContentService;
