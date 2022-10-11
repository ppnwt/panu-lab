import './App.css'
import { 
  Text, 
  Divider,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/layouts/Footer';

import Summary from './features/summary/Summary'
import Experiences from './features/experiences/Experiences'
import Bio from './features/bio/Bio'
import Blog from './features/blog/Blog'


function App() {
  const [isLargerThan455] = useMediaQuery('(min-width: 455px)')
  return (
    <div className='App'>
      <Heading>Panu Lab 💻</Heading>
      <Text fontSize='md'> This is my playground , Hell Yeah!</Text>
      <Divider />
      <Bio />
      <Blog />
      <Summary />
      <Experiences />
      <Footer />
    </div>
  )
}

export default App
