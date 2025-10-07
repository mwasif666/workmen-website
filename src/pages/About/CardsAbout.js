import React from "react";
import styles from "./CardsAbout.module.css"; // Import the CSS Module
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CardsAbout = () => {
  // Data array to map through all the cards with their respective links
  const cardData = [
    {
      heading: "58+ Years Of Experience",
      subHeading: "in cargo handling and stevedoring operations",
      link: "/blog",
    },
    {
      heading: "25,000+ Shipments",
      subHeading: "Of experience in cargo handling and stevedoring operations",
      link: "/blog",
    },
    {
      heading: "75,000+ Containers",
      subHeading: "Handled annually with precision and efficiency",
      link: "/blog",
    },
    {
      heading: "450+ Logistics Professionals",
      subHeading: "Operating round-the-clock to ensure smooth operations",
      link: "/blog",
    },
    {
      heading: "300+ Client Partnerships",
      subHeading:
        "Including global shipping lines and major infrastructure projects",
      link: "/blog",
    },
    {
      heading: "99.8% Safety Record",
      subHeading: "Maintained over the last five years of operations",
      link: "/blog",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className={`row ${styles.cardRow}`}>
        {cardData.map((card, index) => (
          <div key={index} className="col-12 mb-4">
            <div className={styles.card}>
              <div>
                <h3 className={styles.heading}>{card.heading}</h3>
              </div>
              <div>
                <p className={styles.subHeading}>{card.subHeading}</p>
              </div>
              <div className={styles.buttonContainer}>
                <a href={card.link} className={styles.arrowButton}>
                  <RiArrowRightSLine />
                </a>
                <Link to={card.link} className={styles.readMoreButton}>
                  Read More <RiArrowRightSLine />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsAbout;
