## Como rodar o Projeto

- Instale o [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- Faça um git clone em sua máquina

- Back-end

1. Entre na pasta mock-api

```
cd mock-api
```

2. Instale as dependências

```
yarn
```

3. Suba o servidor

```
yarn server
```

- Front-end:

1. Abra novo terminal para acessar a raiz do projeto
2. Instale as dependências

```
yarn
```

3. Dê o build na aplicação

```
yarn build
```

4. Suba o servidor

```
yarn start
```

- Acesse http://localhost:3000

## Documentação

- Next.js: para entrega de uma SPA, mas preservando os benefícios de SEO
- Json-server: para a mock-api
- Axios: para requisições api com mais facilidade na manipulação dos dados
- Rotas dinâmicas: uso das rotas dinâmicas para criar apenas uma página para cada produto
  e fazer a requisição api somente de acordo com o produto escolhido
- Context API: api nativa e não verbosa para gerenciar os estados globais da aplicação
