import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/car-item.css";
const CarItem = (props) => {
  const { id, image, model, brand, fuelType, price, mileage } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car_item">
        <div className="car_img">
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="car_item-content mt-4">
          <h4 className="section_title text-center">
            {brand} {model}
          </h4>

          <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i>
              {mileage}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-gas-station-fill"></i> {fuelType}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-money-euro-box-fill"></i>
              {price}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
