const appmodel=require('../models/appmodel');


exports.createlist=async(req,res)=>{

    try{
      
        const {name,email,age}=req.body;

        const response=await appmodel.create({name,email,age});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.getlist=async(req,res)=>{

    try{
      

        const response=await appmodel.find({});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.getlistbyid=async(req,res)=>{

    try{
      
        const {id}=req.params
        const response=await appmodel.findById({_id:id});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.deletebyid=async(req,res)=>{

    try{
      
        const {id}=req.params
        const response=await appmodel.findByIdAndDelete({_id:id});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.unpdatabyid=async(req,res)=>{

    try{
      
        const {id}=req.params
        const {name,email,age}=req.body
        const response=await appmodel.findByIdAndUpdate({_id:id},{name:name,email:email,age:age},{new:true});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}