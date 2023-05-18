const router = require("express").Router();
const multer = require("multer");
const Car = require("../models/Car");
const upload = multer();

//Add new car
router.route("/addCar").post(upload.single("image"), async (req, res) => {
  //Desctucture the request body and get car details
  const {
    name,
    type,
    image,
    isFavorite,
    price,
    oldPrice,
    seats,
    transition,
    fuel,
  } = req.body;

  try {
    //Create a car details object and initilize above variables
    let car = new Car({
      name,
      type,
      image,
      isFavorite,
      price,
      oldPrice,
      seats,
      transition,
      fuel,
    });
    const result = await car.save();

    if (result) res.status(201).send("Data added successfully !");
    else res.status(500).send("Server Error !");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !");
  }
});

//Get all cars
router.route("/getCar").get((req, res) => {
  Car.find()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get one car
router.route("/getOneCar/:id").get((req, res) => {
  const id = req.params.id;
  Car.findById(id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update car
router.route("/updateCar/:id").put(async (req, res) => {
  const id = req.params.id;
  const {
    name,
    type,
    image,
    isFavorite,
    price,
    oldPrice,
    seats,
    transition,
    fuel,
  } = req.body;
  let updatedCar = {
    name,
    type,
    image,
    isFavorite,
    price,
    oldPrice,
    seats,
    transition,
    fuel,
  };
  await Car.findByIdAndUpdate(id, updatedCar)
    .then(() => {
      res.status(200).send("Car Updated");
    })
    .catch((err) => {
      console.log(err);
      res.send(500).send("Update Failed");
    });
});

//Delete car
router.route("/deleteCar/:id").delete(async (req, res) => {
  const id = req.params.id;
  await Car.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Car Deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Delete Failed");
    });
});

module.exports = router;
