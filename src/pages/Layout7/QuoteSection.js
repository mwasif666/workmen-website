import React from "react";
import styles from "./QuoteSection.module.css";
import { Button, Form } from "react-bootstrap";
import Img1 from "../../assets/images/banner/4.png";
import Img2 from "../../assets/images/banner/3.png";
import { Link } from "react-router-dom";

const QuoteSection = () => {
  return (
    <div className={`m-5`}>
      <div className="row g-5">
        {/* Get A Quote */}
        <div className="col-md-6">
          <div className={styles.cardBox}>
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={Img1}
                  alt="Get A Quote"
                  className={`img-fluid ${styles.imageRounded}`}
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className={styles.cardContent}>
                  <h3>Get A Quote</h3>
                  <p>
                    Request a quick, tailored quote from Bodaruddin Stevedoring,
                    delivering expert stevedoring, cargo handling, and port
                    logistics solutions across Pakistan.
                  </p>
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Full Name"
                        className={styles.inputQuote}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email or Contact Number"
                        className={styles.inputQuote}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-between gap-3 align-items-center">
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="text"
                          placeholder="Carge Type"
                          className={styles.selectQuote}
                        />
                      </Form.Group>

                      <Button type="" className={styles.buttonQuote}>
                        Submit
                      </Button>
                    </div>
                    <div className="d-flex justify-content-between gap-3 align-items-center">
                      <label htmlFor="checkbox" className={styles.Checkboxes}>
                        <input type="checkbox" name="" id="checkbox" />
                        <p>
                          By submitting this form, I agree to be contacted by
                          Badaruddin Stevedoring and consent to the use of my
                          details for communication and marketing purposes.
                        </p>
                      </label>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="col-md-6">
          <div className={styles.cardBox}>
            <div className="row d-flex flex-column flex-md-row  h-100">
              <div className="col-lg-7 px-4">
                <div className={styles.cardContent}>
                  <h3>Get In Touch</h3>
                  <p>
                    Speak directly with our experienced team to discuss your
                    logistics requirements or learn more about our legacy of
                    excellence in cargo management.
                  </p>
                  <p>
                    Bodaruddin Stevedoring provides reliable solutions for port
                    logistics, stevedoring, break bulk, warehousing, and
                    container operations across Pakistan.
                  </p>
                </div>
                <div className={styles.buttonsquote}>
                  <Button className={styles.buttonQuote2}>Call Now</Button>
                  <Link to="/about">
                    <Button className={styles.buttonQuote}>
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-lg-block d-none ">
                <div className="d-flex align-items-center h-100">
                  <img
                    src={Img2}
                    alt="Contact Person"
                    className={styles.roundedCircle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
