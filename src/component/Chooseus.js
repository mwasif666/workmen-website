import React from "react";
import styles from "./Chooseus.module.css";
import imgsvg from "./../assets/images/services/Icon.svg";
import img1 from "./../assets/images/work.jpg";

const Chooseus = () => {
  return (
    <>
      <section className={`${styles.wrap} py-5`}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-4">
            <div className="col-lg-6 pe-lg-5">
              <div className={styles.kicker}>
                <img src={imgsvg} alt="" />
                About Us
              </div>

              <h1 className={styles.headingmain}>
                <span className=""> About </span> Workmen{" "}
                <span className=""> To Go </span> Moving Services
              </h1>
              <div>
                <p>
                  At Workmen To Go Moving Services, we make moving simple, safe,
                  and stress-free. Based in Calgary, our trained movers
                  carefully handle your belongings from packing to delivery,
                  ensuring everything reaches securely.
                </p>
                <br />

                <p>
                  We offer local and long-distance moving solutions that are
                  reliable, affordable, and on time giving you peace of mind and
                  a smooth start to your next chapter.
                </p>
              </div>
              {/* <div className="btns">
                <a href="#book" className={styles.ctaBtn}>
                  Book A Service Now
                </a>
              </div> */}
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className={styles.img_box}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={img1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chooseus;
