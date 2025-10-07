import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

// import images
import authBg from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/logo.png";

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative"
          style={{ background: `url(${authBg})` }}
        >
          <Container>
            <Row
              className="justify-content-center"
              style={{
                paddingTop: "150px",
              }}
            >
              <Col lg={5}>
                <div className="bg-white shadow">
                  <div className="p-4">
                    <div className="p-3">
                      {/* if you later want to handle submit, replace action="#" with onSubmit handler */}
                      <Form action="#" method="get" className="av-invalid">
                        {/* Row: First Name + Phone (Canada placeholder) */}
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="firstname" className="form-label">
                                First Name
                              </Label>
                              <Input
                                name="firstname"
                                required
                                placeholder="First Name"
                                id="firstname"
                                type="text"
                                className="form-control"
                                defaultValue=""
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="phone" className="form-label">
                                Phone
                              </Label>
                              <Input
                                name="phone"
                                required
                                placeholder="+1 (416) 555-1234"
                                id="phone"
                                type="tel"
                                className="form-control"
                                defaultValue=""
                              />
                            </div>
                          </Col>
                        </Row>

                        {/* Email - full width */}
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="email"
                            required
                            placeholder="Enter Email"
                            id="email"
                            type="email"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>

                        {/* Address - full width */}
                        <div className="mb-3">
                          <Label htmlFor="address" className="form-label">
                            Address
                          </Label>
                          <Input
                            name="address"
                            placeholder="Street address, City, Province, Postal Code"
                            id="address"
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">
                            Password
                          </Label>
                          <Input
                            name="password"
                            required
                            placeholder="Enter password"
                            id="userpassword"
                            type="password"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>

                        {/* Terms */}
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="termcondition-Check"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="termcondition-Check"
                          >
                            I accept{" "}
                            <Link
                              to="#"
                              className="text-dark font-weight-semibold"
                            >
                              Terms and Conditions
                            </Link>
                          </Label>
                        </div>

                        <div className="d-grid mt-3">
                          <button
                            type="submit"
                            className="btn-primary btn btn-none"
                          >
                            Register
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p>
                    Already have an account ?{" "}
                    <Link
                      to="login"
                      className="font-weight-semibold text-primary"
                    >
                      Signin
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
