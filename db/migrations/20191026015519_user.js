exports.up = function(knex) {
    return knex.schema.createTable('user', (tbl) => {
  tbl.increments();
  tbl.text('username',128);
  tbl.text('email',128);
  tbl.text('password',128);
  tbl.timestamp('created_at').defaultTo(knex.fn.now());
  tbl.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
  };
  