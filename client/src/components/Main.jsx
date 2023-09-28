import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewCar from "../pages/NewCar";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Cars from "../pages/Cars";
import "../index.css";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="cars" element={<Cars />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="cars/new" element={<NewCar />} />
          <Route path="cars/:id" element={<CarDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default Main;
