import React, { useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { FaArrowRightLong } from "react-icons/fa6";

const NavbarPage = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, path: "/", navheading: "Home" },
    { id: 4, path: "/about", navheading: "About Us" },
    { id: 2, path: "/service", navheading: "Services" },
    { id: 3, path: "/contact", navheading: "Contact us" },
    { id: 5, path: "https://dashboard.workmentogo.ca/", navheading: "Login" },
  ];

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleNavClick = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom" id="navbar">
        <Container>
          {/* Logo */}
          <NavbarBrand>
            <Link
              to="/"
              className="logo-link rounded-pill"
              style={{
                color: "#02492e",
                padding: "8px 16px",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <div className="image-logo gap-2">
                <img src="./logo.png" alt="Logo" />
              </div>
            </Link>
          </NavbarBrand>

          {/* Desktop menu */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{ gap: "16px" }}
          >
            <Nav className="m-auto navbar-center">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <Link
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    to={item.path}
                    style={{ color: "#02492e", fontWeight: "500" }}
                  >
                    {item.navheading}
                  </Link>
                </NavItem>
              ))}
            </Nav>

            <Link
              to="/booking"
              className="d-flex align-items-center gap-3 btn rounded-pill nav-btn ms-lg-3 contactnavbtn"
              style={{
                color: "white",
                padding: "10px 30px",
                backgroundColor: "#02492e",
              }}
            >
              <span>Book Now</span>
              <FaArrowRightLong />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <NavbarToggler onClick={toggleOffcanvas} className="d-lg-none">
            <FeatherIcon icon="menu" />
          </NavbarToggler>
        </Container>
      </nav>

      {/* Offcanvas for mobile */}
      <Offcanvas
        isOpen={isOffcanvasOpen}
        toggle={toggleOffcanvas}
        direction="end"
        style={{ width: "280px" }}
        className="d-lg-none"
      >
        <OffcanvasHeader toggle={toggleOffcanvas} className="border-bottom">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="logo-link rounded-pill"
              style={{
                color: "#02492e",
                padding: "8px 16px",
                textDecoration: "none",
              }}
              onClick={handleNavClick}
            >
              Badaruddin
            </Link>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav navbar vertical className="mt-4">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                className={`my-2 ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to={item.path}
                  onClick={handleNavClick}
                  style={{ color: "#02492e", fontWeight: "500" }}
                >
                  {item.navheading}
                </Link>
              </NavItem>
            ))}
            <NavItem className="mt-4">
              <Link
                to="/booking"
                className="d-flex align-items-center gap-4 btn btn-sm rounded-pill nav-btn w-100 text-center"
                style={{ color: "#02492e" }}
                onClick={handleNavClick}
              >
                <span>Book Now</span>
                <FaArrowRightLong />
              </Link>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default NavbarPage;
