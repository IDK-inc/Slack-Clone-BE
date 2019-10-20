exports.up = function(knex) {
  return knex.schema.createTable('Users_Table', (Table) => {
      Table.increments();
      table.bigInteger('User-Table').unsigned().index().references('id').inTable('User_Table')


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users_Table');
};
