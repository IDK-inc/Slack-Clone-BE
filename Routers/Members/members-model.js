const db = require("../../config/db-config");

module.exports = {
getMembers
  };

  function getMembers() {
    return db.select('*').from('member');
  }