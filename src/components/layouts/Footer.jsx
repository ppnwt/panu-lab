import {
  Text,
  Button,
  VStack,
  useColorModeValue,
  useClipboard,
  IconButton,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import {
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';
import { BsGithub, BsMedium } from 'react-icons/bs';

export default function Footer() {
  const { hasCopied, onCopy } = useClipboard('panuwat.brd@gmail.com');
  return (
    <>
    <VStack paddingTop="20px" spacing="2" alignItems="center">
      <Text mt={2} color='gray.500'>
        Proudly made by New Panuwat Boonrod
      </Text>
        <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start">
          <IconButton
            aria-label="medium"
            variant="ghost"
            size="lg"
            isRound
            _hover={{
                bg: 'green.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
            icon={<BsMedium size="28px" />}
            // onClick={''}
          />
          <IconButton
            aria-label="location"
            variant="ghost"
            size="lg"
            isRound
            _hover={{
                bg: 'red.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
            icon={<MdLocationOn size="28px" />}
            // onClick={''}
          />
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{
                bg: 'gray.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
            icon={<BsGithub size="28px" />}
            // onClick={''}
          />
          <Tooltip
            label={hasCopied ? 'Email Copied!' : 'Copy Email'}
            closeOnClick={false}
            hasArrow>
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>
        </HStack>
        <Button
          mt={5}
          px={8}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          onClick={() => {}}>
          {'Deployed by ▲ Vercel' }
        </Button>
      </VStack>
    </>
  )
}