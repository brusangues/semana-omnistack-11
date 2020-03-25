// importo o express
const express = require('express');
//Importanto módulos de rotas
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//Desacoplo o módulo de rotas do express em uma nova variável
const routes = express.Router();

//ONGS
//Rota para listar as ongs
routes.get('/ongs', OngController.index);
//Cadastro de uma nova ong
routes.post('/ongs', OngController.create);

//INCIDENTS
//Cadastro de um novo Caso
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

//PROFILE
routes.get('/profile', ProfileController.index);

//SESSION
routes.post('/sessions', SessionController.create);

//Deixo as rotas disponíveis para acesso da aplicação (index.js)
module.exports = routes;