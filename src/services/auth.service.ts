import I8n from "@/config/i8n";
import PBAuthApi from "@/config/api/pb-resources";
import { handleRequestError } from "@/helpers/error";
import { SignInUserDto } from "@/lib/auth";

class AuthService {
 
	private static api = PBAuthApi.getInstance();
	
  static async signIn(userDTO: SignInUserDto): Promise<any> {
    try {
      const { data } = await this.api.post(`/signin`, userDTO);

      return data;
    } catch (error) {
      // console.error('Falha ao realizar login:', error);
      // handleRequestError(0, `Falha ao realizar login`);
      handleRequestError(error, 'Falha ao realizar login');
      return [];
    }
  }
	
	static async signUp(keys: string[], i8n: I8n): Promise<any[]> {
    try {
      const currentLocale = i8n.get();
      const langQuery = currentLocale ? `?lang=${currentLocale.locale}` : '';
      
      const { data } = await this.api.post(`/users`)

      return data;
    } catch (error) {
      // console.error('Error post auth', error);
      handleRequestError(error, 'Falha ao registrar usuário');
      // handleRequestError(0, `Falha ao criar usuário`);
      return [];
    }
  }
	
	static requestPasswordReset(email: string) {
    try {
      this.api.get(`/auth/reset-pass?${email}`);
    } catch (error) {
      // console.error('Falha ao solicitar mudança de senha', error);
      // handleRequestError(0, `Falha ao solicitar mudança de senha`);
      handleRequestError(error, 'Falha ao solicitar mudança de senha');
      return [];
    }
  }

}

export default AuthService;
