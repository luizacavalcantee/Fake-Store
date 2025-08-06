# Projeto de Lojinha com Carrinho de Compras em Next.js

Este é um projeto front-end de uma loja virtual simples, construído para demonstrar a integração de um catálogo de produtos com um carrinho de compras funcional e reativo. A aplicação consome dados da [Fake Store API](https://fakestoreapi.com) para exibir produtos e utiliza o Zustand para um gerenciamento de estado global eficiente e persistente.

## ✨ Funcionalidades

  - **Catálogo de Produtos em Carrossel:** Os produtos são carregados da API e exibidos em um carrossel interativo e responsivo.
  - **Detalhes do Produto:** Ao clicar em um produto, um modal é aberto com mais detalhes, como descrição e imagem ampliada.
  - **Carrinho de Compras Inteligente:**
      - Um carrinho de compras desliza da lateral da tela.
      - Adicione produtos ao carrinho diretamente do catálogo ou da tela de detalhes.
      - Altere a quantidade de cada item ou remova-os individualmente.
      - O subtotal e o número total de itens são atualizados em tempo real.
  - **Persistência de Dados:** O conteúdo do carrinho é salvo no `localStorage`, então os itens permanecem mesmo que o usuário recarregue a página ou feche o navegador.
  - **Feedback Visual:**
      - Telas de carregamento (`skeleton loading`) são exibidas enquanto os produtos são buscados.
      - Mensagens de erro são mostradas caso a API falhe.
  - **Interface Moderna:** Construído com Tailwind CSS e componentes `shadcn/ui` para um visual limpo e profissional.

## 🚀 Tecnologias Utilizadas

  - **Framework:** [Next.js](https://nextjs.org/)
  - **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
  - **Gerenciamento de Estado:** [Zustand](https://zustand-demo.pmnd.rs/)
  - **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  - **Biblioteca de Componentes:** [shadcn/ui](https://ui.shadcn.com/)
  - **Requisições HTTP:** [Axios](https://axios-http.com/)
  - **Ícones:** [Lucide React](https://lucide.dev/)

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

  - [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
  - Um gerenciador de pacotes como [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/luizacavalcantee/Fake-Store
    cd fake-store
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

    *ou, se preferir:*

    ```bash
    yarn install
    ```

    *ou:*

    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    *ou:*

    ```bash
    yarn dev
    ```

    *ou:*

    ```bash
    pnpm dev
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e navegue para [http://localhost:3000](http://localhost:3000).