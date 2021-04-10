import mongoose from 'mongoose'
const schema = mongoose.Schema;

const urlSchema = new schema({
    slug : {type : String, required : true, unique : true},
    originalUrl : { type: String, required: true },
    shortUrl: { type: String, required: true },
    expiresAt : {type : Date, required : true}
});

const UrlModel = mongoose.model('Url', urlSchema);

export {UrlModel}
