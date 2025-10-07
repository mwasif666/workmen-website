import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Background from "../../assets/images/banner.png";
import Imgbanner from "../../assets/images/banner1.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-7 bg-center position-relative"
          // Define Background Image
          style={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "580px",
            paddingTop: "200px",
            position: "relative",
            zIndex: "-1",
          }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <Container>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="text-start mb-4 text-white hero-7-title">
                  <span className="">Reliable</span> Moving & Handyman <br />{" "}
                  Services{" "}
                  <span className="">
                    at Your <br /> Doorstep, Anytime
                  </span>
                </h1>
              </div>
              <div className="col-lg-6">
                <img src={Imgbanner} width="100%" height="auto" alt="" />
              </div>
            </div>
          </Container>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
