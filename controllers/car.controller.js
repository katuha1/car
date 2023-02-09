const { getCarDB, getCarOneDB, postCarDB, updateCarDB} = require("../servise/car.servis");

const getCar = (req, res) => {
  const data = getCarDB();
  res.status(200).json(data);
};

const getCarOne = (req, res) => {
  const id = req.params.id;
  const data = getCarOneDB(id);
  res.status(200).json(data);
};


const postCar = (req, res) => {
  const {name, model, years, price} = req.body;
  let dataCar = {
    name, model, years, price
  };
try {
  const ress = postCarDB(dataCar)
  if (!ress) res.status(200).json("Ошибка создания");
  res.status(400).json(res);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
};

const updateCar = (req, res) => {
  const id = req.params.id;
  const {name, model, years, price} = req.body;

  let result  = updateCarDB(name, model, years, price);

  res.status(200).json(result);
};

const daleteCar = (req, res) => {
  res.status(200).json("удалили машину");
};


module.exports = {
  getCar,
  postCar,
  updateCar,
  daleteCar,
  getCarOne,
};
