const express=require('express')
const router=express.Router();
const multer=require('multer')
const accountController=require('../controller/handleAccount')
const postController=require('../controller/Story.controller')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.nameFile)
    }
})
const upload=multer({storage:storage})
// const upload=multer({dest:"../images/"})

router.route('/signup')
    .post(accountController.signUp)
router.route('/login')
    .post(accountController.login)
router.route('/checkToken')
    .post(accountController.checkToken)

router.route('/story')
    .get(postController.getStory)
    .post(postController.postStory)
    .put(postController.editStory)
    .delete(postController.deleteStory)
router.route('/storyImage')
    .post(upload.single('image'),(req,res)=>{
        // console.log(req.file)
        res.json('file image was store in server !')
    })
router.route('/storyID')
    .post(postController.getStoryID)
module.exports=router