import {createContext, ReactNode, useEffect, useMemo, useState} from 'react';

import { CustomContext } from "@/lib/context";
import { LocaleConfig } from "@/lib/locale";
import {LocaleLanguages} from "@/helpers/locale";

type LocaleContextProviderProps = {
  children: ReactNode
}

export const LocaleContext = createContext<CustomContext<LocaleConfig>>(null);

const LocaleContextProvider = ({ children }: LocaleContextProviderProps) => {
  // const [currentLocale, setCurrentLanguage] = useState<LocaleConfig>(() => {
  //   if (typeof window !== "undefined") {
  //     const savedLocale = localStorage.getItem("locale");
  //     return savedLocale ? JSON.parse(savedLocale) : LocaleLanguages.ptBR;
  //   } else {
  //     return LocaleLanguages.ptBR;
  //   }
  // });
  
  const [currentLanguage, setCurrentLanguage] = useState<LocaleConfig>(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale");
      return savedLocale ? JSON.parse(savedLocale) : LocaleLanguages.ptBR;
    } else {
      return LocaleLanguages.ptBR;
    }
  });
  
  
  useEffect(() => {
    localStorage.setItem("locale", JSON.stringify(currentLanguage));
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

