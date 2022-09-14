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

import { avatarPhoto } from "../../utils/apiMockup";
import { bio } from "../../utils/api/bio";

export default function Life() {
  return (
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      {/* <Wrap spacing='30px' alignItems={'center'}>
        <WrapItem> */}
          {/* <Flex> */}
            <Avatar size={'xl'} src={avatarPhoto} />
            {/* <Box> */}
              <Text as="p" fontSize={'xl'} fontWeight='bold'>
                Panuwat Boonrod (New)
              </Text>
              <Text fontSize={'xl'}>Software Engineer</Text>
              <UnorderedList>
                {bio.map((data) =>  <ListItem key={data.id}>{data.label}</ListItem>)}
              </UnorderedList>
            {/* </Box> */}
          {/* </Flex> */}
        {/* </WrapItem>
      </Wrap> */}
      <Divider />
    </VStack>
    )
}
