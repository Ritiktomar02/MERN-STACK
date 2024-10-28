const express=require("express");

const router=express.Router();

const {createlist,getlist,getlistbyid,deletebyid}=require('../controller/appcontroller');


router.post('/createlist',createlist)
router.get('/getlist',getlist)
router.get('/getlistbyid/:id',getlistbyid);
router.delete('/deletebyid',deletebyid);


module.exports=router;