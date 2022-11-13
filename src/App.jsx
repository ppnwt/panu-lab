import './App.css'
import { 
  Text, 
  Divider,
  Heading,
  useMediaQuery,
  useColorMode,
  FormControl,
  FormLabel,
  Switch,
  Grid, 
  GridItem
} from '@chakra-ui/react'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/layouts/Footer';

import Summary from './features/summary/Summary'
import Experiences from './features/experiences/Experiences'
import Bio from './features/bio/Bio'
import Blog from './features/blog/Blog'


function App() {
  const [isLargerThan455] = useMediaQuery('(min-width: 455px)')
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className='App'>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={4}> 
        <FormLabel size={18}>Panu Lab 💻</FormLabel>
        </GridItem>
        <GridItem colStart={6} colEnd={10}>
          <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='theme-toggle' mb='0'>
            Dark Mode {colorMode === 'light' ? 'OFF' : 'ON'}
          </FormLabel>
          <Switch id='theme-toggle' isChecked={colorMode === 'dark' ? true : false}  colorScheme='teal' onChange={toggleColorMode} />
        </FormControl>
        </GridItem>
      </Grid>
      <Text fontSize='sm'> This is my playground , Hell Yeah!</Text>
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
