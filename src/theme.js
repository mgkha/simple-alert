import { red, blue, yellow, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: yellow.A400,
    },
    info: {
      main: blue.A400,
    },
    success: {
      main: green.A400,
    },
  },
});

export default theme;
