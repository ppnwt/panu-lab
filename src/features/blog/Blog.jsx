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
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

import { blogsIndex } from "../../utils/api/blog";
import BlogItems from './BlogItems';

export default function Life() {
  return (
    <>
      <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      <Heading as="h3">Blog</Heading>
      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            <Box ml='1'>
                {blogsIndex.map((data) => 
                  <BlogItems data={data} />
                )}
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
      <Divider />
    </VStack>
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      <Button
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        onClick={() => {}}>
        See more
      </Button>
    </VStack>
    </>
    )
}
