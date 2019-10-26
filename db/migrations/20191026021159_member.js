exports.up = function(knex) {
    return knex.schema.createTable('member', (tbl) => {
  tbl.increments();
  tbl.integer('teamID').unsigned().index().references('id').inTable('team')

  tbl.integer('userID').unsigned().index().references('id').inTable('user')

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('member');
  };
  