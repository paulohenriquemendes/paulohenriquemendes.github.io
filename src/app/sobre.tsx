import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

export default function Sobre() {
  return (
    <>
      <Menu />
      <main className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Sobre Mim</h2>
        <p className="text-gray-700">
          Sou desenvolvedor web focado em UX/UI e soluções modernas para web e mobile.
        </p>
      </main>
      <Rodape />
    </>
  );
}