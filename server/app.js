const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./api/user')


const URI = process.env.DB

mongoose.connect(URI).catch(()=>'something wrong')

const app = express()

//middleware
app.use(express.json())
app.use('/todo',router)

app.all('*',(req,res)=>{
    res.status(404).send({data : undefined})
})

app.listen(3000)