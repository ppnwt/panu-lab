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
  Link,
} from '@chakra-ui/react'

import { blogs } from "../../utils/api/blog";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      <Heading as="h3">Blog</Heading>
      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            <Box ml='1'>
              <UnorderedList>
                {blogs.map((data) =>  <ListItem key={data.id}>
                  {data.date}: <Link colorScheme={'blue.500'} href={data.url}>{data.title}</Link>
                </ListItem>)}
              </UnorderedList>
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
      <Divider />
    </VStack>
    )
}
