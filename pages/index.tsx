import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Julião Store</title>
        <meta name='description' content='Loja online do Júlião' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <ProductList />
      </main>
    </>
  );
};

export default Home;
