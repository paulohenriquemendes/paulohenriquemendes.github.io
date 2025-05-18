import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

export default function Habilidades() {
  return (
    <>
      <Menu />
      <main className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Habilidades</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>UX/UI: Figma</li>
          <li>Front-end: HTML, CSS, JS, TS, React, Angular, Ionic</li>
          <li>Back-end: NextJS, Java, Spring Boot, Node.js</li>
          <li>Bancos: SQL Server, MySQL, MongoDB, Firebase</li>
        </ul>
      </main>
      <Rodape />
    </>
  );
}