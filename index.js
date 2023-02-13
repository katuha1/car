require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const routerCar = require("./routes/car.route");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json()); //rab s json
app.use(express.urlencoded({ extended: true })); //pered param stroke

app.use(express.static("public")); // podkl stat files

app.use((err, request, response, next) => {
  //middleware - promejut obrabotchik
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

//app.use("/", (req,res)=>{
  //  res.status(200).json("vash server rab");
//});



server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

module.exports = app;
