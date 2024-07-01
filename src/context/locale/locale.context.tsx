import {createContext, ReactNode, useEffect, useMemo, useState} from 'react';
import cookie from 'js-cookie';

import { CustomContext } from "@/lib/context";
import {LanguageType, LocaleConfig} from "@/lib/locale";

type LocaleContextProviderProps = {
  children: ReactNode
}

const DEFAULT_LOCALE = 'ptBR';

export const LocaleContext = createContext<CustomContext<LocaleConfig>>(null);

const LocaleContextProvider = ({ children }: LocaleContextProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(() => {
    if (typeof window !== "undefined") {
      const savedLocale = cookie.get('locale') as LanguageType || localStorage.getItem('locale') as LanguageType;
      
      return savedLocale ? savedLocale : DEFAULT_LOCALE;
    } else {
      return DEFAULT_LOCALE;
    }
  });
  
  
  useEffect(() => {
    localStorage.setItem("locale", JSON.stringify(currentLanguage));
    cookie.set('locale', currentLanguage, { expires: 365 });
  }, [currentLanguage]);
  
  
  const localeContext = useMemo<CustomContext<LocaleConfig>>(() => ({
    value: currentLanguage, setValue: setCurrentLanguage
  }), [currentLanguage]);
  
  return (
    <LocaleContext.Provider value={localeContext}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;

