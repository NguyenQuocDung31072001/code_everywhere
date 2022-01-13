const mongoose=require('mongoose')

const Post=new mongoose.Schema({
    image:{
        type:String,
        
    },
    title:{
        type:String,
    },
    author:{
        type:String,
    },
    timePost:{
        type:String,
    },
    story:{
        type:String,
    }
})

module.exports=mongoose.model('post',Post,'post')