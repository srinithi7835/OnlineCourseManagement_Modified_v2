const express=require("express");const router=express.Router();router.get("/",(req,res)=>res.json({success:true,message:"Route is ready"}));module.exports=router;
