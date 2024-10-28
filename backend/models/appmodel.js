const mongoose=require('mongoose');


const appmodel=new mongoose.Schema({

    name:{
        type:String,
        requird:true
    },

    email:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    }

},{timestamps:true})



module.exports=mongoose.model('appmodel',appmodel);