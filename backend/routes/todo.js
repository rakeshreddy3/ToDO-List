const express = require('express');
const router = express.Router();
const {TODO} = require('../db')


router.get("/", async(req,res) => {
    const todo = await TODO.find({})
    res.json({todo})
})

router.post("/save", async (req,res) => {
    const {title} =  req.body
    const todo = await TODO.create({title})
    res.json({todo})
})

router.put("/update", async (req,res) => {
    const {_id,title} = req.body
    const updateTodo = await TODO.findByIdAndUpdate(_id,{title})
    res.json({message : "updated successfully"})
})

router.post("/delete", async (req,res) => {
    const {_id} = req.body
    const todo = await TODO.findByIdAndDelete(_id)
    res.json({message : "deleted successfully"})
})



module.exports = router