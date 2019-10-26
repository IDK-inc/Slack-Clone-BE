const db = require("../../config/db-config");

module.exports = {
getMembers,
addMember
  };

  function getMembers() {
    return db.select('*').from('member');
  }
  
  
  function addMember(stuff) {
    return db("members").insert(stuff, "id");
  }