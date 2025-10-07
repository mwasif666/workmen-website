import React from "react";
import styles from "./ContactSolution.module.css";
import { Link } from "react-router-dom";

const ContactSolution = () => {
  return (
    <section className={styles.solution}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <h1>
              Need a Custom <br /> Logistics Solution?
            </h1>
          </div>
          {/* <div className="col-12">
            <Link to="/contact">
              <button className={`btn ${styles.buttonsol}`}>Contact Us</button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSolution;
