exports.up = function(knex) {
    return knex.schema.createTable('reactions', (tbl) => {
  tbl.increments();
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reactions');
  };
  