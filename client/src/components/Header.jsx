import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/cars/new",
    display: "Sell",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <img src="../logo.png" className="logo"></img>
              </div>
            </Col>
            {user ? (
              <>
                <div className="header-logout d-flex align-items-center justify-content-end gap-3 ">
                  <p>Hello {user.username}</p>
                  <button onClick={logout}>Logout</button>
                  <i class="ri-logout-box-line"></i>
                </div>
              </>
            ) : (
              <Col lg="6" md="6" sm="6">
                <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                  <NavLink
                    to="/login"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="ri-login-circle-line"></i>Login
                  </NavLink>
                  <Link
                    to="/register"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="ri-user-line"></i>Register
                  </Link>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>

      <div className="main-navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i className="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
export default Header;

{
  /* <ul>
          <li>
            <NavLink to="/cars">Home</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/cars/new">Add Car</NavLink>
              </li>
              <p>Hello {user.username}</p>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
                <li>
                    <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
                <li>
                    <button to="/">Favorite</button>
                </li>
                <li>
                    <button to="/">Menu</button>
                </li>
        </ul>
            
     
  );
};*/
}
