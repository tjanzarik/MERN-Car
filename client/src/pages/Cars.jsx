import React, { useState, useEffect, useMemo } from "react";
import Item from "../components/Item";
import { Container, Row, Col } from "reactstrap";
import axios from "../axiosinstance";
import CarItem from "../components/CarItem";
import { Link } from "react-router-dom";
import "../styles/cars.css";
import { Form, FormGroup } from "reactstrap";
const Cars = () => {
  const [cars, setCars] = useState(null); // cars array from backend
  // const [selectedBrand, setSelectedBrand] = useState();
  /* const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);*/

  useEffect(() => {
    axios
      .get(`/api/cars`)
      .then((res) => setCars(res.data))
      .catch((e) => console.log(e));
  }, []);

  /* const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = cars.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(cars);
    }
  };
  console.log(searchInput);
  console.log("cars", cars);

  //Filterfunction

  /*  function getFilteredList() {
    if (!selectedBrand) {
      return cars;
    }
    return cars.filter((item) => item.category === selectedBrand);
  }

  var filteredList = useMemo(getFilteredList, [selectedBrand, cars]);

  function handleCategoryChange(event) {
    setSelectedBrand(event.target.value);
  }
*/
  return (
    <section>
      <Container>
        <Row>
          {cars &&
            cars.map((car) => (
              <>
                <FormGroup className="form__group">
                  <CarItem item={car} key={car.id} />
                  <button key={car._id}>
                    <Link to={`/cars/${car._id}`}>Car Details</Link>
                  </button>
                </FormGroup>
              </>

              /*  <li key={car._id}>
              <Link to={`/cars/${car._id}`}>
                {car.brand} 
              </Link>
            </li>
*/
            ))}
        </Row>
      </Container>
    </section>
  );
  /*   <div className="app">
        <div className="filter-container">
          <div>Filter by Brand:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
        </div>
        <div className="brand-list">
          {filteredList.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
          </div>*/
};

export default Cars;
