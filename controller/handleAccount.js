const Account=require('../models/account')
const jwt=require('jsonwebtoken')

async function login(req,res,next){
    const accountValid=await Account.findOne({username:req.body.username,password:req.body.password})
    if(accountValid){
        const token=jwt.sign(accountValid.id,'secret')
        res.json({
            message:'login success',
            token:token
        })
    }else{
        res.json({
            message:'login fail'
        })
    }
}
async function signUp(req,res,next){
    
    const accountValid=await Account.findOne({username:req.body.username})
    
    if(accountValid){
        res.json({
            message:'username exits'
        })
    }
    const account =new Account({
        username:req.body.username,
        password:req.body.password
    })
    try {
        await account.save()
        res.json({
            message:'sign up success'
        })
    } catch (error) {
        console.log(error)
    }
}
async function checkToken(req,res,next){
    try {
        const token=jwt.verify(req.body.token,'secret')
        if(token){
            res.json({
                message:'tokenTrue'
            })
        }
    } catch (error) {
        res.json({
            message:'tokenFalse'
        })
    }
}

module.exports={
    login,
    signUp,
    checkToken
}