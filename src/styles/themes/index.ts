import { createTheme } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";

import darkTheme from './dark';
import lightTheme from './light';

export default function(isDarkMode = false, availableFonts: Array<{ id: string, font: NextFont }>) {
  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  
  const leadFont = availableFonts.find(item => item.id === 'lead');
  
  console.log('LEAD FONT ###', leadFont);
  
  return createTheme({
    ...currentTheme,
    typography: {
      ...currentTheme.typography,
      fontFamily: 'Lexend',
    },
  });
}
