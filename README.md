# RentX API

<p align="center">
  <img src="https://img.shields.io/static/v1?label=rent&message=x&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/rentx?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/rentx?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/rentx?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#rentx">RentX</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto criado durante o módulo II do bootcamp Ignite da Rocketseat na trilha de NodeJS.

## RentX

O RentX é uma API REST para uma aplicação de aluguel de carros desenvolvida em NodeJS, Redis, Postgres e outras tecnologias.

O projeto foi criado durante o segundo módulo do curso que teve como alguns dos conteúdos:

- [x] Criação de aplicações utilizando TypeScript.
- [x] Padrões de código e princípios do SOLID.
- [x] Conceitos importantes como:
  - [x] Casos de uso.
  - [x] Repositórios.
  - [x] Models.
  - [x] Streams.
- [x] Documentação de APIs com Swagger.

O RentX é um projeto completo com muitos conceitos, do básicos ao avançado, e com diversas tecnologias envolvidas como por exemplo:

- [x] Docker.
- [x] Postegres.
- [x] Redis.
- [x] AWS S3.

A documentação da API foi disponibilizada em swagger e as instruções para sua visualização estão disponíveis no tópico [instalação](#instalação).

Deixo abaixo a modelagem do banco de dados da aplicação para um rápida visualização da estrutura que foi construída para essa API:

![Modelagem da aplicação](.github/App%20structure.png)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/rentx.git

# Acesse a pasta do projeto no terminal/cmd
$ cd rentx

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Crie o ambiente com Docker
$ docker-compose up -d --build

# Execute as seeds para popular o banco de dados
$ yarn seed:admin

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# Execute os testes da aplicação
$ yarn test

# O servidor iniciará na porta 3333 - acesse <http://localhost:3333>
# A documentação da API estará disponível na rota /api-docs
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,redis,postgres,ts,jest)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
