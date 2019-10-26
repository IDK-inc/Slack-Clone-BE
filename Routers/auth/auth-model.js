const db = require('../../config/db-config.js');
module.exports = {
    add,
    findBy,
    findById
}
async function add(user) {
    const [id] = await db('user').insert(user);

    return findById(id) 
}
function findBy(filter) {
    return db('user').where(filter);
}
function findById(id) {
    return db('user')
        .where({ id })
        .first();
}