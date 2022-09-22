const express = require("express")
// const postInput = require("../model/postsc")
const postModal=require("../model/imagesc")
// const fileUpload=require("express-fileupload")
// const multer = require('multer')
const router = express.Router();
// var path = require("path");

// router.use( fileUpload )
// router.use(express.static(__dirname + "./public/"));






// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "./public/upload")
//         },
//         filename: function (req, file, cb) {
//             const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//             cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
//         }

//     })
//  }).single('file');




// router.post("/upload",upload,async (req, res) => {
   
//     try {
//         // const { path, filename } = req.file;
        
//         const newposts = await postInput.create({
//             // PostImage: { url: path, filename: filename },
//             name: req.body.name,
//             description:req.body.description,
//             location: req.body.location,
//             image: req.body.image
//         })

//         res.json({
//             status:"success",
//             newposts
//         })
//     } catch (e) {
//         res.json({
//             status: "failed",
//             message: e.message
//         })
//     }

// })



router.post('/new',(req,res)=>{
    
    postModal.create({
      image:req.body.image,
      author:req.body.author,
      location:req.body.location,
      description:req.body.description,
      
  
    }).then(()=>{ res.send("file and data uploaded successfully")}).catch((err)=>{
      console.log(err.message)
    })
   
  })


router.get("/all", async (req, res) => {
    try {
      const users = await postModal.find({});
      res.send(users);
    } catch (e) {
      console.log(e.message);
    }
  });




module.exports = router

