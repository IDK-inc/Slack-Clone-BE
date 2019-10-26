const router = require("express").Router();
const Members = require("./members-Model");


//Endpoint that gets all of the users on our slack clone.
router.get("/", (req,res) => {

    Members.getMembers()
    .then((members) => {
        res.status(200).json(members);
    })
    .catch((err) => {
        res.status(404).json({message:"Sorry For Some Reason You Failed To Retrieve The Resource.This is a server side error most likely :("})
    })
})

router.post('/', (req,res) => {
    const NewItem = req.body;
    Members.addMember(NewItem)
    .then((members) => {
        res.status(201).json(members);
    })
    .catch((err) => {
        res.status(500).json(err);
    })

})