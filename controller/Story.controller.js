const Post=require('../models/post')
const fs=require('fs')
const path=require('path')
async function getStory(req,res,next){
    const post =await Post.find()
    res.json({
        post:post
    })
}
async function postStory(req,res,next){

    const post =new Post({
        image:req.body.image,
        title:req.body.title,
        author:req.body.author,
        timePost:req.body.time,
        story:req.body.story
    })
    
    try {
        await post.save()
        res.json({
            message:'post success'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:'post error'
        })
    }
}

async function editStory(req,res,next){
    const pathImg=path.resolve(__dirname,'../images')+'/'+req.body.prev_img
    fs.unlink(pathImg,(err)=>{
        if(err) console.log(err)
        else{
            console.log('unlink success')
        }
    })
    const post=await Post.findById({_id:req.body.id})
    post.image=req.body.nameImage
    post.title=req.body.title
    post.author=req.body.author
    post.story=req.body.story
    try {
        await post.save()
        res.json({
            message:'edit success'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:'edit error'
        })
    }
}
async function deleteStory(req,res,next){
    const pathImg=path.resolve(__dirname,'../images')+'/'+req.body.prev_img
    fs.unlink(pathImg,(err)=>{
        if(err) console.log(err)
        else{
            console.log('unlink success')
        }
    })
    const post=await Post.findById({_id:req.body.id})
    try {
        await post.remove()
        res.json({
            message:'delete success'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:'delete error'
        })        
    }
}
async function getStoryID(req,res,next){
    const post =await Post.findById({_id:req.body.param})
    res.json({
        post:post
    })
}
module.exports={
    getStory,
    postStory,
    editStory,
    deleteStory,
    getStoryID
}

