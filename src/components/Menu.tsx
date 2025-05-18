import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/habilidades">Habilidades</Link>
      <Link href="/experiencia">Experiência</Link>
      <Link href="/formacao">Formação</Link>
      <Link href="/certificados">Certificados</Link>
      <Link href="/projetos">Projetos</Link>
    </nav>
  );
}