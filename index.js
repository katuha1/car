require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const morgan = require("morgan");
const routerCar = require("./routes/car.route");

const app = express();
const server = http.createServer(app)

const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(express.json()); //работа с форматом json
app.use(express.urlencoded({ extended: true })); //что бы можно было передавать параметры

app.use(express.static("public"));

app.use((err, request, response, next) => {
  //middeleware-промежут обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

//app.use("/", (req, res)=>{
  //res.status(200).json("МЯУ");
//});


server.listen(port,()=>{
  console.log(`server running on port http://localhost:${port}`);
});

module.exports = app;
