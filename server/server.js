const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const menuRouter = require("./src/routes/menuRouter");

const app = express();

// app.use(bodyparser())
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //  * every url can access
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/menu", menuRouter);
const url =
  "mongodb+srv://jijinsuresh6:jijinsuresh6@cluster0.dh7smys.mongodb.net/MENU_SERVER?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(3000, function () {
      console.log("started http://localhost:3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
