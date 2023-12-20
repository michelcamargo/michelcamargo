import { createContext, ReactNode, useMemo, useState } from 'react';

import { CustomContext } from "@/lib/context";
import { LocaleConfig } from "@/lib/locale";

export const initLocaleValue: LocaleConfig = {
  language: 'pt'
};

type LocaleContextProviderProps = {
  children: ReactNode
}

export const LocaleContext = createContext<CustomContext<LocaleConfig>>(null);

const LocaleContextProvider = ({ children }: LocaleContextProviderProps) => {
  const [currentLocale, setCurrentLocale] = useState<LocaleConfig>(initLocaleValue);
  
  const localeContext = useMemo<CustomContext<LocaleConfig>>(() => ({
    value: currentLocale, setValue: setCurrentLocale
  }), [currentLocale]);
  
  return (
    <LocaleContext.Provider value={localeContext}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;

