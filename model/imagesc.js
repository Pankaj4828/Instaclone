const { default: mongoose } = require("mongoose");

const postSchema=new mongoose.Schema({
    author:String,
    location:String,
    description:String,
    image:String,
    likes:{type:Number ,default:0},
    date:{type:Date ,default:+new Date() + 7*24*60*60*1000}

});
const imageModel=mongoose.model("imageup",postSchema);
module.exports=imageModel;