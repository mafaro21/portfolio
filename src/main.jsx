import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Other from './pages/other.jsx'
import Another from './pages/another.jsx'
import theme from './theme.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/test',
    element: <Home />
  },
  {
    path: '/test2',
    element: <Other />
  },
  {
    path: '/another',
    element: <Another />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
