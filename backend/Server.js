const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const routes = require('./routes/todo')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://0.0.0.0:27017/todoApp_1', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes)

app.listen(3002,() => console.log('server is running at 3002'))



