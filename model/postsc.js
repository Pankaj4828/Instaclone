const { default: mongoose } = require("mongoose");


const postScehma=new mongoose.Schema({
   name:String,
    location:String,
    likes:{type:Number ,default:0},
    description:String,
    PostImage: {url: String,
    filename: String},
    image:String,
    date: {type:Date ,default:+new Date() + 7*24*60*60*1000}
  
})
const postModel=mongoose.model("postd",postScehma);
module.exports=postModel;