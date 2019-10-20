
exports.up = function(knex) {
 return knex.schema.createTable('Workspaces', (Table) =>{
     Table.increments();
     Table.bigInteger('Workspace_IDS').unsigned().index().references('id').inTable('Workspace')

    }) 
};

exports.down = function(knex) {
  
};
