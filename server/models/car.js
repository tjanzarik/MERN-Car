const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    id: { type: Number },
    brand: { type: String },
    model: { type: String },
    carName: { type: String },
    seats: { type: Number },
    nrOfDoors: { type: Number },
    vehicleCondition: { type: String },
    fuelType: { type: String },
    bodyType: { type: String },
    firstRegistration: { type: Number },
    mileage: { type: Number },
    price: { type: Number },
    location: { type: String },
    bodyColor: { type: String },
    createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Car", carSchema);
module.exports = model;
