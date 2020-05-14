exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(table){
      table.increments();
      table.string('Title').notNullable().unique();
      table.string('Ingredients').notNullable();
      table.string('Method').notNullable();
      table.integer('Dificulty').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
  };