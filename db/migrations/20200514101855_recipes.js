exports.up = function(knex, Promise) {
    return knex.schema.createTable('shows', function(table){
      table.increments();
      table.string('Title').notNullable().unique();
      table.string('Ingredients').notNullable();
      table.string('Method').notNullable();
      table.integer('Dificulty').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shows');
  };