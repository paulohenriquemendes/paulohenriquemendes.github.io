import { useState } from "react";

export default function Contato() {
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mailto = `mailto:paulomendes961@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;

  return (
    <section className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto mt-16 mb-8 p-6 rounded-xl shadow bg-cinzaClaro dark:bg-azulEscuro">
      <h2 className="text-2xl font-bold mb-4 text-azulEscuro dark:text-gray-100 text-center">
        Entre em contato
      </h2>
      <form
        action={mailto}
        method="GET"
        className="flex flex-col gap-4"
        onSubmit={() => setTimeout(() => { setAssunto(""); setMensagem(""); }, 100)}
      >
        <input
          type="text"
          placeholder="Assunto"
          className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-azulEscuro dark:text-gray-100"
          value={assunto}
          onChange={e => setAssunto(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua mensagem"
          className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-azulEscuro dark:text-gray-100"
          rows={4}
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-azulEscuro text-gray-100 dark:bg-gray-100 dark:text-azulEscuro rounded px-4 py-2 font-semibold hover:bg-blue-900 dark:hover:bg-gray-300 transition"
        >
          Enviar e-mail
        </button>
      </form>
    </section>
  );
}