import { 
  Badge, 
  Flex, 
  Avatar, 
  Box, 
  Text, 
  ListItem,
  UnorderedList,
  Wrap, 
  WrapItem,
  VStack,
  Divider,
  Heading,
} from '@chakra-ui/react'

export default function Life() {
   return (
    <>
    <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      <Heading as="h3">Hello,</Heading>
      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            {/* <Avatar src='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' /> */}
            <Box ml='3'>
              <Text as="p" fontSize={'lg'} fontWeight='bold'>
                Panuwat Boonrod
                <Badge ml='1' colorScheme='blue'>
                  New
                </Badge>
              </Text>
              <Text fontSize={'lg'}>Software Engineer</Text>
             
              <UnorderedList>
                <ListItem>🔭 Developer at Thai Life Insurance Public Company Limited.</ListItem>
                <ListItem>☕ Latte & Americano addicted</ListItem>
                <ListItem>🌱 I’m currently learning ... in role of Full Stack Developer</ListItem>
                <ListItem>🔆 I'm passionate about learning and development</ListItem>
                <ListItem>📫 How to reach me: @medium</ListItem>
                <ListItem>📘 Codesandbox: @codesandbox</ListItem>
              </UnorderedList>
           
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
      <Divider />
    </VStack>
    </>
    
   )
}
