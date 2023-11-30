const express = require('express')
const app = express()
const dbfile = require('./mongo')
const postroute = require('./routes/post')

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))

app.use('/api/post',postroute)



app.listen(5000,(req,res)=>{
    console.log("Nodejs and Expresss server started successfully with nodemon");
})