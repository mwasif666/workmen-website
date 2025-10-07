import React from "react";
import styles from "./AuthorCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import img8 from "../../assets/images/team/8.png";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AuthorCard() {
  return (
    <section className={`container-fluid my-4 ${styles.wrapper}`}>
      <div className={`row g-4 align-items-center ${styles.card}`}>
        {/* Left: Avatar + Author Info */}
        <div className="col-md-5 d-flex gap-3 align-items-center">
          <img
            src={img8}
            alt="Omar Zafar portrait"
            className={`${styles.avatar} rounded-3`}
          />
          <div className="flex-grow-1">
            <div className={styles.byline}>Written By:</div>
            <h3 className={`mb-1 ${styles.name}`}>Omar Zafar</h3>
            <div className={`mb-2 ${styles.role}`}>
              Technology & Innovation Lead
            </div>
            <p className={`mb-2 ${styles.bio}`}>
              Drives digital tracking systems and automation in logistics
              processes.
            </p>
            <div className="d-flex">
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="Email"
              >
                <span aria-hidden>
                  <IoIosMail />
                </span>
              </button>
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="LinkedIn"
              >
                <span aria-hidden>
                  <FaLinkedinIn />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle: Published / Updated */}
        <div className="col-md-3">
          <div className="d-flex flex-column gap-3">
            <div>
              <div className={styles.metaLabelold}>Published On:</div>
              <div className={styles.metaValueold}>01/08/2025 – 10:23AM</div>
            </div>
            <div>
              <div className={styles.metaLabel}>Last Update:</div>
              <div className={styles.metaValue}>01/08/2025 – 10:23AM</div>
            </div>
            <div>
              <span className={` ${styles.pill}`}>
                See Edits <RiArrowDropDownLine />
              </span>
            </div>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="col-md-4 ms-md-auto d-flex justify-content-md-end">
          <a href="#" className={`btn ${styles.ctaButton}`}>
            Read All Publications By Omar Zafar{" "}
            <span className="ms-2" aria-hidden>
              ›
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
