# **Projeto Node.js + Express + MongoDB + Prisma**

Este projeto é uma **API simples de usuários**, seguido de um tutorial do youtube do canal DevClub. Foi usado o **Express** como servidor, **MongoDB** como banco de dados e **Prisma** como ORM. A API permite **criar, listar, atualizar e deletar usuários**, utilizando o **Prisma Client** para interagir com o MongoDB.

---

## **Como usar**

1. **Clonar o repositório e entrar na pasta do projeto**

    ```
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DO_PROJETO>
    ```

2. **Instalar dependências**

    ```
    npm install
    ```

3. **Criar o arquivo `.env` na raiz do projeto e definir a URL do MongoDB**

    ```env
    DATABASE_URL="sua_string_de_conexao_com_o_mongodb"
    ```

4. **Gerar o Prisma Client**

    ```
    npx prisma generate
    ```

5. **Rodar o servidor**

    ```
    npm run dev
    ```

---

## **Testando a API**

O servidor Express deve iniciar e você poderá acessar as rotas da API, por exemplo:

```
GET http://localhost:3333/usuarios
GET http://localhost:3333/usuarios?name=Maria
