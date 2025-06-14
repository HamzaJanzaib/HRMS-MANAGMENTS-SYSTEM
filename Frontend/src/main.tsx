import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { AppContextProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
