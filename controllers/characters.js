const express = require("express")
const router = express.Router()

const Character = require('../db/models/characters')

// List all characters
router.get("/", (req, res) => {
    Character.find({}).then(allcharacters => res.json(allcharacters))
  })


//Create a villain
router.post("/", (req, res) => {

    Character.create(req.body).then(character =>{
        console.log(character)
        res.json(character)
    })
  })
  
  // Update
  router.put('/update/:id', (req,res) => {
    Character.findOneAndUpdate({_id: req.params.id}, req.body)  
    .then(updated => {
        res.json(updated)
    })
  })
  
  // Delete
  router.delete("/delete/:id", (req, res) => {
    Character.deleteOne({_id: req.params.id})
    .then(deleted => {
        console.log(deleted)
        res.json(deleted)
    })
  })
  
  
  
  module.exports = router