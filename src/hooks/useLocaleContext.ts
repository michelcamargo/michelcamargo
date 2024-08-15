import { useContext } from "react";

import { LocaleContext } from "@/context/locale/locale.context";

const useLocaleContext = () => {
	const context = useContext(LocaleContext);
	
	if (!context) {
		throw new Error('useLocaleContext deve ser envolvido por LocaleContextProvider');
	}
  
	const { value, setValue } = context;
	
	return { locale: value, setLocale: setValue };
};

export default useLocaleContext;
