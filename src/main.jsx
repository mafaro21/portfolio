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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Other />
  },
  {
    path: '/test',
    element: <Home />
  },
  {
    path: '/other',
    element: <Another />
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
