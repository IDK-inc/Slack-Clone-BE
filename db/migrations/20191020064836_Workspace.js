
exports.up = function(knex) {
return knex.schema.createTable("Workspace", (Table) => {
    Table.increments();
    Table.text("Channel",2000).unique()
    
})
};

exports.down = function(knex) {
  
};
