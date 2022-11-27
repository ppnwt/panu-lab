import { 
  Avatar, 
  Text, 
  ListItem,
  UnorderedList,
  VStack,
  Divider,
} from '@chakra-ui/react'

import { avatarPhoto } from "../../utils/api/images";
import { bio } from "../../utils/api/bio";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      <Avatar size={'xl'} src={avatarPhoto} />
        <Text as="p" fontSize={'xl'} fontWeight='bold'>
          Mr. Panuwat Boonrod (New)
        </Text>
        <Text fontSize={'xl'}> Full Stack Developer (React)</Text>
        <UnorderedList>
          {bio.map((data) =>  <ListItem key={data.id}>{data.label}</ListItem>)}
        </UnorderedList>
      <Divider />
    </VStack>
    )
}
