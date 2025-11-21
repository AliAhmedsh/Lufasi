import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#0C4A34',
      paper: '#0C4A34',
    },
    primary: {
      main: '#0C4A34',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1FAE5',
    },
    divider: 'rgba(255, 255, 255, 0.18)',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h6: {
      fontWeight: 600,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
});

export default LightTheme;
