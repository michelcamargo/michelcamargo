import { createTheme } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";

import darkTheme from './dark';
import lightTheme from './light';

export default function(isDarkMode = false, availableFonts: Array<{ id: string, font: NextFont }>) {
  const leadFont = availableFonts.find(item => item.id === 'lead');
  const rawLeadFont = leadFont?.font;
  const fontFamily = rawLeadFont?.style?.fontFamily ?? 'Lexend';
  
  const currentTheme = isDarkMode ? darkTheme(fontFamily) : lightTheme(fontFamily);
  
  return createTheme({
    ...currentTheme,
    typography: {
      ...currentTheme.typography,
      fontFamily,
    },
  });
}
