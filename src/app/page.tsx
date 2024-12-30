import Cabecalho from './pages/cabecalho';
import Capa from './pages/capa';
import Head from 'next/head';
import Rodape from './rodape';
import Itens from './pages/itens';

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
        <Rodape />
        <Itens/>
      </main>
    </>
  );
}
