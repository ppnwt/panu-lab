// import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  VStack,
  Grid,
  GridItem,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { expLists } from "../../utils/api/experiences";

export default function blogPostWithImage() {
  return (
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">Experiences</Heading>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={'5'}>
        {
          expLists.map((data) => 
          <GridItem key={data.id}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Stack>
              <Text
                color={'grey.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                {data.projectName}
              </Text>
              <Text
                color={data.companyColor}
                fontWeight={500}
                fontSize={'sm'}
                letterSpacing={1.1}>
                {data.companyName}
              </Text>
              <Text
                // color={data.companyColor}
                fontWeight={500}
                fontSize={'xs'}
                letterSpacing={1.1}>
                {data.position}
              </Text>
              <Text
                color={'grey.500'}
                // textTransform={'uppercase'}
                fontWeight={400}
                fontSize={'sm'}
                letterSpacing={1.1}>
                {data.year}
              </Text>
              <Divider />
              <Text color={'gray.500'}>
                {data.description}
              </Text>
            </Stack>
            {data.frontend ? <Badge textTransform={'none'} mr='1' colorScheme='blue'>{data.frontend}</Badge> : <></> }
            {data.frontend ? <Badge textTransform={'none'} mr='1' colorScheme='red'>{data.backend}</Badge> : <></> }
            {data.devops ? <Badge textTransform={'none'} mr='1' colorScheme='blue'>{data.devops}</Badge> : <></> }
            {data.database ? <Badge textTransform={'none'} mr='1' colorScheme='purple'>{data.database}</Badge> : <></> }
          </Box>
        </GridItem>
          )
        }
      </Grid>
      <Divider />
    </VStack>
  );
}