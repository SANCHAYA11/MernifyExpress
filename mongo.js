const mongoose= require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/merncrud',{useNewUrlParser: true, useUnifiedTopology:true})
 .then(()=>console.log("Mongo connected successfully")).catch((err)=>console.log(err))

const dbobj = mongoose.connection
dbobj.on('connected',()=>{console.log('Mongodb Connection Successful')})
dbobj.on('error',()=>{console.log('Failed')})

 module.exports = mongoose 