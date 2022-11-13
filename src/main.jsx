import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import App from './App'
import NotFound from './features/page/NotFound';
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
    </ChakraProvider>
)