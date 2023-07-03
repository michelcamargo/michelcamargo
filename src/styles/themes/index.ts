import { createTheme } from "@mui/material/styles";

import darkTheme from './dark';
import lightTheme from './light';

export default function(isDarkMode = false) {
  return createTheme(isDarkMode ? darkTheme : lightTheme);
}
