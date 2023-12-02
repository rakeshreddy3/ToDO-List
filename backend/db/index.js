const mongoose = require('mongoose');

//Define mongoose schema 
const todoSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    }
})

const TODO = mongoose.model("TODO",todoSchema)

module.exports = {
    TODO
}



