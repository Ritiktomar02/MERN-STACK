const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();

app.use(cors())
app.use(express.json());

const PORT=process.env.PORT || 5000;

const approute=require('./routes/Approute');
app.use('/api/v1',approute)

require('./config/database').connect();


app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('ehgewlfs sefwe')
})
