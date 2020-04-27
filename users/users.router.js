const router = require("express").Router();
const Users = require('./users-model');


router.get("/", (req, res) => {
    Users.find()
      .then(users =>{
          res.json(users)
      })
      .catch(err =>{
          console.log({message:`you are not logged in`, err})
      })
})

module.exports = router; 