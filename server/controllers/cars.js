const Car = require("../models/car");

const createCar = async (req, res) => {
  try {
    const newCar = await Car.create({ ...req.body, createdBy: req.user._id });

    console.log("🚀 ~ file: Cars.js:6 ~ createCar ~ newCar:", newCar);

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getAllCars = async (req, res, next) => {
  try {
    const Cars = await Car.find().populate("createdBy", "username email");
    console.log("🚀 ~ file: Cars.js:15 ~ getAllCars ~ Cars:", Cars);
    res.json(Cars);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getCarById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const Cars = await Car.find({ _id: id }).populate(
      "createdBy",
      "username email"
    );
    console.log("🚀 ~ file: Cars.js:28 ~ getCarById ~ Cars:", Cars);
    if (Cars.length === 0) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(Cars[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCar = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedCar = await Car.findByIdAndUpdate()
    const updatedCar = await Car.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log("🚀 ~ file: Cars.js:46 ~ updateCar ~ updatedCar:", updatedCar);
    if (!updatedCar) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCar = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedCar = await Car.findByIdAndDelete()
    const deletedCar = await Car.findOneAndDelete({ _id: id });
    console.log("🚀 ~ file: Cars.js:62 ~ deleteCar ~ deletedCar:", deletedCar);
    if (!deletedCar) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(deletedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
