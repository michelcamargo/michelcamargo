import I8n from "@/config/i8n";
import PBAuthApi from "@/config/api/pb-auth";
import { handleRequestError } from "@/helpers/error";
import { SignInUserDto } from "@/lib/auth";
import {AuthUser} from "@/lib/user";

class AuthService {
 
	private static api = PBAuthApi.getInstance();
	
  static async handshake(username: string): Promise<boolean> {
    try {
      const { data } = await this.api.get<boolean>(`/auth/handshake/${username}`);
      return data;
    } catch (error) {
      throw handleRequestError(error, 'Falha ao comunicar-se com servidor');
    }
  }
  
  static async signIn(userDTO: SignInUserDto): Promise<AuthUser> {
    try {
      const { data } = await this.api.post<AuthUser>(`/auth/signin`, userDTO);
      return data;
    } catch (error) {
      throw handleRequestError(error, 'Falha ao realizar login');
    }
  }
	
	static async signUp(keys: string[], i8n: I8n): Promise<AuthUser> {
    try {
      const currentLocale = i8n.get();
      const langQuery = currentLocale ? `?lang=${currentLocale.locale}` : '';
      
      const { data } = await this.api.post<AuthUser>(`/users`)

      return data;
    } catch (error) {
      throw handleRequestError(error, 'Falha ao registrar usuário');
    }
  }
	
	static requestPasswordReset(email: string) {
    try {
      this.api.get(`/auth/reset-pass?${email}`);
    } catch (error) {
      throw handleRequestError(error, 'Falha ao solicitar mudança de senha');
    }
  }

}

export default AuthService;
