import AppConfig from "@/configs/next.env";
import { handleRequestError } from "@/helpers/error";
import { CustomerProfile, CustomerLead } from "@/lib/customer";
import { OrangeForgeApi } from "@/services/api.service";

class CustomerService {
  
  private static contentURL = `${AppConfig.APP_URL}/api/content`;
  
  static async prospectCustomer(customer: CustomerLead): Promise<CustomerProfile | null> {
    try {
      const { data } = await OrangeForgeApi.getInstance()
        .post(`/customer/prospect`, customer);
      
      return data;
    } catch (e) {
      handleRequestError(0, `Falha ao enviar `);
      return null;
    }
  }
  
  static async fetchByKey_client(key: string, language?: string) {
    const langQuery = language ? `?lang=${language}` : '';
    
    return fetch(`${this.contentURL}/${key}${langQuery}`, {
      method: 'GET',
    });
  }

}

export default CustomerService;
