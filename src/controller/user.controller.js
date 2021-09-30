const express = require ("express");
const router = express.Router()
const User= require("../models/user.model")

router.get("/data",async function(req,res){
  const user = await User.find().lean().exec()
 res.render("homepage/tej",{
   user:user
 })
})

router.get("",async function(req,res){
  const user = await User.find().lean().exec()
 return res.send(user)
})


router.get("/create",async function(req,res){
  // const user = await User.find().lean().exec()
  // return res.send(user)

  res.render("users/adduser")
})
//signup
router.get("/signup",async function(req,res){

  res.render("users/signup")
})
//login
router.get("/login",async function(req,res){

  res.render("users/login")
})


//index file
router.get("/index",async function(req,res){

  res.render("users/index")
})
//employer
router.get("/employer",async function(req,res){

  res.render("users/employer")
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
