import React from "react";
import styles from "../Layout7/QuoteSection.module.css";
import { Button, Form } from "react-bootstrap";
import Img1 from "../../assets/images/banner/4.png";
import Img2 from "../../assets/images/banner/3.png";

const ServiceQuoteSection = () => {
  return (
    <div className={`my-5 px-lg-5 px-5`}>
      <div className="row g-5 justify-content-center">
        {/* Get A Quote */}
        <div className="col-md-8">
          <div className={styles.cardBox}>
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={Img1}
                  alt="Get A Quote"
                  className={`img-fluid ${styles.imageRounded}`}
                />
              </div>
              <div className="col-md-7 text-start d-flex align-items-center">
                <div className={styles.cardContent}>
                  <h2>Get A Quote</h2>
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
                      <Form.Group className="mb-2 w-75">
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
      </div>
    </div>
  );
};

export default ServiceQuoteSection;
