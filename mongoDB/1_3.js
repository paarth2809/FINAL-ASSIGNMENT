const mongoose=require('mongoose')
const blog=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
},{timestamps: true,versionKey: false})

module.exports=mongoose.model("blogs",blog)