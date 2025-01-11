import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    mode: "light",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        },
        notchedOutline: {
          borderColor: "lightgray",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused ": {
            color: "black",
            fontWeight: "bolder",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "& .MuiGrid-item": {
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "none",
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "black",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "black",
          },
        },
      },
    },
  },
});
