import './App.css'
import { 
  Text, 
  Divider,
  Heading,
} from '@chakra-ui/react'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/layouts/Footer';

import Summary from './features/summary/Summary'
import Experiences from './features/experiences/Experiences'
import Bio from './features/bio/Bio'
import Blog from './features/blog/Blog'


function App() {
  return (
    <div className='App'>
      <Heading>Panu Lab 💻</Heading>
      <Text fontSize='md'> This is playground for test anything, Hell Yeah!</Text>
      {/* <Text fontSize='md'> This app using | React.js + Vite | Nest.js | Chakra UI | </Text> */}
      <Divider />
      <BreadCrumb />
      <Bio />
      <Blog />
      <Summary />
      <Experiences />
      <Footer />
    </div>
  )
}

export default App
