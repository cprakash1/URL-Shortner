const urlModel=require('../models/schema.js');
const {generate}=require('../urlGenerator.js');
// const validUrl=require('valid-url');

module.exports.getForm=(req,res)=>{
    res.render('form.ejs');
}
module.exports.postForm=async(req,res)=>{
    const {url}=req.body;
    // console.log(validUrl.isUri(url));
    // // if(!validUrl.isUri(url))
    // // return res.redirect('/generate');
    const shorturl=generate(url);
    console.log(url,shorturl);
    const newData=await new urlModel({originalUrl:url,shortUrl:shorturl});
    newData.save();
    res.redirect(`/result/${shorturl}`);
}
module.exports.getResult=async(req,res)=>{
    const data=await urlModel.findOne({shortUrl:req.params.id});
    res.render('result.ejs',{url:data.originalUrl,shortUrl:data.shortUrl});
}
module.exports.redirectRoute=async(req,res)=>{
    const data=await urlModel.findOne({shortUrl:req.params.id});
    console.log(data);
    if(data)
    res.redirect(`https://${data.originalUrl}`);
    else res.send("Sorry not available");
}