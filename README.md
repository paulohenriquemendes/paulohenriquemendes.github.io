# Paulo Henrique Mendes

Site pessoal publicado com GitHub Pages.

## Estrutura

- `index.html`: estrutura principal do site
- `styles.css`: estilos visuais
- `js/main.js`: inicializacao da pagina
- `js/github.js`: carga e renderizacao dos repositorios
- `js/linkedin.js`: carga e renderizacao das postagens do LinkedIn
- `js/utils.js`: funcoes auxiliares de formatacao e seguranca
- `js/config.js`: configuracoes centrais do site
- `js/dom.js`: referencias do DOM
- `linkedin-posts.json`: arquivo consumido pela secao de postagens do LinkedIn

## Publicacao

O projeto e estatico e pode ser publicado diretamente no GitHub Pages.

## Automacao do LinkedIn

O site le o arquivo `linkedin-posts.json`.

Esse arquivo pode ser atualizado automaticamente pelo workflow:

- `.github/workflows/update-linkedin-posts.yml`

### O que a automacao faz

- abre a pagina de atividade do LinkedIn
- tenta capturar as 3 publicacoes mais recentes
- atualiza o arquivo `linkedin-posts.json`
- faz commit automatico no repositorio quando houver mudanca

### Secret necessario

Para a automacao funcionar melhor, configure no GitHub o secret:

- `LINKEDIN_LI_AT`

### Como configurar no GitHub

1. Abra o repositorio no GitHub
2. Va em `Settings`
3. Va em `Secrets and variables` > `Actions`
4. Clique em `New repository secret`
5. Nome: `LINKEDIN_LI_AT`
6. Valor: cookie `li_at` da sua sessao do LinkedIn

### Como pegar o cookie `li_at`

1. Faça login no LinkedIn no navegador
2. Abra as ferramentas do desenvolvedor
3. Va em `Application` ou `Storage`
4. Abra `Cookies`
5. Selecione `https://www.linkedin.com`
6. Copie o valor do cookie `li_at`
7. Cole esse valor no secret do GitHub

### Observacoes

- esse cookie e sensivel e nao deve ser publicado no codigo
- o LinkedIn pode mudar a estrutura da pagina e quebrar a captura
- se a captura falhar, o site nao mostra posts inventados; a secao apenas fica oculta
