# Setup

- Utilizar o comando: npm install ou yarn depenendo do seu gerenciador de pacotes para instalar as dependencias necessarias.

- Ter o docker Instalado na maquina
- Usar o comando: docker-compose up para subir as dependencias
- Usar o comando: knex migrate:up para subir as migrations no banco de dados

- Se for preciso, rodar o comando docker inspect **ID do container** para alterar IP do banco

## Rotas para acesso de endpoints

**Metodo GET**

/users

\*_Listagem de todos os Usuarios_

**Metodo POST**

/users

\*_Salvar um novo usuario_

**Metodo GET**

/cards

\*_Listagem de todas as cartas_

**Metodo POST**

/cards

\*_Salvar uma nova carta_

**Metodo GET**

/userhistory

\*_Listagem de todas as historias_

**Metodo POST**

/userhistory

\*_Salvar uma nova historia de usuario_

**Metodo GET**

/votes

\*_Listagem de todos os votos_

**Metodo POST**

/votes

\*_Salvar um novo voto_
