import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

const HomepageBanner = ({ homeBannerContent, menuItems }) => {
  return (
    <header>
      <div
        className="img-fluid banner"
        style={{ backgroundImage: `url(${homeBannerContent.image})` }}
      >
        <Navbar className="navbar navbar-expand-md" expand="md">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="m-auto navbarLinks">
              {menuItems.map(({ menuItem }, i) => {
                const menu = menuItem.split(" ").join("");
                return (
                  <Fragment key={i}>
                    <Nav.Link href={`#${menu.split(" ").join("")}`}>
                      {menuItem}
                    </Nav.Link>
                  </Fragment>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="d-flex align-items-center min-vh-100">
          <Container>
            <Row className="my-auto">
              <div className={"bannerContent"}>
                <h1 className={"title"}>{homeBannerContent.title}</h1>
                <h2 className={"subtitle"}>{homeBannerContent.description}</h2>
                <a
                  className={"homeButton"}
                  href={homeBannerContent.bannerbuttonLink}
                >
                  {homeBannerContent.bannerButtonText}
                </a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
};
HomepageBanner.propTypes = {
  homeBannerContent: PropTypes.object,
  menuItems: PropTypes.array,
};

export default HomepageBanner;
