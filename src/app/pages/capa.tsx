import Image from 'next/image';
import { useState } from 'react';

export default function Capa() {
    const [contador, setContador] = useState<number>(0);
    
    return (
        <section id="sobre-mim" className="mt-24 p-20 w-full dark:bg-black bg-zinc-300 flex flex-col justify-start items-center">
            <div className="flex w-full max-md:flex-col max-md:items-center max-md:justify-center">

                    <div  className="flex w-2/12 justify-start items-center gap-4 max-md:w-full max-md:justify-center">
                        <Image
                            className="animate-fade-right animate-once"
                            src="/media/foto-do-pai.svg"
                            alt="ssss"
                            title='Paulo Henrique Mendes | Desenvolvedor'
                            width={300}
                            height={100}
                        />
                    </div>

                    <div className="animate-fade-up animate-once flex w-10/12 flex-row gap-12 justify-end items-center max-md:w-full max-md:justify-center">
                        <div className="ml-6 text-slate-950 text-2xl font-normal text-start  font-hanken leading-normal">
                        <p>
                            Sou desenvolvedor front-end e gosto de unir criatividade e tecnologia. Transformo protótipos em realidade, desenvolvendo ambientes que atendem às necessidades únicas de cada projeto.
                        </p>
                        </div>
                        <div className='text-gray-950 bg-red-800'>
                            <p>{contador}</p>
                            <button onClick={()=>setContador(contador+1)}>Incrementar</button>
                        </div>
                        
                    </div>
            </div>
        </section>
    )
}