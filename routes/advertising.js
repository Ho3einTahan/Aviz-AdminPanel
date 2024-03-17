const express=require('express');
const advertisingController=require('../controller/advertisingController');

const router=express.Router();



router.post('/new',advertisingController.AddNewAdvertising);


router.get('/delete/:id',advertisingController.DeleteAdvertising);


module.exports=router;