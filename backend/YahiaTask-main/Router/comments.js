const express=require('express');
const router=express.Router();
const commentController=require('../controllers/comments');
const commentValidation=require('../validation/comments');
router.get('/',commentController.getComments);
router.post('/',commentValidation,commentController.addComment);
module.exports=router;