import Cabecalho from './pages/cabecalho';
import Capa from './pages/capa';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        <Cabecalho />
        <Capa />
      </main>
    </>
  );
}
