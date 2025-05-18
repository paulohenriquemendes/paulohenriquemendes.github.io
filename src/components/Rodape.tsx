export default function Rodape() {
  return (
    <footer className="w-full py-4 text-center bg-cinzaClaro text-azulEscuro dark:bg-azulEscuro dark:text-gray-100 transition-colors duration-300">
      © {new Date().getFullYear()} Paulo Henrique Mendes. Todos os direitos reservados.
    </footer>
  );
}