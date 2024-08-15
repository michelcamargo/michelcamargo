import { LocaleConfig } from "@/lib/locale";

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
const localeReducer = (action: any, locale: LocaleConfig) => {
	switch (action.type) {
		case 'change': {
			return locale;
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
};

export default localeReducer;

