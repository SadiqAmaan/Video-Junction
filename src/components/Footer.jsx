import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'} textAlign={['center', 'left']}>
          <Heading size={'lg'} textTransform="uppercase">
            Subscribe for Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2" >
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
              pb={'2'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            VIDEO JUNCTION
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'lg'} >SOCIAL MEDIA</Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'} size={'md'}>
            <a href="https://github.com/SadiqAmaan">
              <HStack justifyContent={'space-evenly'} color={'white'} size={'5'}>
                <AiFillGithub />
                <Text>Follow on Github</Text>
              </HStack>
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'} size={'md'}>
            <a href="https://www.instagram.com/amaan_khan_0324/">
              <HStack justifyContent={'space-evenly'} color={'white'} size={'5'}>
                <AiFillInstagram />
                <Text>Follow on Instagram</Text>
              </HStack>
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
