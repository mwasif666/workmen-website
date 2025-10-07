// LeadershipTeam.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Leadership.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import img1 from "../../assets/images/team/1.png";
import img2 from "../../assets/images/team/2.png";
import img3 from "../../assets/images/team/3.png";
import img4 from "../../assets/images/team/4.png";
import img5 from "../../assets/images/team/5.png";
import img6 from "../../assets/images/team/6.png";
import img7 from "../../assets/images/team/7.png";
import img8 from "../../assets/images/team/8.png";

const team = [
  {
    name: "Salman Zulfiqar",
    role: "Chief Executive Officer",
    blurb:
      "Over 30 years in port logistics and strategic cargo operations management.",
    img: img1,
  },
  {
    name: "Sadia Khan",
    role: "Chief Operating Officer",
    blurb:
      "Expert in operations & process optimization for large-scale projects.",
    img: img2,
  },
  {
    name: "Imran Qureshi",
    role: "Director of Logistics",
    blurb:
      "20+ years in international freight forwarding and supply chain solutions.",
    img: img3,
  },
  {
    name: "Nadia Hussain",
    role: "Head of Client Relations",
    blurb:
      "Specialist in customer engagement and tailored cargo handling strategies.",
    img: img4,
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    role: "Operations Manager",
    blurb:
      "Extensive experience managing port operations & container handling efficiency",
    img: img5,
  },
  {
    id: 6,
    name: "Mehboob Azhar",
    role: "Senior Project Cargo Specialist",
    blurb:
      "Expert in heavy-lift and overused cargo handling for complex logistics needs.",
    img: img6,
  },
  {
    id: 7,
    name: "Ayesha Siddiqui",
    role: "Finance & Compliance Director",
    blurb:
      "Overseas budgeting, financial planning, and adherence to industry regulations.",
    img: img7,
  },
  {
    id: 8,
    name: "Omar Zafar",
    role: "Technology & Innovation Lead",
    blurb:
      "Drives digital tracking systems and automation in logistics processes.",
    img: img8,
  },
];

export default function LeadershipTeam() {
  return (
    <section className={`container ${styles.section}`}>
      <div className="text-center mb-4 mb-md-5">
        <h2 className={styles.title}>Our Leadership & Team</h2>
        <p className={`mx-auto ${styles.subheading}`}>
          Our experienced team combines decades of industry knowledge with
          modern logistics practices. Skilled professionals oversee all
          operations to ensure cargo integrity, safety compliance, and
          operational excellence.
        </p>
      </div>

      {/* Single grid layout - always show 4 per row */}
      <div className="row g-4">
        {team.map((m) => (
          <div key={m.name} className="col-12 col-sm-6 col-lg-3">
            <MemberCard {...m} />
          </div>
        ))}
      </div>
    </section>
  );
}

function MemberCard({ name, role, blurb, img }) {
  return (
    <div className={`card h-100 border-0 ${styles.card}`}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div>
            <h5 className={`mb-1 ${styles.name}`}>{name}</h5>
            <div className={`small ${styles.role}`}>{role}</div>
          </div>
        </div>
        <p className={`mb-4 ${styles.blurb}`}>{blurb}</p>
        <div className="d-flex align-items-end justify-content-between gap-2">
          <div className={styles.avatarWrap}>
            <img src={img} alt={name} className={styles.avatar} />
          </div>
          <div className="d-flex">
            <button type="button" className={styles.iconBtn} aria-label="Email">
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
    </div>
  );
}
