import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'PH Portfólio',
  description:
    'Portfólio de Paulo Henrique Mendes: desenvolvedor full-stack especializado em Typescript, Spring Boot, Java, UI/UX Design e Figma. Veja projetos, blog, atividades e redes sociais em um só lugar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/isotipo.svg" type="image/svg+xml" />
        {/* Ou use favicon.ico se preferir */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body className="bg-cinzaClaro dark:bg-azulEscuro transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
