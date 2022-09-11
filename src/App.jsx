import './App.css'
import { 
  Text, 
  Divider,
  Heading, 
} from '@chakra-ui/react'
import { About } from './components/About'
import { Tabs } from './components/Tabs'
import Card from './components/Card'
import Life from './components/Life'

function App() {
  return (
    <div className='App'>
      <Heading>Panu Lab 💻</Heading>
      <Text fontSize='md'> This is playground for test anything, Hell Yeah!</Text>
      <Tabs />
      <Life />
      <About />
      <Card />
    </div>
  )
}

export default App
