const express=require('express');
const advertisingController=require('../controller/advertisingController');

const router=express.Router();



router.post('/home',advertisingController.AddHomeCategory);

router.post('/mobile',advertisingController.AddMobileCategory);

router.post('/estekhdam',advertisingController.AddEstekhdamCategory);

router.post('/car',advertisingController.AddCarCategory);


router.get('/delete/:id',advertisingController.DeleteAdvertising);


module.exports=router;