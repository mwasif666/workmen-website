import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Marquee.module.css";

const Lines = () => {
  const marqueePartRefs = useRef([]);
  const marqueeInnerRefs = useRef([]);
  const tweenRef = useRef(null);

  // Add elements to ref arrays
  const addToMarqueePartRefs = (el) => {
    if (el && !marqueePartRefs.current.includes(el)) {
      marqueePartRefs.current.push(el);
    }
  };

  const addToMarqueeInnerRefs = (el) => {
    if (el && !marqueeInnerRefs.current.includes(el)) {
      marqueeInnerRefs.current.push(el);
    }
  };

  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    // Create GSAP animation using the refs
    const tween = gsap
      .to(marqueePartRefs.current, {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      })
      .totalProgress(0.5);

    // Set initial position for inner containers
    gsap.set(marqueeInnerRefs.current, { xPercent: -50 });

    tweenRef.current = tween;

    const handleScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  const marqueeText =
    "◉ 24/7 Moving Service Available  ◉ 24/7 Moving Service Available ◉ 24/7 Moving Service Available ";

  return (
    <div className={styles.mainMarqueeDiv}>
      <section className={styles.marquee33}>
        <div
          className={styles.marqueeInner}
          aria-hidden="true"
          ref={addToMarqueeInnerRefs}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={styles.marqueePart}
              ref={addToMarqueePartRefs}
            >
              {marqueeText}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.marquee22}>
        <div
          className={styles.marqueeInner}
          aria-hidden="true"
          ref={addToMarqueeInnerRefs}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={styles.marqueePart}
              ref={addToMarqueePartRefs}
            >
              {marqueeText}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lines;
