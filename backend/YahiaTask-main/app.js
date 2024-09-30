const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const helmet=require('helmet');
require('dotenv').config();
const port=process.env.PORT;
const mongoose=require('mongoose');
const MongoURI=process.env.MongoURI;
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());  
 const commentRouter=require('./Router/comments');
 app.use('/comments',commentRouter);

app.use((err,req,res,next)=>{
    const {message,statusCode}=err;
    res.status(statusCode).json({error:message});
})

mongoose.connect(MongoURI).then(()=>{
    console.log('connected to mongodb');
    app.listen(port,()=>{
        console.log(`app is listening on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})




