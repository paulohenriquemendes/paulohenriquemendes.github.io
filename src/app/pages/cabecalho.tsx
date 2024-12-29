import Image from "next/image"

export default function Cabecalho() {
    return (
        <header className="p-20 w-full h-80  bg-slate-950 flex flex-col justify-start items-center">
            <div className="flex w-full">
                <div className="flex w-4/12 justify-start items-center gap-4">
                <Image
                    src="/media/isotipo.svg"
                    alt="Isotipo"
                    width={40}
                    height={112}
                />
                <div className="text-zinc-300 text-5xl font-thin font-hanken">MENDES</div>
                <div className="text-zinc-300 text-sm font-normal font-hanken leading-normal">desenvolvimento<br/> & design</div>
                </div>

                <div className="flex w-8/12 flex-row gap-12 justify-end items-center">
                    <div className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal hover:bg-slate-900">sobre</div>
                    <div className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal  hover:bg-slate-900">projetos</div>
                    <div className="w-1/6 text-center text-zinc-300 text-2xl font-normal font-hanken leading-normal  hover:bg-slate-900">contatos</div>
                
                </div>
            </div>
        </header>
    )
}