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
    secondary: {
      main: '#00A58C',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1FAE5',
    },
    divider: 'rgba(255, 255, 255, 0.18)',
    booking: {
      teal: '#00A58C',
      tealLight: '#00C2A3',
      buttonStart: '#D6B56B',
      buttonEnd: '#B88A43',
    },
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
