
// Responsável pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        //Campos da tabela
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //relacionamento
        table.string('ong_id').notNullable();

        //Criação da chave estrangeira
        //  toda a vez que esse ong_id esteja preenchido, ele precisa ser um ID que esteja cadastrado na tabela ONG
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };
  
  // Caso vc precise voltar atrás, como deletar a tabela
  exports.down = function(knex) {
      return knex.schema.droptable('incidents');
  };
  
  // para executar método down
  // npx knex migrate:rollback

  // para execurat as migrations usamos
  // npx knex migrate:latest