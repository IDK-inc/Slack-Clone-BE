const db = require("../db/db-config");

module.exports = {
getUsers
  };

  function getUsers() {
    return db.select('*').from('Users_Table');
  }