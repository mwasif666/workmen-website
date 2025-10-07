import React, { useState } from "react";
import { Link } from "react-router-dom";

const Switch = () => {
  const [isSwitchToggle, setIsSwitchToggle] = useState(false);

  const toggleThem = () => {
    var layoutMode = document.body.getAttribute("data-bs-theme");
    if (layoutMode === "dark") {
      document.body.setAttribute("data-bs-theme", "light");
    } else {
      document.body.setAttribute("data-bs-theme", "dark");
    }
  };

  const toggleSwitcher = () => {
    setIsSwitchToggle(!isSwitchToggle);
  };

  return (
    <React.Fragment>
      <div id="style-switcher">
        <div className="bottom">
          <Link
            to="#"
            id="mode"
            className="mode-btn text-white"
            onClick={toggleThem}
          >
            <i className="mdi mdi-moon-waning-crescent mode-dark"></i>
            <i className="mdi mdi-white-balance-sunny mode-light"></i>
          </Link>
          <Link
            to="#"
            onClick={toggleSwitcher}
            className="settings rounded-right"
          >
            <i className="mdi mdi-cog  mdi-spin"></i>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Switch;
