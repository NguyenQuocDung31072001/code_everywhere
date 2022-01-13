const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const routerAccount=require('./routers/router')
const path=require('path')
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect("mongodb://localhost/auth_app",{useNewUrlParser:true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', error=> console.error(error))
db.once('open', ()=> console.log('connected to mongoose'))
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
app.use(cors())
app.use('/',routerAccount)


app.listen(5000,()=>{
    console.log('server start success')
})