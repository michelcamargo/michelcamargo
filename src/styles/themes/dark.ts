import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  
});

export default darkTheme;
