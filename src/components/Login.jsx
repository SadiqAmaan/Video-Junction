import {
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

const Login = () => {
  return (
    <Container maxW={'xl'} height={'100vh'} p={'16'} >
      <form>
        <VStack
          alignItems={'stretch'}
          textAlign={'center'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading> Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'} color={'purple.500'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <HStack justifyContent={'right'} p={'2'}>
            <Text textAlign={'right'}>New User?</Text>
            <Button variant={'link'} color={'purple.500'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
