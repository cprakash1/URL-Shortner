const mongoose= require('mongoose');
const schema= mongoose.Schema;

const urlSchema=new schema({
    originalUrl:String,
    shortUrl:String
})

module.exports = mongoose.model('urlModel',urlSchema);