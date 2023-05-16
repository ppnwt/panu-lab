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
} from "@chakra-ui/react";

export default function Experiences({ expData }) {
  const [isLargerThan987] = useMediaQuery("(min-width: 987px)");
  const [isLargerThan530] = useMediaQuery("(min-width: 530px)");
  return (
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">Experiences</Heading>
      {isLargerThan987 ? (
        <Grid templateColumns={"repeat(3, 1fr)"} gap={"5"}>
          {expData?.map((data) => (
            <GridItem key={data.id}>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Stack>
                  <Text
                    color={"grey.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.projectName}
                  </Text>
                  <Text color={data.companyColor} fontWeight={500} fontSize={"sm"} letterSpacing={1.1}>
                    {data.companyName}
                  </Text>
                  <Text
                    // color={data.companyColor}
                    fontWeight={500}
                    fontSize={"xs"}
                    letterSpacing={1.1}
                  >
                    {data.position}
                  </Text>
                  <Text
                    color={"grey.500"}
                    // textTransform={'uppercase'}
                    fontWeight={400}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.year}
                  </Text>
                  <Divider />
                  <Text color={"gray.500"}>{data.description}</Text>
                </Stack>
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.frontend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="red">
                    {data.backend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.devops ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.devops}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.database ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="purple">
                    {data.database}
                  </Badge>
                ) : (
                  <></>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : isLargerThan530 ? (
        <Grid templateColumns={"repeat(2, 1fr)"} gap={"4"}>
          {expData.map((data) => (
            <GridItem key={data.id}>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Stack>
                  <Text
                    color={"grey.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.projectName}
                  </Text>
                  <Text color={data.companyColor} fontWeight={500} fontSize={"sm"} letterSpacing={1.1}>
                    {data.companyName}
                  </Text>
                  <Text
                    // color={data.companyColor}
                    fontWeight={500}
                    fontSize={"xs"}
                    letterSpacing={1.1}
                  >
                    {data.position}
                  </Text>
                  <Text
                    color={"grey.500"}
                    // textTransform={'uppercase'}
                    fontWeight={400}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.year}
                  </Text>
                  <Divider />
                  <Text color={"gray.500"}>{data.description}</Text>
                </Stack>
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.frontend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="red">
                    {data.backend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.devops ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.devops}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.database ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="purple">
                    {data.database}
                  </Badge>
                ) : (
                  <></>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid templateColumns={"repeat(1, 1fr)"} gap={"3"}>
          {expData.map((data) => (
            <GridItem key={data.id}>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Stack>
                  <Text
                    color={"grey.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.projectName}
                  </Text>
                  <Text color={data.companyColor} fontWeight={500} fontSize={"sm"} letterSpacing={1.1}>
                    {data.companyName}
                  </Text>
                  <Text
                    // color={data.companyColor}
                    fontWeight={500}
                    fontSize={"xs"}
                    letterSpacing={1.1}
                  >
                    {data.position}
                  </Text>
                  <Text
                    color={"grey.500"}
                    // textTransform={'uppercase'}
                    fontWeight={400}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {data.year}
                  </Text>
                  <Divider />
                  <Text color={"gray.500"}>{data.description}</Text>
                </Stack>
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.frontend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.frontend ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="red">
                    {data.backend}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.devops ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="blue">
                    {data.devops}
                  </Badge>
                ) : (
                  <></>
                )}
                {data.database ? (
                  <Badge textTransform={"none"} mr="1" colorScheme="purple">
                    {data.database}
                  </Badge>
                ) : (
                  <></>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      )}
      <Divider />
    </VStack>
  );
}
