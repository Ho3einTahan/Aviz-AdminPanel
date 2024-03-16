const express=require('express');
const advertisingController=require('../controller/advertisingController');

const router=express.Router();



router.post('/new',advertisingController.AddNewAdvertising);





module.exports=router;