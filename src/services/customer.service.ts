// import AppConfig from "@/config/next.config";
import PBResourcesApi from "@/config/api/pb-resources";
import { handleRequestError } from "@/helpers/error";
import { CustomerProfile, CustomerLead } from "@/lib/customer";
// import { HTTP_METHOD } from "next/dist/server/web/http";

class CustomerService {

	// private static contentURL = `${AppConfig.APP_URL}/api/content`;
	// private static contentURL = `${AppConfig.APP_URL}/api/content`;
  
	static async prospectCustomer(customer: CustomerLead): Promise<CustomerProfile | null> {
		try {
			const { data } = await PBResourcesApi.getInstance()
				.post(`/customer/prospect`, customer);
      
			return data;
		} catch (error) {
			handleRequestError(error, 'Falha ao enviar');
			return null;
		}
	}
  
	// static async fetchByKey_client(key: string, language?: string) {
	//   const langQuery = language ? `?lang=${language}` : '';
	//
	//   return fetch(`${this.apiUrl}/${key}${langQuery}`, {
	//     method: 'GET',
	//   });
	// }

}

export default CustomerService;
