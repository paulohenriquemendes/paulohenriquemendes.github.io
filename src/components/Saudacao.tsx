import { useTheme } from "next-themes";

export default function Saudacao() {
  const { theme } = useTheme();

  return (
    <section className="mb-8 text-center">
      <h1 className={`text-3xl font-extrabold mb-4 ${theme === "dark" ? "text-gray-100" : "text-blue-900"}`}>
        Olá, eu sou Paulo Henrique!
      </h1>
      <p className={`text-base mb-6 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
        Criatividade e tecnologia para experiências digitais únicas.
      </p>
    </section>
  );
}