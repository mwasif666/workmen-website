import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Testimonials.module.css";
import t1 from "./../../assets/images/review3.jpg";
import t2 from "./../../assets/images/review4.jpg";
import t3 from "./../../assets/images/david.jpg";
import t4 from "./../../assets/images/review6.jpg";
import t5 from "./../../assets/images/linda.jpg";
import t6 from "./../../assets/images/review5.jpg";
import t7 from "./../../assets/images/review1.jpg";
import t8 from "./../../assets/images/review2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John M",
      date: "12/09/2025",
      text: "I booked their moving service for shifting my apartment. The team packed everything safely and handled my furniture with care. Smooth experience!",
      img: t1,
      rating: 5,
    },
    {
      name: "Sarah K",
      date: "10/09/2025",
      text: "We had to move during heavy rain. Their movers came on time, wrapped our belongings, and ensured nothing was damaged. Very professional service.",
      img: t2,
      rating: 4.5,
    },
    {
      name: "David R",
      date: "08/09/2025",
      text: "Our office relocation was done perfectly. They dismantled and reassembled desks, moved electronics safely, and finished within a day. Highly reliable!",
      img: t3,
      rating: 5,
    },
    {
      name: "Emily W",
      date: "06/09/2025",
      text: "Needed to shift my house urgently. The movers packed, loaded, and transported everything quickly. Stress-free moving experience!",
      img: t4,
      rating: 4,
    },
    {
      name: "Linda S",
      date: "02/09/2025",
      text: "I needed help shifting heavy furniture upstairs. Their movers handled it effortlessly and set everything in place. Very satisfied!",
      img: t5,
      rating: 5,
    },
    {
      name: "George T",
      date: "30/08/2025",
      text: "We moved to a new house after a storm. The team packed our stuff quickly and even helped arrange boxes in the new home. Excellent service.",
      img: t6,
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.star} />);
      }
    }
    return stars;
  };

  return (
    <Container className={styles.testimonialsSection}>
      <div className={styles.Navigations}>
        <div>
          <h1
            style={{
              fontWeight: "700",
            }}
            className={styles.header}
          >
            What Our Customers Say
          </h1>
        </div>

        {/* Custom Navigation Buttons */}
        <div className={styles.navWrapper}>
          <div className={`${styles.navBtn} ${styles.prevBtn}`}>
            <FaChevronLeft />
          </div>
          <div className={`${styles.navBtn} ${styles.nextBtn}`}>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: `.${styles.nextBtn}`,
          prevEl: `.${styles.prevBtn}`,
        }}
        autoplay={{
          delay: 3000, // 3 sec ka delay
          disableOnInteraction: false, // interaction ke baad bhi autoplay continue
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className={`${styles.swiper}`} key={index}>
            <div className={`${styles.card}`}>
              <div>
                <div className={styles.cardTitle}>
                  <div className={styles.initials}>
                    <span>{testimonial.name.split(" ")[0][0]}</span>
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className={styles.date}>{testimonial.date}</p>
                    <div className={styles.rating}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <Card.Text>{testimonial.text}</Card.Text>
              </div>
              <Card.Img
                variant="bottom"
                src={testimonial.img}
                style={{
                  height: "260px",
                  objectFit: "cover",
                }}
                className={styles.testimonialImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
