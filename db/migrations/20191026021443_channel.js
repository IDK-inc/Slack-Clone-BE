exports.up = function(knex) {
    return knex.schema.createTable('channel', (tbl) => {
  tbl.increments();
  tbl.text('Channel_Name',128);
  tbl.integer('teamID').unsigned().index().references('id').inTable('team');
  tbl.boolean('public');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('channel');
  };
  