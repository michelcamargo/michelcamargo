import I8n from "@/config/i8n";
import PBAuthApi from "@/config/api/pb-auth";
import { SignInUserDto } from "@/lib/auth";
import {AuthUser} from "@/lib/user";
import Toast from "@/components/Toast";
import { ApiException } from "@/lib/error";

class AuthService {
 
	private static api = PBAuthApi.getInstance();
	
  static async handshake(username: string): Promise<boolean> {
    try {
      const { data } = await this.api.get<boolean>(`/auth/handshake/${username}`);
      return data;
    } catch (err) {
      const error = err as ApiException<AuthUser>;
      Toast.Error({
        title: 'Falha comunicar-se com o servidor',
        description: error.message,
      })
      throw error;
    }
  }
  
  static async signIn(userDTO: SignInUserDto): Promise<AuthUser> {
    try {
      const { data } = await this.api.post<AuthUser>(`/auth/signin`, userDTO);
      return data;
    } catch (err) {
      const error = err as ApiException<AuthUser>;
      Toast.Error({
        title: 'Falha ao validar acesso',
        description: error.message,
      })
      throw error;
    }
  }
	
	static async signUp(keys: string[], i8n: I8n): Promise<AuthUser> {
    try {
      const currentLocale = i8n.get();
      const langQuery = currentLocale ? `?lang=${currentLocale.locale}` : '';
      
      const { data } = await this.api.post<AuthUser>(`/users`)

      return data;
    } catch (err) {
      const error = err as ApiException<AuthUser>;
      Toast.Error({
        title: 'Falha ao registrar-se',
        description: error!.message,
      })
      throw error;
    }
  }
	
	static requestPasswordReset(email: string) {
    try {
      this.api.get(`/auth/reset-pass?${email}`);
    } catch (err) {
      const error = err as ApiException<AuthUser>;
      Toast.Error({
        title: 'Falha ao solicitar mudança de senha',
        description: error!.message,
      })
      throw error;
    }
  }

}

export default AuthService;
