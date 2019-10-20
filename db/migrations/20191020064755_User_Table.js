exports.up = function(knex) {
    return knex.schema.createTable('User_Table', (Table) => {
        Table.increments();
        Table.text("email",128).notNullable();
        Table.text("username",128).notNullable();
        Table.text("password",128).notNullable();
  
    })
  };
  

exports.down = function(knex) {
  
};
