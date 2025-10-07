import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../../component/Services.module.css";
import Img1 from "../../assets/images/banner/5.png";
import Img2 from "../../assets/images/banner/6.png";
import Img3 from "../../assets/images/banner/7.png";
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    title: "Stevedoring",
    desc: "Expert loading and unloading of vessels with precision and speed.",
    img: Img1,
  },
  {
    title: "Break Bulk",
    desc: "Specialized handling of non-containerized cargo for various industries.",
    img: Img2,
  },
  {
    title: "Warehousing/Storage",
    desc: "Secure, scalable storage solutions for all types of cargo.",
    img: Img3,
  },
  {
    title: "Loading & Unloading",
    desc: "Efficient handling at ports and inland facilities.",
    img: Img1,
  },
  {
    title: "Project Cargo Stevedoring",
    desc: "Tailored solutions for oversized, heavy-lift, and high-value cargo.",
    img: Img2,
  },
  {
    title: "Container Operations",
    desc: "Comprehensive container handling, stacking, and maintenance services.",
    img: Img1,
  },
  {
    title: "Afghan Transit",
    desc: "Reliable cross-border logistics for Afghan-bound cargo movements.",
    img: Img2,
  },
];

const Services = () => {
  const location = useLocation();
  let heading = (
    <>
      Comprehensive <br /> Cargo & Logistics <br /> Solutions
    </>
  );

  if (location.pathname === "/about") {
    heading = <>What We Do</>;
  }

  // Check if current path is "/services"
  const isServicesPage = location.pathname === "/service";

  return (
    <section className={`section ${styles.services}`} id="services">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={7}
            className={`${styles.padding_services} ${
              isServicesPage ? styles.TextServicebtn : ""
            }`}
          >
            <h2 className={`fw-bold ${styles.heading} `}>{heading}</h2>
          </Col>
          <Col
            lg={5}
            className={`text-lg-end text-center mt-3 mt-lg-0 ${
              styles.padding_services
            } ${isServicesPage ? styles.disabledBtn : ""}`}
          >
            <button
              className={`btn ${styles.exploreBtn} `}
              disabled={isServicesPage}
            >
              Explore All Services
            </button>
          </Col>
        </Row>

        <Row className="align-items-start mt-4">
          <Col lg={12} className={`ps-lg-0 ${styles.padding_services2}`}>
            <Row>
              {/* First Row -> pehle 4 services */}
              {services.slice(0, 4).map((service, idx) => (
                <Col md={6} lg={3} key={idx} className="mb-4">
                  <div className={styles.card}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className={styles.image}
                    />
                    <div className={styles.cardContent}>
                      <h5 className="mt-3 fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="align-items-center">
              {/* Second Row -> aglay 3 services */}
              {services.slice(4, 7).map((service, idx) => (
                <Col md={6} lg={3} key={idx} className="mb-4">
                  <div className={styles.card}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className={styles.image}
                    />
                    <div className={styles.cardContent}>
                      <h5 className="mt-3 fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}

              {/* Last card in second row -> Contact Us */}
              <Col
                md={6}
                lg={3}
                className="mb-4 d-flex align-items-center h-100"
              >
                <div className={`${styles.card} text-center w-100`}>
                  <h5 className={styles.lastcontact}>
                    Need A Custom <br /> Logistics Or Cargo <br /> Solution?
                  </h5>
                  <Link to="/contact">
                    <button className={`btn mt-3 ${styles.exploreBtn}`}>
                      Contact Now
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
