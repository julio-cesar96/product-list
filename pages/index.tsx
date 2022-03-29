import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { HiOutlineCollection } from 'react-icons/hi';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Center h='100vh' flexDir={'column'}>
          <HiOutlineCollection size='30px' color='red' />
          <Text fontSize={'3xl'} fontWeight={900} color='red.500'>
            Welcome to my starter template
          </Text>
        </Center>
      </main>
    </>
  );
};

export default Home;
