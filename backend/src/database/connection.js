//Necessário para realizar a conexão entre BC e rotas
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;