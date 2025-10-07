import React from "react";
import styles from "./PagerWithTimestamp.module.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
export default function PagerWithTimestamp({ onPrev, onNext, lastUpdated }) {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className="row">
        <div className="col-12">
          <div className={`d-flex align-items-center ${styles.bar}`}>
            {/* Previous */}
            <a href="#" className={styles.readMoreButton}>
              <RiArrowLeftSLine /> Previous
            </a>

            {/* Center Timestamp */}
            <div className="text-center">
              <div className={styles.subtleLabel}>Last Updated On:</div>
              <div className={styles.timeText}>07/08/2025 - 09:45AM</div>
            </div>

            {/* Next */}
            <a href="#" className={styles.readMoreButton}>
              Next <RiArrowRightSLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
