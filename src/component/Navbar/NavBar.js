// import React, { useState } from "react";
// import {
//   Nav,
//   NavbarBrand,
//   NavbarToggler,
//   NavItem,
//   Container,
//   Offcanvas,
//   OffcanvasBody,
//   OffcanvasHeader,
// } from "reactstrap";
// import { Link, useLocation } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const NavbarPage = () => {
//   const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { id: 1, path: "/", navheading: "Home" },
//     { id: 4, path: "/about", navheading: "About Us" },
//     { id: 2, path: "/service", navheading: "Services" },
//     { id: 3, path: "/contact", navheading: "Contact us" },
//     { id: 5, path: "https://dashboard.workmentogo.ca/", navheading: "Login" },
//   ];

//   const toggleOffcanvas = () => {
//     setIsOffcanvasOpen(!isOffcanvasOpen);
//   };

//   const handleNavClick = () => {
//     setIsOffcanvasOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-custom" id="navbar">
//         <Container>
//           {/* Logo */}
//           <NavbarBrand>
//             <Link
//               to="/"
//               className="logo-link rounded-pill"
//               style={{
//                 color: "#02492e",
//                 padding: "8px 16px",
//                 display: "inline-block",
//                 textDecoration: "none",
//               }}
//             >
//               <div className="image-logo gap-2">
//                 <img src="./logo.png" alt="Logo" />
//               </div>
//             </Link>
//           </NavbarBrand>

//           {/* Desktop menu */}
//           <div
//             className="d-none d-lg-flex align-items-center"
//             style={{ gap: "16px" }}
//           >
//             <Nav className="m-auto navbar-center">
//               {navItems.map((item) => (
//                 <NavItem
//                   key={item.id}
//                   className={location.pathname === item.path ? "active" : ""}
//                 >
//                   <Link
//                     className={`nav-link ${
//                       location.pathname === item.path ? "active" : ""
//                     }`}
//                     to={item.path}
//                     style={{ color: "#02492e", fontWeight: "500" }}
//                   >
//                     {item.navheading}
//                   </Link>
//                 </NavItem>
//               ))}
//             </Nav>

//             <Link
//               to="/booking"
//               className="d-flex align-items-center gap-3 btn rounded-pill nav-btn ms-lg-3 contactnavbtn"
//               style={{
//                 color: "white",
//                 padding: "10px 30px",
//                 backgroundColor: "#02492e",
//               }}
//             >
//               <span>Book Now</span>
//               <FaArrowRightLong />
//             </Link>
//           </div>

//           {/* Mobile menu toggle */}
//           <NavbarToggler onClick={toggleOffcanvas} className="d-lg-none">
//             <FeatherIcon icon="menu" />
//           </NavbarToggler>
//         </Container>
//       </nav>

//       {/* Offcanvas for mobile */}
//       <Offcanvas
//         isOpen={isOffcanvasOpen}
//         toggle={toggleOffcanvas}
//         direction="end"
//         style={{ width: "280px" }}
//         className="d-lg-none"
//       >
//         <OffcanvasHeader toggle={toggleOffcanvas} className="border-bottom">
//           <div className="d-flex align-items-center">
//             <Link
//               to="/"
//               className="logo-link rounded-pill"
//               style={{
//                 color: "#02492e",
//                 padding: "8px 16px",
//                 textDecoration: "none",
//               }}
//               onClick={handleNavClick}
//             >
//               Workmentogo
//             </Link>
//           </div>
//         </OffcanvasHeader>
//         <OffcanvasBody>
//           <Nav navbar vertical className="mt-4">
//             {navItems.map((item) => (
//               <NavItem
//                 key={item.id}
//                 className={`my-2 ${
//                   location.pathname === item.path ? "active" : ""
//                 }`}
//               >
//                 <Link
//                   className="nav-link"
//                   to={item.path}
//                   onClick={handleNavClick}
//                   style={{ color: "#02492e", fontWeight: "500" }}
//                 >
//                   {item.navheading}
//                 </Link>
//               </NavItem>
//             ))}
//             <NavItem className="mt-4">
//               <Link
//                 to="/booking"
//                 className="d-flex align-items-center gap-4 btn btn-sm rounded-pill nav-btn w-100 text-center"
//                 style={{ color: "#02492e" }}
//                 onClick={handleNavClick}
//               >
//                 <span>Book Now</span>
//                 <FaArrowRightLong />
//               </Link>
//             </NavItem>
//           </Nav>
//         </OffcanvasBody>
//       </Offcanvas>
//     </>
//   );
// };

// export default NavbarPage;
import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
  Collapse,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
} from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const NavbarPage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

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

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Scroll effect for navbar
  useEffect(() => {
    const scrollNavigation = () => {
      let scrollup = document.documentElement.scrollTop;
      if (scrollup > 50) {
        setNavClass("navbar-light nav-sticky");
      } else {
        setNavClass("");
      }
    };
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  // Scroll to section
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle Customer Care click
  const handleCustomerClick = (e) => {
    e.preventDefault();
    if (isHomepage) {
      // Already on home → just scroll
      scrollToId("customer");
    } else {
      // Navigate to home first
      navigate("/");
      setTimeout(() => {
        scrollToId("customer");
      }, 300); // wait for route change
    }
    setIsOpenMenu(false);
    setIsOffcanvasOpen(false);
  };

  // Close offcanvas when a link is clicked
  const handleNavClick = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <React.Fragment>
      <nav
        expand="lg"
        fixed="top"
        className={`navbar navbar-expand-lg fixed-top navbar-custom ${navClass}`}
        id="navbar"
      >
        <Container>
          {/* Logo */}
          <NavbarBrand href="/">
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
                <img
                  src="./logo.png"
                  style={{
                    width: "70px",
                  }}
                  alt="Logo"
                />
              </div>
            </Link>
          </NavbarBrand>

          {/* Desktop menu - hidden on mobile */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{
              gap: "16px",
            }}
          >
            <Nav className="m-auto navbar-center" id="mySidenav">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.path === "/#customer" ? (
                    <a
                      href="/#customer"
                      onClick={handleCustomerClick}
                      className="nav-link"
                    >
                      {item.navheading}
                    </a>
                  ) : (
                    <Link
                      className={`nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      to={item.path}
                    >
                      {item.navheading}
                    </Link>
                  )}
                </NavItem>
              ))}
            </Nav>

            <Link
              to="/booking"
              className="btn rounded-pill nav-btn ms-lg-3 contactnavbtn"
            >
              Book Now
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
              className="logo-link rounded-pill p-0"
              onClick={handleNavClick}
              style={{
                color: "#02492e",
              }}
            >
              Workmentogo
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
                {item.path === "/#customer" ? (
                  <a
                    href="/#customer"
                    onClick={(e) => {
                      handleCustomerClick(e);
                      handleNavClick();
                    }}
                    className="nav-link"
                    style={{
                      color: "#02492e",
                      fontWeight: "500",
                    }}
                  >
                    {item.navheading}
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to={item.path}
                    onClick={handleNavClick}
                    style={{
                      color: "#02492e",
                      fontWeight: "500",
                    }}
                  >
                    {item.navheading}
                  </Link>
                )}
              </NavItem>
            ))}

            <NavItem className="mt-4">
              <Link
                to="/booking"
                className="btn btn-sm rounded-pill nav-btn w-100 text-center"
                onClick={handleNavClick}
                style={{
                  backgroundColor: "#02492e",
                  color: "white",
                }}
              >
                Book Now
              </Link>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>

      {/* Inline styles for the offcanvas */}
      <style>
        {`
          .offcanvas.offcanvas-end {
            width: 280px !important;
            background-color: #fff;
          }
          .offcanvas-header .btn-close {
            font-size: 1.2rem;
          }
          .navbar-toggler {
            border: none;
            padding: 0.25rem;
          }
          .navbar-toggler:focus {
            box-shadow: none;
          }
          @media (max-width: 991px) {
            .navbar-collapse {
              display: none !important;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default NavbarPage;
