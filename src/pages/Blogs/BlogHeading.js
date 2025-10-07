import React from "react";
import style from "./Blog.module.css";
import PagerWithTimestamp from "./PagerWithTimestamp";
import AuthorCard from "./AuthorCard";

const BlogHeader = () => {
  return (
    <>
      <h6 className={style.headersmall}>Blog // News</h6>
      <div className={style.BlogHeading}>
        <h1 className={style.headerMain}>
          How Badruddin Stevedoring Handles Over 75,000 Containers Annually with
          Precision & Efficiency
        </h1>
      </div>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <p className={style.para}>
            In the world of port logistics, container handling is one of the
            most critical operations and one of the most demanding. At Badruddin
            Stevedoring, we proudly manage and move over 75,000 containers every
            year across major ports in Pakistan. This scale is a testament to
            our operational capacity, advanced infrastructure, and unwavering
            commitment to efficiency, safety, and client satisfaction..
          </p>
        </div>
        <PagerWithTimestamp />
        <section
          className={style.solution}
          style={{
            padding: "80px 0px ",
            display: "flex",
            justifyContent: "center",
          }}
        ></section>
        <div className={style.container}>
          <div className={style.texting}>
            <h2 className={style.headersec}>
              Decades of Experience, Modern-Day Execution
            </h2>
            <p>
              Founded in 1966, Badruddin Stevedoring has grown alongside the
              evolving needs of global trade. Today, container volumes continue
              to increase as Pakistan strengthens its role in regional shipping
              and logistics. Our decades of experience enable us to adapt
              quickly, manage complexity, and implement best practices in
              containerized cargo handling
              <br />
            </p>
            <p>
              We've invested heavily in container yard expansion, digital asset
              tracking, and personnel training to ensure that our operations not
              only keep up with industry demand but consistently set benchmarks
              for speed and accuracy.
            </p>

            <h2 className={style.headersec}>
              How We Efficiently Handle 75,000+ Containers Annually
            </h2>

            <ul className={style.customList}>
              <li>
                <h3 className={style.listHeading}>
                  Optimized Yard Layouts and Planning
                </h3>
                <p>
                  Our container yards are strategically designed for
                  high-throughput movement. With smart stacking protocols,
                  efficient access routes, and integrated loading/unloading
                  zones, we maximize space and minimize dwell times.
                </p>
              </li>

              <li>
                <h3 className={style.listHeading}>
                  Advanced Equipment and Automation
                </h3>
                <p>
                  From rubber-tired gantry cranes (RTGs) to top handlers and
                  reach stackers, we operate with a fleet of specialized
                  equipment built to handle containers safely and quickly.
                  Integration with digital yard management systems ensures
                  accurate container placement and reduced turnaround times.
                </p>
              </li>

              <li>
                <h3 className={style.listHeading}>
                  Real-Time Digital Tracking
                </h3>
                <p>
                  Every container moved through our terminal is monitored in
                  real-time. Clients have visibility into container status,
                  location, and movement history through secure portals. This
                  transparency supports better planning, coordination, and peace
                  of mind.
                </p>
              </li>

              <li>
                <h3 className={style.listHeading}>
                  24/7 Operational Capability
                </h3>
                <p>
                  Our facilities run round-the-clock to meet global shipping
                  schedules and avoid congestion. With trained teams on
                  staggered shifts, we ensure that every container is processed
                  without delay—whether arriving at midnight or midday.
                </p>
              </li>

              <li>
                <h3 className={style.listHeading}>
                  Compliance and Safety as Core Values
                </h3>
                <p>
                  Each operation complies with international safety standards
                  and local port authority regulations. Our safety-first culture
                  and regular audits help us maintain an incident-free record
                  while handling high volumes under pressure.
                </p>
              </li>
            </ul>

            <h2 className={style.headersec}>Why This Should Matter to You</h2>

            <p>
              Whether you're a freight forwarder, importer, exporter, or
              shipping line, container handling speed and reliability directly
              impact your bottom line. Delays at the port translate to increased
              storage fees, missed connections, and dissatisfied customers. With
              Badruddin Stevedoring, you benefit from:
            </p>

            <ul className={style.benefitsList}>
              <li>
                <p>Reduced container dwell times</p>
              </li>
              <li>
                <p>Faster customs and inland transfer</p>
              </li>
              <li>
                <p>Improved shipment accuracy and visibility</p>
              </li>
              <li>
                <p>Lower risk of cargo damage or loss</p>
              </li>
            </ul>

            <p>
              Our container handling services are especially suited for
              high-volume clients, time-sensitive shipments, and regional trade
              flows including Afghan Transit cargo.
            </p>
          </div>
        </div>
      </div>
      <AuthorCard />
      <div className="container mb-5">
        <div className={style.container}>
          <div className={style.texting}>
            <h2 className={style.headersec}>
              Scalable Solutions for a Growing Trade Hub
            </h2>

            <p>
              As Pakistan continues to position itself as a key logistics hub in
              South Asia, we are scaling our container handling operations to
              match that growth. From expansion in port handling capacity to
              exploring inland container depots (ICDs) and intermodal
              connectivity, Badruddin Stevedoring is aligned with the future of
              logistics in the region.
            </p>
            <h2 className={style.headersec}>Partner With Confidence</h2>

            <p>
              Over 75,000 containers a year. Hundreds of satisfied clients.
              Decades of trust. Partner with Badruddin Stevedoring for container
              operations that are fast, secure, and fully optimized for your
              logistics needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
