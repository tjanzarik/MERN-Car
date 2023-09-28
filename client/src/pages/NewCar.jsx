import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosinstance";
import { Form, FormGroup } from "reactstrap";
import "../styles/new-car-form.css";
function NewCar(props) {
  const navigate = useNavigate();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    seats: "",
    nrOfDoors: "",
    vehicleCondition: "",
    fuelType: "",
    bodyType: "",
    firstRegistration: "",
    mileage: "",
    price: "",
    location: "",
    bodyColor: "",
    createdBy: "",
    image: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post(`/api/cars`, car)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };

  const changeHandler = (e) => {
    console.log(e.target.name);
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  return (
    <Form
      onSubmit={submitHandler}
      encType="application/x-www-form-urlencoded"
      className="form"
    >
      <div className=" d-flex align-items-center justify-content-between flex-wrap"></div>
      <FormGroup className="form__group">
        <input
          type="text"
          name="brand"
          placeholder="brand"
          value={car.brand}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input
          type="text"
          name="model"
          placeholder="model"
          value={car.model}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input
          type="text"
          name="seats"
          placeholder="seats"
          value={car.seats}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input
          type="text"
          name="nrOfDoors"
          placeholder="number of doors"
          value={car.nrOfDoors}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="vehicleCondition"
          placeholder="vehicle condition"
          value={car.vehicleCondition}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="fuelType"
          placeholder="fuel type"
          value={car.fuelType}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="bodyType"
          placeholder="body type"
          value={car.bodyType}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="firstRegistration"
          placeholder="first Registration"
          value={car.firstRegistration}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="mileage"
          placeholder="mileage"
          value={car.mileage}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="price"
          placeholder="price"
          value={car.price}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="location"
          placeholder="location"
          value={car.location}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="bodyColor"
          placeholder="bodyColor"
          value={car.bodyColor}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="createdBy"
          placeholder="created by"
          value={car.createdBy}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          type="text"
          name="image"
          onChange={changeHandler}
          placeholder="image"
        />
      </FormGroup>
      <FormGroup className="form__group">
        <button className="btn add__car-btn">Add Car</button>
      </FormGroup>
    </Form>
  );
}

export default NewCar;
