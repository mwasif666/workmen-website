import React from "react";
import style from "./Service.module.css";

const ServiceHeader = () => {
  return (
    <>
      <div className={style.headerdiv}>
        <h1 className={style.headerMain}>
          We Provide Comprehensive Cargo & Logistics Solutions
        </h1>
      </div>
      <div className={style.paradiv}>
        <p className={style.para}>
          our range of services are designed to meet the complex demands of
          today’s shipping and logistics
        </p>
      </div>
    </>
  );
};

export default ServiceHeader;
