import React from "react";
import styles from "./PartnersClients.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const dummyLogos = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  // square-ish logo tiles; swap with real logos (e.g., /assets/logo-x.png)
  src: `https://picsum.photos/seed/partner-${i + 1}/160/120`,
  alt: `Partner logo ${i + 1}`,
}));

export default function PartnersClients() {
  return (
    <section
      className={` ${styles.wrapper}`}
      aria-labelledby="partners-heading"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <h2 id="partners-heading" className={styles.title}>
              Our Partners & Clients
            </h2>
            <p className={`mx-auto ${styles.subtitle}`}>
              Badruddin Stevedoring serves major shipping lines, logistics
              providers, government projects, and freight forwarders across
              Pakistan. Through Waterlink Group, we collaborate closely with
              entities in air freight, sea freight, chartering, and customs
              brokerage.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Swiper
            className={styles.slider}
            modules={[Autoplay, FreeMode, A11y]}
            loop
            freeMode={{ enabled: true, momentum: false }}
            // continuous marquee-style motion:
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={6000} // higher = smoother/slower drift; tweak to taste
            spaceBetween={16}
            loopedSlides={dummyLogos.length}
            allowTouchMove={false}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 18 },
              992: { slidesPerView: 4, spaceBetween: 20 },
              1200: { slidesPerView: 6, spaceBetween: 20 },
            }}
            a11y={{
              prevSlideMessage: "Previous partners",
              nextSlideMessage: "Next partners",
            }}
          >
            {dummyLogos.map((item) => (
              <SwiperSlide key={item.id} className={styles.slideWrap}>
                <div className={styles.logoCard}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.logoImg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
