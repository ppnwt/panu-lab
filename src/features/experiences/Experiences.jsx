// import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  VStack,
  Grid,
  GridItem,
  Divider,
  Badge,
  Avatar,
  useMediaQuery,
} from '@chakra-ui/react';
import { expLists } from "../../utils/api/experiences";

export default function blogPostWithImage() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  return (
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">Experiences</Heading>
      {
        isLargerThan1280 ? 
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
          </Grid> : 
        isLargerThan768 ?
          <Grid templateColumns={'repeat(2, 1fr)'} gap={'4'}>
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
          </Grid> :
        <Grid templateColumns={'repeat(1, 1fr)'} gap={'3'}>
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
      }
      <Divider />
    </VStack>
  );
}