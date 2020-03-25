 // Para a conexão com o BD
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        //Paginação = retornar 5 de cada vez, por exemplo
        //usage http://localhost:3333/incidents?page=2
            //valor default se não for passado é 1
        const {page = 1} = request.query;

        //contando número total de casos
            //é geralmente retornado pelo header da resposta
        const [count] = await connection('incidents').count();
        //console.log(count);
        response.header('X-Total-Count', count['count(*)']);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //join usado para relacionar dados de 2 tabelas
            .limit(5) //limitar para 5 registros
            .offset((page-1)*5) //pula os n primeiros registros
            .select(['incidents.*','ongs.name', 'ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);
                //como há conflito de campos, selecionamos apenas os campos que queremos de cada tabela
        
        return response.json(incidents);
    },

    async create(request, response) {
        //Dados que vem através da requisição do user
        const {title, description, value} = request.body;
        //Dado da autenticação, localização, idioma, contexto da requisição
            // request.headers.nome dado no header da request no insomnia
        const ong_id = request.headers.authorization;

        //OLDbutSAME const result =... const id = result[0];
        const [id] = await connection('incidents').insert({
            title, description, value, ong_id,
        });

        return response.json({ id });
    },

    async delete(request,response){
        //pegar o parâmetro de rota
        const {id} = request.params;
        //ong_id necessário para verificaçao que a ong que criou está tentando deletar
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id) //buscando incidente onde o ID é igual a o passado no requests.params
            .select('ong_id') //selecionando campo
            .first(); //pegando o primeiro pq só tem um mesmo;
        
        if(incident.ong_id != ong_id) {//se o
            return response.status(401).json({error:'Operation not permitted.'});
            //código de estatus http de erro - não autorizado
        }

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
        //Resposta que deu sucesso mas não tem conteúdo para retornar

    }
};