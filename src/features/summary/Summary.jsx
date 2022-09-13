import { Text, Heading, VStack } from "@chakra-ui/react";

export default function Summary (){
  return (
    <>
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">Summary</Heading>
      <Text as="p" fontSize="lg">
        My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure the production and delivery of products and services. 
        My experience as a software engineer enhanced my abilities in designing, implementing, testing, 
        and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies.
      </Text>
    </VStack>
    </>
  )
};
