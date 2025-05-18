
interface Post {
  id: string;
  title: string;
  url: string;
  date: string;
  description: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Como melhorar a experiência do usuário em aplicações web",
    url: "https://www.linkedin.com/in/paulo-henrique-mendes/detail/recent-activity/posts/",
    date: "2024-05-01",
    description: "Dicas práticas para tornar suas interfaces mais intuitivas e agradáveis.",
  },
  {
    id: "2",
    title: "5 tendências de front-end para ficar de olho em 2024",
    url: "https://www.linkedin.com/in/paulo-henrique-mendes/detail/recent-activity/posts/",
    date: "2024-04-15",
    description: "O que está em alta no desenvolvimento web e como se preparar.",
  },
  // ...adicione até 5 posts reais, se quiser
];

export default function Blog() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-azulEscuro dark:text-gray-100 text-center">
        Blog
      </h2>
      <div className="flex flex-col gap-4">
        {posts.slice(0, 5).map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg p-4 shadow transition border bg-cinzaClaro dark:bg-azulEscuro border-azulEscuro dark:border-gray-200 hover:bg-gray-200 dark:hover:bg-[#1a2340] text-azulEscuro dark:text-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-semibold text-lg">{post.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <p className="text-sm mt-1 mb-2">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}