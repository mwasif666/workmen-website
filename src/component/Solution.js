import React from "react";
import styles from "./Solution.module.css";
import { Link } from "react-router-dom";
import imgsvg from "./../assets/images/services/Icon.svg";
import img1 from "./../assets/images/support.jpg";

const Solution = () => {
  return (
    <section className={styles.solution}>
      <div className="container-fluid px-lg-5 px-2">
        <div className={styles.card}>
          <div className="row d-flex align-items-center justify-content-between mb-4">
            <div className="col-lg-5 pe-lg-5">
              <div className={styles.img_box}>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={img1}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 ps-lg-5">
              <div className={styles.kicker}>
                <img src={imgsvg} alt="" />
                Why Choose Us
              </div>

              <h1 className={styles.headingmain}>
                Why Customers Trust Workmentogo
              </h1>
              <div className="d-flex">
                <ul>
                  <li>24/7 Emergency Support</li>
                  <li>Affordable, Transparent Pricing</li>
                  <li> Guaranteed Work Quality</li>
                </ul>
                <ul>
                  <li>Experienced & Licensed Workers</li>
                  <li>Fast Response Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
