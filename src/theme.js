// src/theme.js
import { createTheme } from '@mui/material/styles';

// KLA Brand Colors
const klaBlue = '#003366';    // A deep, professional navy blue
const klaPurple = '#230052';   // A strong, vibrant purple
const white = '#FFFFFF';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: klaPurple,
    },
    secondary: {
      main: klaBlue,
    },
    background: {
      default: white, // Use a crisp white background
      paper: white,
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      color: '#6c757d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '16px',
            }
        }
    }
  },
});

export default theme;