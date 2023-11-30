const express= require('express')
var app=express()
const router = express.Router()
app.set('view engine', 'ejs');
const mongoose=require('mongoose')
const schema= mongoose.Schema
const postschema= new schema({
    title :String,
    imageurl: String,
    descr: String,
    postid : String
})
const PostModel= mongoose.model('posts', postschema)
router.post('/addnewpost',(req,res)=>{
    const newpost = new PostModel({
        title: req.body.title,
        imageurl:req.body.imageurl,
        descr: req.body.descr,
        postid:req.body.postid
    })
    newpost.save().then(()=>res.send("added successfully")).catch(err=>{console.log(err)})

})

router.get('/getposts',(req,res)=>{
    PostModel.find({}).then(
        data => res.send(data)
      ).catch(
        err => res.send(err)
      );
})

router.post('/getpostdata',(req,res)=>{
    PostModel.find({postid:req.body.postid}).then(data=>res.send(data)).catch(err=>res.send(err))
})

router.post('/updatepost',(req,res)=>{
    PostModel.findOneAndUpdate({postid:req.body.postid},{
        title: req.body.title,
        imageurl: req.body.imageurl,
        descr: req.body.descr
    }).then(()=>res.send("Post Updated Successfully")).catch(err=>res.send(err))
})

router.post('/deletepost',(req,res)=>{
    PostModel.findOneAndDelete({postid:req.body.postid}).
    then(()=>res.send("Post Deleted Successfully"))
    .catch(err=>res.send(err))
})


module.exports= router