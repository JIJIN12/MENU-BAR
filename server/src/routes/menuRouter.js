const express = require("express");
const menumodel = require("../model/menuModel");

const menuRouter = express.Router();
menuRouter.post("/add", async function (req, res) {
  try {
    const data = {
      item_name: req.body.item_name,
      price: req.body.price,
      description: req.body.description,
      key: req.body.key,
    };
    const savedata = await menumodel(data).save()
    if(savedata){
        return res
        .status(200)
        .json({ success: true, error: false, message:'savedata successfull' });
    }
  } catch (error) {
    return res
    .status(400)
    .json({ success: false, error: true, message: "Something went wrong" });
  }
});


menuRouter.get('/',async function (req,res){
    try {
        const data = await menumodel.find()
        if(data){
            return res
            .status(200)
            .json({ success: true, error: false, details:data });
        }
    } catch (error) {
        return res
        .status(400)
        .json({ success: false, error: true, message: "Something went wrong" });
    }
})
module.exports = menuRouter;
