// Para a conexão com o BD
const connection = require('../database/connection');
// Para criação do ID criptografado
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        //listagem de ongs
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    

    async create(request, response) {
        // 'request' guarda todos os dados que vem através da requisição do user
        // Desestruturação de cada dado
        const {name, email, whatsapp, city, uf} = request.body;

        //Gera 4 bytes de letras que será utilizado como ID
        const id = crypto.randomBytes(4).toString('HEX');

        //Conexão com BD
        //Operação insert pode demorar, e precisamos retornar só depois dele ser utilizado.
        //Para isso, utilizamos async e await
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        });

        //return response.send('Hello World');
        return response.json({id});
    }
};