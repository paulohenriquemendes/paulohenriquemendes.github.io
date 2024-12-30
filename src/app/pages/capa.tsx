import Image from 'next/image';

export default function Capa() {
    return (
        <section className="p-20 w-full s bg-zinc-300 flex flex-col justify-start items-center">
            <div className="flex w-full max-md:flex-col max-md:items-center max-md:justify-center">
                    <div className="flex w-8/12 flex-row gap-12 justify-end items-center max-md:w-full max-md:justify-center">
                        <div className="text-center text-slate-950 text-2xl font-normal font-hanken leading-normal">
                        <p>
                            Sou desenvolvedor front-end e gosto de unir criatividade e tecnologia. Transformo protótipos em realidade, desenvolvendo ambientes que atendem às necessidades únicas de cada projeto.
                        </p>
                        </div>
                    </div>

                    <div className="flex w-4/12 justify-start items-center gap-4 max-md:w-full max-md:justify-center">
                        <Image
                            src="/media/isotipo-marinho.svg"
                            alt="Isotipo"
                            width={100}
                            height={100}
                        />
                    </div>
            </div>
        </section>
    )
}