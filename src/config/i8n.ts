class I8n {

	constructor(locale = 'ptBR') {
		this.locale = locale;
	}
	
	private locale: string;
	
	get(lang: string = this.locale) {
	  return { locale: lang };
	}
	
	set(lang: string) {
	  this.locale = lang;
	}

}

export default I8n;
