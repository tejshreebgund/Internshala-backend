const express = require ("express");
const router = express.Router()
const User= require("../models/user.model")


router.get("/create",async function(req,res){
  // const user = await User.find().lean().exec()
  // return res.send(user)

  res.render("users/adduser")
})

router.get("/signup",async function(req,res){

  res.render("users/signup")
})
router.get("/login",async function(req,res){

  res.render("users/login")
})

router.post("/signup",async function (req,res){
  console.log("request here",req.body);
    const user = await User.create(req.body)
  return res.render("users/login")
});
router.post("/login",async function (req,res){
  console.log("request here",req.body);
    const user = await User.create(req.body)
    
  return res.send(user)
});

router.post("/add",async function (req,res){
  console.log("request here",req.body);
    const user = await User.create(req.body)
  return res.send(user)
});
router.get("",async function(req,res){
    const users=await User.find().lean().exec() //db.users.find,exec will convert half promise(thennable)to full promise
    const pageTitle = "Welcome to Users Page"

    return res.render("users/Allusers",{
      users:users,
      pageTitle,
    })
})

// router.patch("/:id",crudController.updateOne(User))
// router.delete("/:id",crudController.deleteOne(User))
// router.get("/:id",crudController.getOne(User))


module.exports=router;
