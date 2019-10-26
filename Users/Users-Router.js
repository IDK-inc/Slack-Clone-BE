const router = require("express").Router();
const UsersTable = require("./Users-Model");


//Endpoint that gets all of the users on our slack clone.
router.get("/", (req,res) => {
    UsersTable.getUsers()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(404).json({message:"Sorry For Some Reason You Failed To Retrieve The Resource.This is a server side error most likely :("})
    })
})