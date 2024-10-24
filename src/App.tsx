import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { Router } from './router'
import { lightTheme } from './utils/themeProvider'
import i18n from './i18n'


function App() {
  i18n.changeLanguage('pt-BR');

  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={lightTheme}>
            <Router/>
        </ThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App
