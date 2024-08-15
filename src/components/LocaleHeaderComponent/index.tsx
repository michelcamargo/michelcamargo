import React, { useCallback } from 'react';

import { LocaleLanguages } from "@/helpers/locale";
import useLocaleContext from "@/hooks/useLocaleContext";
import { SelectChangeEvent } from "@mui/material/Select";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import Styled from "./styles";

interface Props {
  locale: string,
  availableLocales: string[],
}

const LocaleHeaderComponent = ({ locale }: Props) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { locale: language, setLocale: setContextLocale } = useLocaleContext();
  
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const contextLocaleChangeHandler = useCallback(({ target }: SelectChangeEvent<any>) => {
    const { value } = target;
    setContextLocale(value);
    
    cookie.set('locale', value, { expires: 365 });
    router.push({ pathname, query }, asPath, { locale: value });
  }, [setContextLocale, pathname, asPath, query, router]);
	
  const LocaleLangFlag = useCallback(() => {
    return <Styled.LocaleFlag />;
  }, []);
	
  return (
    <Styled.LocaleFormControl sx={{ m: 0, minWidth: 120, p: 0 }} size="small">
      <Styled.LocaleSelect
        labelId="contextLocale-input-label"
        id="contextLocale-input"
        value={locale}
        onChange={contextLocaleChangeHandler}
      >
        <Styled.LocaleOptionItem value={LocaleLanguages.en}>
          <LocaleLangFlag />
          <Styled.LocaleLangLabel>English</Styled.LocaleLangLabel>
        </Styled.LocaleOptionItem>
        <Styled.LocaleOptionItem value={LocaleLanguages.ptBR}>
          <LocaleLangFlag />
          <Styled.LocaleLangLabel>Português</Styled.LocaleLangLabel>
        </Styled.LocaleOptionItem>
      </Styled.LocaleSelect>
    </Styled.LocaleFormControl>
  );
};

export default LocaleHeaderComponent;
