const express = require("express");
const User = require("../model/user.js");
const Bcryptjs = require("bcryptjs");

const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());


router.post("/postuser" , async (req,res) => {
    req.body.password = Bcryptjs.hashSync(req.body.password, 10);
    const user = new User({
        name : req.body.name,
        lastname : req.body.lastname,
        password: req.body.password,
        }
    )
    try {
        const saveuser = await user.save();
        res.json(saveuser);
        console.log("User created");
    }
    catch (error) {
        console.error(error);
    }
});

router.post("/login" , async (req,res) => {
    try {
        var tryuser = await User.findOne({name:req.body.name}).exec() ;
        if (!tryuser){
            res.json("failed");
        }
            console.log("User good");
        if (!Bcryptjs.compareSync(req.body.password, tryuser.password)){
            res.json("bad password");
            console.log("Ahem WUT");

        }
        console.log("User good");

        res.json("Log on");
    }
    catch (error) {
        console.error(error);
    }
});

router.get("/getuser" , async (req,res) => {

    try {
        const saveuser = await User.find();
        res.json(saveuser);
        console.log("Get Success view User");
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;