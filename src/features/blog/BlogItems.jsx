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
} from '@chakra-ui/react'

export default function BlogItems({ data }) {
  return (
    <div key={data.id}>
    <Box p={4} display={{ md: 'flex' }} >
      <Box flexShrink={0}>
        <Image
          borderRadius='lg'
          width={{ md: 40 }}
          src={data.imageUrl}
          alt=''
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='sm'
          letterSpacing='wide'
          color='teal.600'
        >
          Medium
        </Text>
        <Link
          mt={1}
          display='block'
          fontSize='lg'
          lineHeight='normal'
          fontWeight='semibold'
          href={data.url}
          target={'_blank'}
        >
          {data.title}
        </Link>
        <Text mt={2} color='gray.500'>
          {data.description}
        </Text>
        <Text mt={2} color='gray.500'>
          Published on {data.date}
        </Text>
      </Box>
    </Box>
    <Divider />
    </div>
    
  )
}