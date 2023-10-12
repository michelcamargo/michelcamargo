import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#00325E',
      main: '#00325E',
      dark: '#00325E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {},
    background: {},
    success: {
      main: '#2ca800'
    }
    // background: {},
    // success: {
    //   main: '#2ca800'
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 820,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: 'Lexend',
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default lightTheme;
