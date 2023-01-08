import {
    Avatar,
    Button,
    Container,
    Heading,
    HStack,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'xl'} height={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textAlign={'center'} color={'purple.500'}>VIDEO JUNCTION</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input
              placeholder={'Enter Your Name'}
              type={'text'}
              required
              focusBorderColor="purple.500"
            />
            <Input
              placeholder={'Enter email'}
              type={'email'}
              required
              focusBorderColor="purple.500"
            />
            <Input
              placeholder={'Enter password'}
              type={'password'}
              required
              focusBorderColor="purple.500"
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Sign Up
            </Button>
  
            <HStack justifyContent={'right'} p={'2'}>
              <Text textAlign={'right'}>Already a User?</Text>
              <Button variant={'link'} color={'purple.500'}>
                <Link to={'/login'}>Log in</Link>
              </Button>
            </HStack>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  