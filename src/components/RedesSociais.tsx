import { useTheme } from "next-themes";
import { BsLinkedin, BsInstagram, BsBehance, BsGithub } from "react-icons/bs";

export default function RedesSociais() {
  const { theme } = useTheme();

  const iconeClasse = "w-6 h-6";
  const botaoClasse = `p-2 rounded-full transition
    ${theme === "dark"
      ? "bg-gray-100 text-[#0a1733] hover:bg-white"
      : "bg-[#0a1733] text-gray-100 hover:bg-blue-900"}
  `;

  return (
    <div className="flex justify-center gap-4 mb-8">
      <a
        href="https://www.linkedin.com/in/paulo-henrique-mendes"
        target="_blank"
        rel="noopener noreferrer"
        className={botaoClasse}
        aria-label="LinkedIn"
      >
        <BsLinkedin className={iconeClasse} />
      </a>
      <a
        href="https://www.instagram.com/phmendes.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={botaoClasse}
        aria-label="Instagram"
      >
        <BsInstagram className={iconeClasse} />
      </a>
      <a
        href="https://www.behance.net/phmendes"
        target="_blank"
        rel="noopener noreferrer"
        className={botaoClasse}
        aria-label="Behance"
      >
        <BsBehance className={iconeClasse} />
      </a>
      <a
        href="https://github.com/paulohenriquemendes"
        target="_blank"
        rel="noopener noreferrer"
        className={botaoClasse}
        aria-label="GitHub"
      >
        <BsGithub className={iconeClasse} />
      </a>
    </div>
  );
}