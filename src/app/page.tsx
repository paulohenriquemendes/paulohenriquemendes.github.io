"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import BotaoTema from '../components/BotaoTema';
import RedesSociais from '../components/RedesSociais';
import Projetos from '../components/Projetos';
import IsotipoMarinho from '../components/IsotipoMarinho';
import Blog from '../components/Blog';
import Atividades from '../components/Atividades';
import Contato from '../components/Contato';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <main className="p-4 sm:p-8 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto rounded-xl shadow-lg mt-6 sm:mt-10 flex flex-col items-center transition-colors duration-300">
        <div className="w-full flex justify-end">
          <BotaoTema />
        </div>
        {/* Logo da marca */}
        {theme === "dark" ? (
          <img
            src="/media/isotipo.svg"
            alt="Logo Paulo Henrique Mendes"
            className="w-24 h-auto mb-4 object-contain"
          />
        ) : (
          <IsotipoMarinho className="w-24 h-auto mb-4 text-[#000033] dark:text-gray-100" />
        )}
        <Cabecalho />
        <RedesSociais />
        <section className="mb-8 text-center">
          <p className="text-base sm:text-lg text-azulEscuro dark:text-gray-200">
            Desenvolvedor front-end com habilidades em criar interfaces modernas e intuitivas, focadas na melhor experiência do usuário. Domino desde a prototipagem de telas até o desenvolvimento de soluções digitais personalizadas, garantindo que cada projeto não só funcione bem, mas também tenha um visual clean e atraente.
          </p>
        </section>
        {/* Blocos em colunas no desktop */}
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col">
            <Projetos />
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <Blog />
            <Atividades />
          </div>
        </div>
      </main>
      <Contato />
      <Rodape />
    </>
  );
}