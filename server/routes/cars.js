const express = require("express");
const router = express.Router();
const Car = require("../models/car");
const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/cars");
const authenticate = require("../middleware/auth");
router.use(authenticate);
router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", createCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
