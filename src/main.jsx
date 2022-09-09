import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import App from './App'
import './index.css'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)