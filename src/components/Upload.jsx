import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';


const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={' 16'}>
      <VStack
        color={'purple.500'}
        h={'full'}
        justifyContent={'center'}>  
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
            <HStack>
                <Input required type={'file'} css={{ "&::file-selector-button":{
                    border:'none',
                    width:'50%',
                    height: '100%',
                   margin: 'auto',
                    color:'purple',
                    backgroundColor:'white',
                    cursor:'pointer',
                }}}/>
                <Button colorScheme={'purple'} type={'submit'}> UPLOAD</Button>
            </HStack>
        </form>
        </VStack>
     
    </Container>
  );
};

export default Upload;
