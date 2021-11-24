# Setup

- Utilizar o comando: npm install ou yarn depenendo do seu gerenciador de pacotes para instalar as dependencias necessarias.

- Ter o docker Instalado na maquina
- Usar o comando: docker-compose up para subir as dependencias
- Usar o comando: knex migrate:up para subir as migrations no banco de dados

- Se for preciso, rodar o comando docker inspect **ID do container** para alterar IP do banco

## Rotas para acesso de endpoints

GET
/users

- Listagem de todos os Usuarios

POST
/users

- Salvar um novo usuario

GET
/cards

- Listagem de todas as cartas

POST
/cards

- Salvar uma nova carta

GET
/userhistory

- Listagem de todas as historias

POST
/userhistory

- Salvar uma nova historia de usuario

GET
/votes

- Listagem de todos os votos

POST
/votes

- Salvar um novo voto
