import {  
  Flex, 
  Box, 
  Wrap, 
  WrapItem,
  VStack,
  Heading,
  Button,
  useColorModeValue,
  useControllableState,
} from '@chakra-ui/react'

import { blogsAll } from "../../utils/api/blogAll";
import BlogItems from './BlogItems';

export default function Blog() {
  const blogsLength = blogsAll.length
  const blogsFiltered = blogsAll.filter(blog => blog.id > blogsLength - 3)
  const [blogsList, setBlogs] = useControllableState({ defaultValue: blogsFiltered })
  const [full, isFull] = useControllableState({ defaultValue: false })

  const handleLoadMore = () => {
    if (full) {
      setBlogs(blogsFiltered)
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
                  <BlogItems key={data.id} data={data} />
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
