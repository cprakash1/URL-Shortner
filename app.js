require('dotenv').config();
const express=require('express');
const app= express();
const path= require('path');
const mongoose= require('mongoose');
const ejsmate= require('ejs-mate');
const router=require('./Router/router.js');


app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.engine('ejs',ejsmate);
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.url,req.method);
    next();
})

//mongoconnect
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected");
}).catch(err=>console.log(err));




app.use('/',router);


app.listen(3000,()=>{
    console.log("Server is starting");
})