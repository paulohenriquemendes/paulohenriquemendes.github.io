
interface Atividade {
  id: string;
  title: string;
  url: string;
  date: string;
  type: "post" | "artigo" | "comentário" | "compartilhamento";
  description?: string;
}

const atividades: Atividade[] = [
  {
    id: "1",
    title: "Compartilhou artigo sobre UX Design",
    url: "https://www.linkedin.com/in/paulo-henrique-mendes/detail/recent-activity/shares/",
    date: "2024-05-10",
    type: "compartilhamento",
    description: "Compartilhei um artigo interessante sobre tendências de UX Design em 2024.",
  },
  {
    id: "2",
    title: "Comentou em uma discussão sobre React",
    url: "https://www.linkedin.com/in/paulo-henrique-mendes/detail/recent-activity/comments/",
    date: "2024-04-28",
    type: "comentário",
    description: "Participei de uma discussão sobre melhores práticas em React.",
  },
  {
    id: "3",
    title: "Publicou post sobre carreira dev",
    url: "https://www.linkedin.com/in/paulo-henrique-mendes/detail/recent-activity/posts/",
    date: "2024-04-20",
    type: "post",
    description: "Falei sobre minha trajetória e dicas para quem está começando na área de desenvolvimento.",
  },
  // ...adicione mais atividades relevantes
];

export default function Atividades() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-azulEscuro dark:text-gray-100 text-center">
        Atividades Recentes
      </h2>
      <div className="flex flex-col gap-4">
        {atividades.map((atividade) => (
          <a
            key={atividade.id}
            href={atividade.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg p-4 shadow transition border bg-cinzaClaro dark:bg-azulEscuro border-azulEscuro dark:border-gray-200 hover:bg-gray-200 dark:hover:bg-[#1a2340] text-azulEscuro dark:text-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-semibold text-lg">{atividade.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(atividade.date).toLocaleDateString("pt-BR")}
              </span>
            </div>
            {atividade.description && (
              <p className="text-sm mt-1 mb-2">{atividade.description}</p>
            )}
            <span className="text-xs italic text-gray-400">{atividade.type}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
