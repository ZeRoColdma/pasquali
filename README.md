# Setup

- Utilizar o comando: npm install ou yarn depenendo do seu gerenciador de pacotes para instalar as dependencias necessarias.

- Ter o docker Instalado na maquina
- Usar o comando: docker-compose up para subir as dependencias
- Usar o comando: knex migrate:up para subir as migrations no banco de dados

- Se for preciso, rodar o comando docker inspect **ID do container** para alterar IP do banco

## Rotas para acesso de endpoints

- Rotas com o Middleware **auth** só serão acessiveis utilizando o Token

/ **Rota de controle**

/users GET UsersController.index

- Listagem de todos os Usuarios

/users POST UsersController.store

- Salvar um novo usuario

/cards GET CardsController.index

- Listagem de todas as cartas

/cards POST CardsController.store

- Salvar uma nova carta

/userhistory GET UserHistoryController.index

- Listagem de todas as historias

/userhistory POST UserHistoryController.store

- Salvar uma nova historia de usuario

/votes GET VotesController.index

- Listagem de todos os votos

/votes POST VotesController.store

- Salvar um novo voto
