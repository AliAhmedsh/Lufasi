import { ThemeProvider, CssBaseline } from '@mui/material'
import LightTheme from './theme/LightTheme'
import AppRoutes from './routes/RoutesConfig'

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
