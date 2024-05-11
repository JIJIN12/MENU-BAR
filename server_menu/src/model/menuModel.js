const mongoose = require("mongoose");
const schema = mongoose.Schema;

const menu_schema = new schema({
  item_name: { type: String },
  price: { type: String },
  description: { type: String },
  key: { type: String },
  
 
});
const menumodel = mongoose.model("menu_tb", menu_schema);
module.exports = menumodel;
