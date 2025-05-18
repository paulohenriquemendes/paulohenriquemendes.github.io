import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/paulohenriquemendes/repos?sort=updated&per_page=20")
      .then((res) => res.json())
      .then((data) => {
        // Filtra apenas os repositórios que possuem descrição
        const filtrados = data.filter((repo: Repo) => repo.description && repo.description.trim() !== "");
        setRepos(filtrados.slice(0, 10)); // Pega os 10 primeiros com descrição
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-azulEscuro dark:text-gray-100 text-center">
        Projetos Desenvolvidos
      </h2>
      {loading ? (
        <p className="text-center text-gray-500">Carregando projetos...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg p-4 shadow transition border bg-cinzaClaro dark:bg-azulEscuro border-azulEscuro dark:border-gray-200 hover:bg-gray-200 dark:hover:bg-[#1a2340] text-azulEscuro dark:text-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="font-semibold text-lg">{repo.name}</span>
                {repo.language && (
                  <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                    {repo.language}
                  </span>
                )}
              </div>
              <p className="text-sm mt-1 mb-2">{repo.description}</p>
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>Atualizado: {new Date(repo.updated_at).toLocaleDateString("pt-BR")}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}