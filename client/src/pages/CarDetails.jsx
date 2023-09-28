import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axiosinstance";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [car, setCar] = useState(null); // book object from backend
  useEffect(() => {
    axios
      .get(`/api/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/cars/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {" "}
      <Row>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {car && (
          <>
            <Col md={6}>
              <img src={car.image} />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{car.brand}</h3>
                </ListGroupItem>
                <ListGroupItem>Model{car.model}</ListGroupItem>
                <ListGroupItem>Number of seats{car.seats}</ListGroupItem>
                <ListGroupItem>
                  Vehicle Condition: {car.vehicleCondition}
                </ListGroupItem>
                <ListGroupItem>Fuel Type: {car.fuelType}</ListGroupItem>
                <ListGroupItem>Body Type: {car.bodyType}</ListGroupItem>
                <ListGroupItem>
                  First Registration: {car.firstRegistration}
                </ListGroupItem>
                <ListGroupItem>Mileage: {car.mileage}</ListGroupItem>
                <ListGroupItem>Price: {car.price}</ListGroupItem>
                <ListGroupItem>Location: {car.location}</ListGroupItem>
                <ListGroupItem>Body Color: {car.bodyColor}</ListGroupItem>
              </ListGroup>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default CarDetails;
