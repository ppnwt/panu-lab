import { 
  Avatar, 
  Text, 
  ListItem,
  UnorderedList,
  VStack,
  Divider,
  Heading,
} from '@chakra-ui/react'

import { avatarPhoto } from "../../utils/apiMockup";
import { bio } from "../../utils/api/bio";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      <Avatar size={'xl'} src={'/src/assets/panu_avatar.png'} />
        <Text as="p" fontSize={'xl'} fontWeight='bold'>
          Panuwat Boonrod (New)
        </Text>
        <Text fontSize={'xl'}>I am Software Engineer</Text>
        <UnorderedList>
          {bio.map((data) =>  <ListItem key={data.id}>{data.label}</ListItem>)}
        </UnorderedList>
      <Divider />
    </VStack>
    )
}
