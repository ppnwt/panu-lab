import {
  Text,
  Button,
  VStack,
  useColorModeValue,
  useClipboard,
  IconButton,
  Tooltip,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsMedium } from "react-icons/bs";
// import { GoFilePdf } from 'react-icons/go';

export default function Footer() {
  const { hasCopied, onCopy } = useClipboard("panu.brd@gmail.com");
  return (
    <>
      <VStack paddingTop="20px" spacing="2" alignItems="center">
        <Text mt={2} color="gray.500">
          Proudly made by New Panuwat Boonrod
        </Text>
        <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
          <Link href="https://medium.com/@newzpanuwat" target={"_blank"}>
            <IconButton
              aria-label="medium"
              variant="ghost"
              size="lg"
              isRound
              _hover={{
                bg: "green.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              icon={<BsMedium size="28px" />}
            />
          </Link>
          <Link href="https://github.com/newzpanuwat" target={"_blank"}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{
                bg: "gray.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              icon={<BsGithub size="28px" />}
            />
          </Link>
          {/* <Link href="https://drive.google.com/file/d/1gwWY41ssJ1pdZLhPoKTey8pC9AhJqj6s/view?usp=sharing" target={'_blank'}>
            <IconButton
              aria-label="documentPdf"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{
                  bg: 'gray.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
              icon={<GoFilePdf size="28px" />}
            />
            </Link> */}
          <Tooltip label={hasCopied ? "Email Copied!" : "Copy Email"} closeOnClick={false} hasArrow>
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>
        </HStack>
        <Button
          mt={5}
          px={8}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          onClick={() => {}}
        >
          {"Deployed by ▲ Vercel"}
        </Button>
      </VStack>
    </>
  );
}
