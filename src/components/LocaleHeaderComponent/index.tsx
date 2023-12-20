import React, { useCallback } from 'react';

import { LocaleLanguages } from "@/helpers/locale";
import useLocaleContext from "@/hooks/useLocaleContext";
import { SelectChangeEvent } from "@mui/material/Select";

import Styled from "./styles";

const LocaleHeaderComponent = () => {
  const { locale, setLocale } = useLocaleContext();
  
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const localeChangeHandler = useCallback((event: SelectChangeEvent<any>) => {
    setLocale({
      ...locale,
      language: event.target.value,
    });
  }, [locale, setLocale]);
	
  const LocaleLangFlag = useCallback(() => {
    return <Styled.LocaleFlag />;
  }, []);
	
  return (
    <Styled.LocaleFormControl sx={{ m: 0, minWidth: 120, p: 0 }} size="small">
      <Styled.LocaleSelect
        labelId="locale-input-label"
        id="locale-input"
        value={locale.language}
        
        onChange={localeChangeHandler}
      >
        <Styled.LocaleOptionItem value={LocaleLanguages.en}>
          <LocaleLangFlag />
          <Styled.LocaleLangLabel>English</Styled.LocaleLangLabel>
        </Styled.LocaleOptionItem>
        <Styled.LocaleOptionItem value={LocaleLanguages.pt}>
          <LocaleLangFlag />
          <Styled.LocaleLangLabel>Português</Styled.LocaleLangLabel>
        </Styled.LocaleOptionItem>
      </Styled.LocaleSelect>
    </Styled.LocaleFormControl>
  );
};

export default LocaleHeaderComponent;
