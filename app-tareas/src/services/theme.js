import { createTheme } from "@mui/material";

// Definir los colores y la tipografía
export const themeGlobal = createTheme({
  palette: {
    primary: {
      main: "#338b85", 
    },
    secondary: {
      main: "#5dc1b9",
    },
    backgroundLogin: {
      default: "#005954", 
    },
    background: {
        default: "#d5ffff", 
      },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

export default themeGlobal;
