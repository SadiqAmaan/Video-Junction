import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxWidth={'container.xl'} minHeight={'100vh'} padding={'16'}>
        <Stack
          h="full"
          p="4"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign="center"
          >
            <Heading
              textTransform={'uppercase'}
              py="2"
              w="fit-content"
              borderBottom={'2px solid'}
              margin="auto" mb={['2', '10']}            >
              Services
            </Heading>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsa
            quia mollitia repudiandae pariatur maxime quasi quisquam. Libero
            iure mollitia repellat ad doloribus a eius deleniti fuga dolore. Aut
            veritatis ad optio autem cum tenetur sequi pariatur, et blanditiis
            nihil iste doloremque eaque aspernatur repellendus ipsum! Quibusdam
            voluptate laboriosam sunt autem nostrum quo rerum odio fugit eaque.
            Veniam ipsum iste perspiciatis corrupti explicabo eos mollitia enim
            illo sed, autem nihil sit consequatur molestiae officia iusto
            aliquam? Nostrum, fugit quia! Neque omnis dolor ad corrupti magnam
            placeat molestias repellendus magni quasi nulla expedita animi
            deleniti inventore blanditiis, pariatur a. Facilis, provident?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'100%'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        {' '}
        Watch The Future
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        {' '}
        GAMING IS FUTURE
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        {' '}
        GAMING ON CONSOLE
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        {' '}
        Watch The Future
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
