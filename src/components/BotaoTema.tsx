import { useTheme } from "next-themes";

export default function BotaoTema() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Alternar modo noturno"
      className={`ml-auto mb-6 p-2 rounded-full border transition
        ${theme === "dark"
          ? "bg-gray-100 text-blue-900 border-gray-300 hover:bg-white"
          : "bg-blue-900 text-gray-100 border-blue-900 hover:bg-blue-800"}
      `}
    >
      {/* Ícone de lua */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
        />
      </svg>
    </button>
  );
}