// importo o express
const express = require('express');
//Importanto módulos de rotas
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//Desacoplo o módulo de rotas do express em uma nova variável
const routes = express.Router();
//Importo celebrate para validação
const { celebrate, Segments, Joi } = require('celebrate');

//ONGS
//Rota para listar as ongs
routes.get('/ongs', OngController.index);
//Cadastro de uma nova ong
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);//ordem dos argumentos no Express é importante 

//INCIDENTS
//Cadastro de um novo Caso
routes.post('/incidents',IncidentController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//PROFILE
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);

//SESSION
routes.post('/sessions', SessionController.create);

//Deixo as rotas disponíveis para acesso da aplicação (index.js)
module.exports = routes;