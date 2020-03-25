const express = require('express');
const cors = require('cors'); //importando cors que define quem pode acessar a aplicação
const routes = require('./routes.js'); // ponto barra para entender como arquivo e não pacote
const app = express();

app.use(cors())// Permite que todas as aplicações frontend possam acessar esse backend
    //para restringir, fariamos cors({origin:'http://meuapp.com'})

// antes de todas as requisições, converter Json em objeto do JS
app.use(express.json());
app.use(routes);

//Criação da primeira rota
// rota = endereço completo; recurso = /user

/*
Métodos http
* app.GET - buscar listar informação do backend
* POST - criar nova informação  no backend
* PUT - alterar
* DELETE - deletar
*/

/*
Parâmetros
* Query params:parâmetros enviados na rota após '?'. Pode se usar o '&'
*   Para filtros, paginação. São params nomeados
*   Ex: http://localhost:3333/users?page=2&name=Bruno
* Route params: Utilizados para identificar recursos. não são nomeados
*   Identificar único recurso
*   Ex: app.get('/users/:id' ... -> tudo o que vem depois vai 
*       ser nomeado como id do usuário
*   Ex: http://localhost:3333/users/1
*   Acessamos através do const params = request.params;
* Como acessar parâmetros nas rota?
*   Para acessar usuários com nome Bruno: http://localhost:3333/users?name=Bruno
*   Para obter acesso à variável bruno, usamos o _request_
*       const params = request.query;
* Request body: corpo da requisição
*   Utilizado para criar ou alterar recursos
*   Ex: POST http://localhost:3333/users/1
*   Para acessar: app.post('/users'... const body = request.body;
*/



//Aplicação criada
app.listen(3333);
    //localhost:3333
