// AccordionComponent.js
import React, { useState } from "react";
import styles from "./AccordionComponent.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../assets/images/mobile.jpeg";
import FormSection from "../pages/Layout7/FormSection";

const AccordionCustomer = () => {
  return (
    <section className={styles.accordionSection} id="customer">
      <FormSection />

      <div className={styles.googeMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.9893476744114!2d-114.0028734!3d51.0902041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716433f49e6495%3A0x5b29e316d5b89ce5!2sDisplayco%20Canada%20Inc!5e0!3m2!1sen!2s!4v1759444004182!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default AccordionCustomer;
