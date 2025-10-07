import React from "react";
import styles from "../../component/Solution.module.css";
import ServiceQuoteSection from "./ServiceQuote";

const ServiceSolution = () => {
  return (
    <div className="container-fluid px-lg-5 px-2">
      <section
        className={styles.solution}
        style={{
          padding: "80px 0px ",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="row justify-content-center">
          <ServiceQuoteSection />
        </div>
      </section>
    </div>
  );
};

export default ServiceSolution;
