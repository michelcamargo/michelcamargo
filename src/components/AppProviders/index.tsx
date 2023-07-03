import muiTheme from "@/styles/themes";
import { ThemeProvider } from '@mui/material/styles';
import { NextDataHooksProvider } from 'next-data-hooks';

const AppProviders = ({
  children,
  nextDataHooks,
}) => {
  return (
    <NextDataHooksProvider nextDataHooks={nextDataHooks}>
      <ThemeProvider theme={muiTheme(true)}>
        {children}
      </ThemeProvider>
    </NextDataHooksProvider>
  );
};

export default AppProviders;
