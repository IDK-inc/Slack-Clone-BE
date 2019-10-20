exports.up = function(knex) {
  return knex.schema.createTable('Users_Table', (Table) => {
      Table.increments();
      

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users_Table');
};
