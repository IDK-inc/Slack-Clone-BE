exports.up = function(knex) {
    return knex.schema.createTable('team', (team) => {
  team.increments();
  team.text('team_name',128);
  team.integer('owner').unsigned().index().references('id').inTable('user')

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('team');
  };
  