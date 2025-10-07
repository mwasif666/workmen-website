import React, { Component } from "react";
import { Container } from "reactstrap";
import { useLocation } from "react-router-dom";

// Import Background Image
import Background from "./../assets/images/banner.png";

// Wrapper to use hook inside class
function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

class Banners extends Component {
  getPageTitle = (pathname) => {
    switch (pathname) {
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      case "/service":
        return "Our Services";
      case "/booking":
        return "Booking";
      default:
        return "Welcome";
    }
  };

  render() {
    const { location } = this.props;
    const pageTitle = this.getPageTitle(location.pathname);

    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-7 bg-center position-relative"
          style={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px",
            paddingTop: "220px",
            position: "relative",
            zIndex: "-1",
          }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <Container>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h1 className="text-center text-white hero-7-title">
                  {pageTitle}
                </h1>
              </div>
            </div>
          </Container>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default withRouter(Banners);
