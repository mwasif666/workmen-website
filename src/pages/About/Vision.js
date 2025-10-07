import React from "react";
import styles from "./About.module.css";
import About from "../../assets/images/about.png";
import { FaDownload } from "react-icons/fa6";

const Vision = () => {
  return (
    <>
      <div className="container">
        <h2 className={styles.headerPara}>Our Mission & Vision</h2>
        <p className={styles.para}>
          At Badruddin Stevedoring, our mission and vision reflect more than
          five decades of dedication to <br /> excellence in port logistics and
          cargo handling. We are driven by a commitment to reliability, safety,{" "}
          <br /> and innovation, ensuring every client receives tailored,
          efficient, and future-ready logistics solutions <br /> that help their
          businesses thrive.
        </p>
        <div className={`row ${styles.mainVision}`}>
          {/* Left Side Image */}
          <div className="col-md-6">
            <div className={styles.imageDiv}>
              <img
                src={About} // Replace with your image path
                alt="Logistics"
                className={` ${styles.image}`}
              />
              <div className={styles.download}>
                <p>
                  <span>Download Our Full Company Profile</span>
                  <span>
                    <FaDownload />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Text */}
          <div className="col-md-6 d-flex flex-column justify-content-center gap-4">
            <div className={styles.aboutback}>
              <h2 className={styles.heading}>Vision</h2>
              <p className={styles.text}>
                Become the most reliable logistics partner in South Asia by
                delivering unmatched service and innovation.
              </p>
            </div>

            <div className={styles.aboutback}>
              <h2 className={styles.heading}>Mission</h2>
              <p className={styles.text}>
                Provide top-tier stevedoring and cargo management solutions with
                emphasis on safety, efficiency, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
