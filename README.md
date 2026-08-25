# React Users Dashboard

Aplicação frontend desenvolvida com **React e TypeScript** para consumo e exibição de dados de usuários através de uma API REST.

O projeto apresenta uma listagem de usuários com busca por texto, filtro por cidade e tratamento dos diferentes estados da requisição.

## 🚀 Funcionalidades

- Listagem de usuários consumidos de uma API REST
- Busca por:
    - Nome
    - Username
    - E-mail

- Filtro por cidade
- Combinação entre busca e filtro
- Contagem de usuários encontrados
- Tratamento de estado de carregamento
- Tratamento de erros da API
- Mensagem para buscas sem resultados
- Interface responsiva para desktop, tablet e mobile

## 🛠️ Tecnologias

- React
- TypeScript
- JavaScript
- HTML
- CSS
- Fetch API
- Vite

## 🌐 API

Os dados utilizados pela aplicação são fornecidos pela **JSONPlaceholder**, através do endpoint de usuários.

A aplicação utiliza a Fetch API para realizar a requisição e trata respostas HTTP que não sejam bem-sucedidas.

## 📁 Estrutura do projeto

```text
src/
├── components/
│   └── Users.tsx
├── services/
│   └── useUser.ts
├── types/
│   └── user.ts
├── App.tsx
└── main.tsx
```

A aplicação busca separar responsabilidades entre componentes, serviços responsáveis pela comunicação com a API e definições de tipos TypeScript.

## 🔎 Filtros

A busca permite localizar usuários através de um único campo utilizando:

- nome;
- username;
- e-mail.

Também é possível selecionar uma cidade específica.

Os dois filtros funcionam simultaneamente, permitindo, por exemplo, pesquisar um usuário por nome dentro de uma determinada cidade.

As opções de cidade são geradas dinamicamente a partir dos usuários retornados pela API, removendo valores duplicados.

## 📱 Responsividade

A listagem utiliza CSS Grid e adapta a quantidade de cards de acordo com o tamanho da tela:

- Desktop: 3 cards por linha
- Tablet: 2 cards por linha
- Mobile: 1 card por linha

## ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/PedroCDLoureiro/api_users
```

Entre na pasta:

```bash
cd api_users
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse no navegador o endereço informado pelo Vite no terminal.

## 🧠 Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- Componentização com React
- Hooks (`useState` e `useEffect`)
- Estados controlados
- Dados derivados de estado
- Consumo de API REST
- Programação assíncrona
- Tratamento de erros
- Tipagem com TypeScript
- Manipulação de arrays com `map` e `filter`
- Remoção de valores duplicados com `Set`
- Renderização condicional
- Responsividade com CSS Grid e Media Queries

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e prática de desenvolvimento frontend.
