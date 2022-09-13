import './App.css'
import { 
  Text, 
  Divider,
  Heading, 
} from '@chakra-ui/react'
import BreadCrumb from './components/BreadCrumb'
import Summary from './features/summary/Summary'
import Experiences from './features/experiences/Experiences'
import Life from './features/bio/Life'


function App() {
  return (
    <div className='App'>
      <Heading>Panu Lab 💻</Heading>
      <Text fontSize='md'> This is playground for test anything, Hell Yeah!</Text>
      <Divider />
      <BreadCrumb />
      <Life />
      <Summary />
      <Experiences />
    </div>
  )
}

export default App
