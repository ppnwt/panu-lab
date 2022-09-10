import './App.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Badge, Flex, Container, Avatar, Box, Text, Divider, Heading, Center  } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

function App() {
  return (
    <div className='App'>
      <Heading>Panu Lab 💻</Heading>
      <Text fontSize='md'> This is playground for test anything, Hell Yeah!</Text>
      <br />
      <Breadcrumb fontWeight='medium' fontSize='lg'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Articles</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Proof Of Concepts</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Contact me</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
      <Divider />
      <br />

      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            <Avatar src='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
            <Box ml='3'>
              <Text fontWeight='bold'>
                Panuwat Boonrod
                <Badge ml='1' colorScheme='blue'>
                  New
                </Badge>
              </Text>
              <Text fontWeight={'regular'}>Software Engineer</Text>
              <Text fontSize='sm'>
              <ul>
                <li>🔭 Developer at Thai Life Insurance Public Company Limited.</li>
                <li>☕ Latte & Americano addicted</li>
                <li>🌱 I’m currently learning ... in role of Full Stack Developer</li>
                <li>🔆 I'm passionate about learning and development</li>
                <li>📫 How to reach me: @medium</li>
                <li>📘 Codesandbox: @codesandbox</li>
              </ul>
              </Text>
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
    </div>
  )
}

export default App
