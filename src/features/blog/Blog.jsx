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
  useControllableState,
} from '@chakra-ui/react'

import { blogsIndex } from "../../utils/api/blog";
import { blogsAll } from "../../utils/api/blogAll";
import BlogItems from './BlogItems';

export default function Blog() {
  const [blogsList, setBlogs] = useControllableState({ defaultValue: blogsIndex })
  const [full, isFull] = useControllableState({ defaultValue: false })

  const handleLoadMore = () => {
    if (full) {
      setBlogs(blogsIndex)
      isFull(false)
    }else {
      setBlogs(blogsAll)
      isFull(true)
    }
  }

  return (
    <>
      <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      <Heading as="h3">Blog</Heading>
      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            <Box ml='1'>
                {blogsList.map((data) => 
                  <BlogItems data={data} />
                )}
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
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
        onClick={handleLoadMore}>
        { full ? 'See less' : 'See all' }
      </Button>
    </VStack>
    </>
    )
}
