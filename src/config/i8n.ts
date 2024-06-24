import { CustomContentType } from "@/lib/content";

// type CrmStaticContent = {
// 	BIO: CustomContentType[],
// 	LINKS: CustomContentType[],
// 	DEVSTACK: CustomContentType[],
// 	TERMS: CustomContentType[],
// 	PORTFOLIO: CustomContentType[],
// 	FALLBACK: CustomContentType[],
// }

class I8n {
	constructor(locale: string = 'ptBR') {
		this.locale = locale;
		// this.content = this.getContent(locale);
	}
	
	private locale: string;
	// private content?: CrmStaticContent;

	// private getContent = (lang: string = this.locale) => ({
	// 	// BIO: JSON.parse(JSON.stringify(require(`../static/bio/bio__${lang.toLowerCase()}.i8n.json`))),
	// 	BIO: {},
	// 	// LINKS: JSON.parse(JSON.stringify(require(`../static/links/social__${lang.toLowerCase()}.i8n.json`))),
	// 	LINKS: {},
	// 	// DEVSTACK: JSON.parse(JSON.stringify(require(`../static/work/devstack__${lang.toLowerCase()}.i8n.json`))),
	// 	DEVSTACK: {},
	// 	// TERMS: JSON.parse(JSON.stringify(require(`../static/legal/terms__${lang.toLowerCase()}.i8n.json`))),
	// 	TERMS: {},
	// 	// PORTFOLIO: JSON.parse(JSON.stringify(require(`../static/work/portfolio__${lang.toLowerCase()}.i8n.json`))),
	// 	PORTFOLIO: {},
	// 	// FALLBACK: JSON.parse(JSON.stringify(require(`../static/general/fallback__${lang.toLowerCase()}.i8n.json`))),
	// 	FALLBACK: {},
	// });
	
	get(lang: string = this.locale) {
		// return { locale: lang, content: this.content };
		return { locale: lang };
	}
	
	set(lang: string) {
		this.locale = lang;
		// this.content = this.getContent(lang);
	}

}

export default I8n
