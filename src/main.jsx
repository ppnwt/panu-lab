import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import App from './App'
import NotFound from './features/page/NotFound';
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider theme={theme} >
      <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
    </ChakraProvider>
)