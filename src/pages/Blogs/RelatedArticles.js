// RelatedArticles.jsx — React + Bootstrap + CSS Modules + Swiper (JSX)
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import styles from "./RelatedArticles.module.css";

// Simple chevrons
const ChevronLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Single card
function ArticleCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.mediaWrap}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.media}
          loading="lazy"
        />
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{item.title}</h5>
        <a className={styles.moreBtn} href={item.href || "#"}>
          Read More{" "}
          <span className={styles.arrow} aria-hidden>
            ›
          </span>
        </a>
      </div>
    </div>
  );
}

export default function RelatedArticles({
  title = "Related Articles",
  subtitle = "Explore more about how Badruddin Stevedoring powers Pakistan’s logistics sector with trusted expertise and innovative solutions. Discover our full range of capabilities and the impact we’ve made across the industry.",
  items = [],
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className={`container py-5 ${styles.wrap}`}>
        <div className="text-center">
          <h2 className={styles.heading}>{title}</h2>
          <p className={`mx-auto ${styles.subheading}`}>{subtitle}</p>

          <div className="d-flex justify-content-center gap-3 my-2">
            <button
              ref={prevRef}
              className={styles.navBtn}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button ref={nextRef} className={styles.navBtn} aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // navigation={{ enabled: true }}
        spaceBetween={30}
        // slidesPerView={5}
        centeredSlides={true}
        breakpoints={{
          576: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mb-5"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ArticleCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
