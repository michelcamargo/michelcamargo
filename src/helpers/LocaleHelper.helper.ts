import { LanguageType } from "@/lib/locale";
import cookie from 'cookie';
import { IncomingMessage } from "node:http";

interface ISharedPageContext {
	req?: IncomingMessage & {
		cookies: Partial<{ [p: string]: string }>
	},
	locale?: string,
	defaultLocale?: string
}

class LocaleHelper {
	
	public static getProperlyPageLocale(context: ISharedPageContext): LanguageType {
		const { locale: contextLocale, defaultLocale = 'ptBR' as LanguageType } = context;
		let locale = contextLocale as LanguageType || defaultLocale;
		
		if (!context || !context.req) return locale;
		
		const { headers } = context.req;
		
		const cookies = cookie.parse(headers.cookie || '');
		
		if (!cookies?.locale) return locale;
		
		locale = decodeURIComponent(cookies.locale) as LanguageType;
		
		return locale;
	}

}

export default LocaleHelper;