// components/TimelineCarousel.jsx
import { useState, useEffect, useRef } from "react";
import styles from "./TimelineCarousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TimelineCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      year: "1966",
      title: "Founded",
      description:
        "Badruddin Stevedoring began operations in Karachi, establishing itself as a trusted provider of port logistics and cargo handling in Pakistan since 1966.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/04/08/13/harbour-crane-1643476_1280.jpg",
      captionPosition: "start",
    },
    {
      year: "2001",
      title: "Integration into Waterlink Group",
      description:
        "In 2001, Badruddin became part of the Waterlink Group, significantly expanding its regional presence and capabilities in maritime logistics and shipping.",
      image:
        "https://cdn.pixabay.com/photo/2019/08/26/10/10/dockland-4431309_640.jpg",
      captionPosition: "end",
    },
    {
      year: "2010",
      title: "Modernization",
      description:
        "Badruddin upgraded its fleet and facilities in 2010, incorporating the latest shipping technology and expanding operations across international routes.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/06/22/21/harbour-cranes-1650374_640.jpg",
      captionPosition: "start",
    },
    {
      year: "2015",
      title: "Global Partnerships",
      description:
        "By 2015, strategic partnerships with major global shipping lines allowed Badruddin to increase cargo throughput and service quality at Karachi port.",
      image:
        "https://cdn.pixabay.com/photo/2018/06/24/03/06/harbor-3493887_640.jpg",
      captionPosition: "end",
    },
    {
      year: "2020",
      title: "Sustainability",
      description:
        "In 2020, Badruddin launched green initiatives at the port, investing in cleaner energy cranes and eco-friendly handling processes to reduce environmental impact.",
      image:
        "https://cdn.pixabay.com/photo/2014/10/11/14/01/harbour-cranes-484594_640.jpg",
      captionPosition: "start",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Implementing digital tracking and automated logistics solutions in 2021 enabled real-time cargo management and significantly improved operational efficiency.",
      image:
        "https://cdn.pixabay.com/photo/2022/08/29/07/44/port-7418239_1280.jpg",
      captionPosition: "end",
    },
    {
      year: "2025",
      title: "Future Expansion",
      description:
        "Badruddin is planning further expansion by 2025, including new terminals and partnerships, to enhance its position as a leading regional port operator.",
      image:
        "https://cdn.pixabay.com/photo/2019/08/26/10/10/dockland-4431309_640.jpg",
      captionPosition: "start",
    },
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const goToPrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    // Reset progress when active index changes
    setProgress(0);

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new progress interval
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          goToNext();
          return 0;
        }
        return prev + 1;
      });
    }, 20);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === activeIndex ? styles.active : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(
    rgba(0,0,0,0.6), 
    rgba(0,0,0,0.6)
  ), url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <div
                className={`${styles.carouselCaption} ${
                  slide.captionPosition === "end"
                    ? styles.textEnd
                    : styles.textStart
                }`} */}
              <div className={`${styles.carouselCaption} `}>
                <h1>{slide.year}</h1>
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className={styles.Naviagtions}>
          <FaChevronLeft
            className={styles.carouselControlPrev}
            size={28}
            onClick={goToPrev}
            color="#008951"
          />
          <FaChevronRight
            className={styles.carouselControlNext}
            size={28}
            onClick={goToNext}
            color="#008951"
          />

          {/* Timeline Indicators */}
          <div className={styles.carouselIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === activeIndex ? styles.active : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              >
                <span
                  style={{
                    width: index === activeIndex ? `${progress}%` : "0%",
                  }}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
