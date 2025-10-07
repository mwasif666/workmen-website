import React from "react";
import { Link, useLocation } from "react-router-dom"; // IMPORTANT for route check
import styles from "./Services.module.css";

import img1 from "./../assets/images/services/1.png";
import img2 from "./../assets/images/services/2.png";
import img3 from "./../assets/images/services/3.png";
import img4 from "./../assets/images/services/4.png";
import img5 from "./../assets/images/services/5.png";
import img6 from "./../assets/images/services/packing.jpg";
import img7 from "./../assets/images/services/unpack.jpeg";
import img8 from "./../assets/images/services/loading.webp";
import img9 from "./../assets/images/services/unloading.jpg";
import img10 from "./../assets/images/services/movings.png";
import img11 from "./../assets/images/services/wrap.jpg";
import img12 from "./../assets/images/services/wrap2.jpg";
import img13 from "./../assets/images/services/bubble.jpg";
import img14 from "./../assets/images/services/packingt.jpg";
import img15 from "./../assets/images/services/junk.jpg";
import imgsvg from "./../assets/images/services/Icon.svg";

// ✅ Moving Services
const movingServices = [
  {
    title: "Packing",
    img: img6,
    desc: "Safe and secure packing of all household and office items.",
  },
  {
    title: "Unpacking",
    img: img7,
    desc: "Organized unpacking services to set up your new place quickly.",
  },
  {
    title: "Loading",
    img: img8,
    desc: "Careful loading of goods with the right equipment to prevent damage.",
  },
  {
    title: "Unloading",
    img: img9,
    desc: "Safe unloading of your belongings at the destination with full care.",
  },
  {
    title: "Moving",
    img: img10,
    desc: "Professional local and long-distance moving services.",
  },
  {
    title: "Junk Removal",
    img: img15,
    desc: "Fast and reliable removal of unwanted items to keep your space clean.",
  },
  {
    title: "Boxes Packing",
    img: img14,
    desc: "Secure and organized packing for easy moving and storage.",
  },
  {
    title: "Wrapping Paper",
    img: img11,
    desc: "Protective wrapping to keep delicate items safe during transport.",
  },
  {
    title: "Stretch Wraps",
    img: img12,
    desc: "Durable stretch wrapping to secure boxes and furniture tightly.",
  },
  {
    title: "Bubble Wraps",
    img: img13,
    desc: "Shock-absorbing bubble protection for fragile and valuable items.",
  },
];

// ✅ Handyman Services
const handymanServices = [
  {
    title: "Carpentry",
    img: img1,
    desc: "Custom woodwork, trim, built-ins, repairs, and more.",
  },
  {
    title: "Roofing",
    highlight: true,
    img: img2,
    desc: "Leak repairs, new roof installation, and long-lasting maintenance.",
  },
  {
    title: "Electrical",
    img: img3,
    desc: "Panels, outlets, lighting installs, and safety inspections.",
  },
  {
    title: "HVAC",
    img: img4,
    desc: "Furnace, A/C installs, tune-ups, efficiency upgrades.",
  },
  {
    title: "Plumbing",
    img: img5,
    desc: "Leak fixes, fixture installs, water heaters, and more.",
  },
];

function ServiceCard({ title, img, desc, highlight }) {
  return (
    <div className={`${styles.card} ${highlight ? styles.cardHighlight : ""}`}>
      {img && <img src={img} alt={title} className={styles.cardImg} />}
      <div className={styles.shadowInset} />
      <div className={styles.cardLabel}>
        <span className={styles.cardTitle}>{title}</span>
      </div>
      <div className={styles.hoverOverlay} aria-hidden="true">
        <div className={styles.overlayContent}>
          <div className={styles.overlayTitle}>{title}</div>
          <p className="mb-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const location = useLocation(); // current path milega yahan se

  return (
    <section className={styles.wrap}>
      <div className="container">
        {/* ✅ Moving Services */}
        <div className=" mb-4">
          <div className={styles.kicker}>
            <img src={imgsvg} alt="" />
            Our Services
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className={styles.h2}>
                Moving{" "}
                <span className={styles.h2Light}>
                  Services <br /> We Offer
                </span>
              </h1>
            </div>
            <div className="col-lg-6 text-end">
              {" "}
              <Link to="/service" className={styles.ctaBtn}>
                Book A Service Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-5 justify-content-center">
          {movingServices.map((s) => (
            <div key={s.title} className="col-12 col-md-3">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>

        {/* ✅ Handyman Services (sirf /service page par show hoga) */}
        {location.pathname.includes("/service") && (
          <>
            <div className=" mb-4">
              <div className={styles.kicker}>
                <img src={imgsvg} alt="" />
                Our Services
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h1 className={styles.h2}>
                    Handyman{" "}
                    <span className={styles.h2Light}>
                      Services <br /> We Offer
                    </span>
                  </h1>
                </div>
                <div className="col-lg-6 text-end">
                  {" "}
                  <Link to="/service" className={styles.ctaBtn}>
                    Book A Service Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {handymanServices.map((s) => (
                <div key={s.title} className="col-12 col-md-3">
                  <ServiceCard {...s} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
