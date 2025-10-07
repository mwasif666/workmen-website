import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

// Global CSS imports
import "./App.css";
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";

import NavbarPage from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./Scroll";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop />

        {/* ✅ Common Navbar - Sirf ek jagah */}
        <NavbarPage />

        {/* ✅ Routes for all pages */}
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.component} key={idx} />
          ))}
        </Routes>

        {/* ✅ Common Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
