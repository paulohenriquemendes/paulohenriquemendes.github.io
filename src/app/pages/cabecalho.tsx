"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Cabecalho() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 300, 0.5); // Ajuste os valores conforme necessário
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full p-20 h-40 max-md:h-60 bg-slate-950 flex flex-col justify-start items-center z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="flex w-full max-md:flex-col max-md:items-center max-md:justify-center">
        <div className="flex w-6/12 justify-start items-center gap-4 max-md:w-full max-md:justify-center">
          <Image
            src="/media/isotipo.svg"
            alt="Isotipo"
            width={40}
            height={100}
          />
          <div className="text-zinc-300 text-5xl font-thin font-hanken">MENDES</div>
          <div className="text-zinc-300 text-sm font-normal font-hanken leading-normal">
            desenvolvimento<br /> de Sistemas
          </div>
        </div>

        <div className="ml-10 flex w-6/12 flex-row gap-12 justify-end items-center max-md:w-full max-md:justify-center max-md:mt-6">
          <a href="#sobre-mim" className="w-1/6 max-md:w-2/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal hover:bg-slate-900">
            sobre
          </a>
          <a href="#" className="w-1/6 max-md:w-2/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal hover:bg-slate-900">
            projetos
          </a>
          <a href="#" className="w-1/6 max-md:w-2/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal hover:bg-slate-900">
            contatos
          </a>
        </div>
      </div>
    </header>
  );
}