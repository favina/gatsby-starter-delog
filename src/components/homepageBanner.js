import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Container } from "react-bootstrap";

const HomepageBanner = ({ homeContent, siteUrls }) => {
  return (
    <header>
      <div
        className="img-fluid banner"
        style={{ backgroundImage: `url(${homeContent.image})` }}
      >
        <Navbar
          className="navbar navbar-expand-sm fixed-top navbar-light"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={"justify-content-center"}
          >
            <Nav className="m-auto navbarLinks">
              {siteUrls.map(({ urlName }, i) => (
                <Fragment key={i}>
                  <Nav.Link href="#home">{urlName}</Nav.Link>
                </Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <div className={"bannerContent"}>
            <h1 className={"title"}>{homeContent.title}</h1>
            <h2 className={"subtitle"}>{homeContent.description}</h2>
            <a className={"homeButton"} href={homeContent.buttonLink}>
              {homeContent.buttonText}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
};
HomepageBanner.propTypes = {
  homeContent: PropTypes.object,
  siteUrls: PropTypes.array,
};

export default HomepageBanner;
