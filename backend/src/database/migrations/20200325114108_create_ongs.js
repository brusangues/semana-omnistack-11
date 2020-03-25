
// Responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      //Campos da tabela
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //2 é o tamanho fixo
  })
};

// Caso vc precise voltar atrás, como deletar a tabela
exports.down = function(knex) {
    return knex.schema.droptable('ongs');
};
