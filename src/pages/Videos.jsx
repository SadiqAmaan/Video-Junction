import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://www.youtube.com/embed/LXkO4HdQXdo',
    'https://www.youtube.com/embed/oRAtGDKeyYM',
    'https://source.unsplash.com/1920x1080/?tech',
    'https://source.unsplash.com/1920x1080/?tech',
    'https://source.unsplash.com/1920x1080/?tech',
    'https://source.unsplash.com/1920x1080/?tech',
    'https://source.unsplash.com/1920x1080/?tech',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={['100vh']}>
      <VStack w={'full'} p={'15'}>
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <VStack
          alignItems={'flex-start'}
          p={'8'}
          width={'full'}
          overflowY={'auto'}
          m={'10'}
        >
          <Heading>SAMPLE VIDEO 1</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic
            voluptate, ex pariatur fugiat aliquid accusantium mollitia
            blanditiis, autem fugit quos. Ad inventore quod esse, ipsum aliquid
            non veritatis enim unde soluta voluptate incidunt modi sed quam,
            optio sunt odio illum? Quia minus repellendus, eveniet magnam id
            odit fugiat voluptatum aliquid sint molestias? Doloribus in fugit
            odio rerum eos recusandae fuga eius soluta et impedit? Error id
            vitae incidunt officia reprehenderit labore! Voluptatum quidem
            beatae aperiam molestias, quam commodi perspiciatis officiis.
            Blanditiis necessitatibus maiores sed pariatur enim laborum animi
            architecto, tempore delectus itaque doloremque odit ab possimus
            labore fuga vero?
          </Text>
        </VStack>
      </VStack>
      <VStack
        width={['full', 'xl']}
        alignItems={'stretch'}
        padding={'8'}
        spacing={'8'}
        overflowY={'auto'}
        pr={['15', '1.5']}
      >
        {videosArr.map((item, index) => (
          <Button
            direction={['column', 'row']}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
