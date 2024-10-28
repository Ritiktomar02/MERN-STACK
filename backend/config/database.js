const mongoose=require('mongoose');


exports.connect=()=>{

    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("DB connection successful")
    })
    .catch((error)=>{
        console.log("DB connection not successful");
        console.error(error);
        process.exit(1);
    })
}