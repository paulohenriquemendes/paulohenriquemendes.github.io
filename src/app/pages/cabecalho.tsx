import Image from "next/image"

export default function Cabecalho() {
    return (
        <header className="p-20 w-full h-40  bg-slate-950 flex flex-col justify-start items-center">
            <div className="flex w-full max-md:flex-col max-md:items-center max-md:justify-center">
                <div className="flex w-6/12 justify-start items-center gap-4 max-md:w-full max-md:justify-center">
                <Image
                    src="/media/isotipo.svg"
                    alt="Isotipo"
                    width={40}
                    height={100}
                />
                <div className="text-zinc-300 text-5xl font-thin font-hanken">MENDES</div>
                <div className="text-zinc-300 text-sm font-normal font-hanken leading-normal">desenvolvimento<br/> & design</div>
                </div>

                <div className="flex w-6/12 flex-row gap-12 justify-end items-center max-md:w-full max-md:justify-center">
                    <a href="#" className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal hover:bg-slate-900">sobre</a>
                    <a href="#" className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal  hover:bg-slate-900">projetos</a>
                    <a href="#" className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal  hover:bg-slate-900">contatos</a>
                </div>
            </div>
        </header>
    )
}