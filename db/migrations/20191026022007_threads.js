exports.up = function(knex) {
    return knex.schema.createTable('threads', (tbl) => {
  tbl.increments();
  tbl.text('text',200)
  tbl.integer('channelID').unsigned().index().references('id').inTable('channel');
  tbl.integer('userID').unsigned().index().references('id').inTable('user');
  tbl.integer('reactionID').unsigned().index().references('id').inTable('reactions');
  tbl.timestamp('created_at').defaultTo(knex.fn.now());
  tbl.timestamp('updated_at').defaultTo(knex.fn.now());
})
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('threads');
  };
  