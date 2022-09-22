const express=require("express")
const mongoose=require("mongoose")
var bodyParser = require('body-parser')
const postn=require("./routes/postsd")
const cors = require('cors')
const app=express();
app.use(cors());

// app.use(express.urlencoded());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(
        "mongodb+srv://Pankaj:Pankaj@cluster0.88eulrb.mongodb.net/instaClone?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  }


app.use("/",postn)

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("server started...")
})