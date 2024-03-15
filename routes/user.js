const express=require('express');


const userController=require('../controller/userController');

const router=express.Router();

router.post('/register',userController.RegisterUser);


router.post('/login',userController.LoginUser);


router.get('/login-admin',userController.LoginAdmin);


module.exports=router;