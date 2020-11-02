const express = require("express");
const Masque = require("../model/masque.js");

const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());


router.post("/postgoodie" , async (req,res) => {
    const mask = new Masque({
        title : req.body.title,
        description : req.body.description,
        price: req.body.price,
        image: req.body.image,
        }
    )
    try {
        const save = await mask.save();
        res.json(save);
        console.log("Post Success");
    }
    catch (error) {
        console.error(error);
    }
});

router.get("/getgoodie" , async (req,res) => {

    try {
        const save = await Masque.find();
        res.json(save);
        console.log("Get Success");
    }
    catch (error) {
        console.error(error);
    }
});

router.get("/getsgoodie/:_id" , async (req,res) => {

    try {
        const save = await Masque.findById( req.params._id );
        res.json(save);
        console.log("Get Success");
    }
    catch (error) {
        console.error(error);
    }
});

router.delete("/rmgoodie/:_id" , async (req,res) => {

    try {
        const save = await Masque.remove( {
            _id:req.params._id,
        });
        res.json(save);
        console.log("Remove Success");
    }
    catch (error) {
        console.error(error);
    }
});

router.patch("/putgoodie/:_id", async (req, res) => {
    try {
        const save = await Masque.update( {
            _id:req.params._id,},{
                $set: {
                    title : req.body.title,
                    description : req.body.description,
                    price : req.body.price,        
                }
            }
        );
        res.json(save);
        console.log("Update Success");
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;