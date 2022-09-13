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

import { avatarPhoto, bio } from "../utils/apiMockup";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
      <Heading as="h3">Hello,</Heading>
      <Wrap spacing='30px'>
        <WrapItem>
          <Flex>
            <Avatar src={avatarPhoto} />
            <Box ml='3'>
              <Text as="p" fontSize={'lg'} fontWeight='bold'>
                Panuwat Boonrod
                <Badge ml='1' colorScheme='blue'>New</Badge>
              </Text>
              <Text fontSize={'lg'}>Software Engineer</Text>
              <UnorderedList>
                {bio.map((data) =>  <ListItem key={data.id}>{data.label}</ListItem>)}
              </UnorderedList>
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>
      <Divider />
    </VStack>
    )
}
