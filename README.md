<h1 align="center">
  <br>
    <img src="https://github.com/DouglasFuelber/gostack-github-explorer-web/blob/master/src/assets/logo.svg" alt="Github Explorer" width="400">
  <br>
</h1>

<h3 align="center">Um explorador de repositórios do Github</h3>

<p align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/DouglasFuelber/gostack-github-explorer-web?style=flat-square">
  <a href="https://github.com/DouglasFuelber/gostack-github-explorer-web/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/DouglasFuelber/gostack-github-explorer-web?style=flat-square"></a>
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DouglasFuelber/gostack-github-explorer-web?style=flat-square">
  <a href="https://github.com/DouglasFuelber/gostack-github-explorer-web/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/DouglasFuelber/gostack-github-explorer-web?style=flat-square"></a>
</p>

<p align="center">
  <a href="#descrição">Descrição</a> -
  <a href="#funcionalidades">Funcionalidades</a> -
  <a href="#tecnologias">Tecnologias</a> -
  <a href="#como-executar">Como executar</a> -
  <a href="#créditos">Créditos</a> -
  <a href="#licença">Licença</a>
</p>

## Descrição

O Github Explorer é uma aplicação web que utiliza a API do Github para realizar consultas de repositórios e visualizar seus detalhes, como descrição, stars, forks e issues abertas. Além disso, após a busca os repositórios ficam armazenados no *Local Storage* do navegador.

<img src="https://github.com/DouglasFuelber/gostack-github-explorer-web/blob/master/demo.gif" width="100%" alt="Github Explorer demo" />

## Funcionalidades
- Busca de repositório no Github através do NomeAutor/NomeDoRepositório.
  - Exemplo: DouglasFuelber/gostack-github-explorer-web
- Validações de busca vazia, repositórios já consultados e repositórios não existentes no Github
- Visualização de detalhe do repositório
  - Nome
  - Descrição
  - Avatar
  - Número de Stars
  - Número de Forks
  - Número de Issues abertas
  - Listagem de issues com as respectivas URLs para o Github
- Armazenamento da listagem de repositórios buscados no *Local Storage* do navegador

## Tecnologias
- <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a>
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
- <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">API do Github</a>
- <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>
- <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a>

## Como executar
Para executar este projeto vai precisar ter instalado em seu computador o <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">GIT</a> e o <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn</a>.
Tendo essas duas ferramentas instaladas, você executa através do seu *prompt*, dentro do diretório que deseja armazenar o projeto, os seguintes comandos:

```bash
# Clona este repositório
$ git clone https://github.com/DouglasFuelber/gostack-github-explorer-web.git

# Acessa o repositório clonado
$ cd gostack-github-explorer-web

# Instala as dependências
$ yarn

# Executa o projeto
$ yarn start
```

Após isso o projeto estará executando no seu <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> ou em outra porta que você configurar.

## Créditos
Este projeto foi desenvolvido durante o Bootcamp GoStack 11 da <a href="https://rocketseat.com.br/" target="_blank" rel="noopener noreferrer">Rocketseat</a>.

## Licença
Esse projeto está sob a licença [MIT](https://github.com/DouglasFuelber/gostack-github-explorer-web/blob/master/LICENSE) © [Douglas Fuelber](https://github.com/DouglasFuelber)
