import React from "react";
import styles from "./Chooseus.module.css";
import imgsvg from "./../assets/images/services/Icon.svg";
import img1 from "./../assets/images/services/chooseus2.png";

const About2 = () => {
  return (
    <>
      <section className={`${styles.wrap} py-5`}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-4">
            <div className="col-lg-6">
              <div className={` justify-content-start ${styles.img_box} `}>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 pe-lg-5">
              <div className={styles.kicker}>
                <img src={imgsvg} alt="" />
                Our Mission
              </div>

              <h1 className={styles.headingmain}>
                Our Mission
                <span className=""> Reliable </span> Repairs, Anytime, Anywhere
              </h1>
              <div>
                <h4>
                  Making home and commercial maintenance stress-free by
                  connecting you with trusted local experts
                </h4>
                <br />

                <p>
                  At Work Man to Go, our mission is simple: to take the hassle
                  out of finding the right tradesperson. We’re committed to
                  delivering fast, dependable, and high-quality repairs—whether
                  it’s your home or business. By ensuring every professional in
                  our network is vetted and reliable, we give you peace of mind
                  and confidence that the job will be done right, the first
                  time.
                </p>
              </div>
              {/* <div className="btns">
                <a href="#book" className={styles.ctaBtn}>
                  Book A Service Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
