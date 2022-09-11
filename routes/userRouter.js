const express = require('express');
const UserModel = require("../models/userModel");
const getToken = require('../util');


const router=express.Router();

router.get("/createadmin", function(req, res) {
    const newuser = new UserModel({
        name: "kunal",
        email: "kunal@123456",
        password: "1234",
        isAdmin: true

    });
    newuser.save(function(err) {
        if (!err) {
            UserModel.find(function(err, foundUser) {

                res.send(foundUser);
              // res.send(err);
            });
        }
        else{
            res.send("Email should be unique");
        }  
    });

})




router.post("/signin", async(req, res) => {
    const signinUser = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password

    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token:getToken(signinUser)

        })
    } else {
        res.status(401).send({ msg: "Invalid email or password." });
    }
})


router.post("/register",(req, res) => {
    const user = new UserModel({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    const newUser=user.save(function(err) {
        if (newUser) {
            res.status(401).send({ error:err });
        }
    });
     if(newUser)
    {console.log(newUser);}
    
})



module.exports=router;