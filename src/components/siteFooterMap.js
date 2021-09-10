import React, { Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SiteFooterMap = ({ menuItems }) => {
  const defaultProps = {
    center: {
      lat: 63.4494708202128,
      lng: 10.912436292574748,
    },
    zoom: 15,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 63.4494708202128, lng: 10.912436292574748 },
      map,
      title: "Scandic Hell",
    });
    return marker;
  };

  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCR_REOa_3Kg0ZH-BYH7GrGBbhyg7EfDI0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
      <Container>
        <footer className="page-footer footer">
          <hr className="featurette-divider" />
          <div className="row align-items-start">
            {menuItems.map(({ menuItem }, i) => {
              const menu = menuItem.split(" ").join("");
              return (
                <Fragment key={i}>
                  <Col>
                    <a
                      className={"footerLinks"}
                      href={`#${menu.split(" ").join("")}`}
                    >
                      {menuItem}
                    </a>
                  </Col>
                </Fragment>
              );
            })}
          </div>
        </footer>
      </Container>
    </div>
  );
};
SiteFooterMap.propTypes = {
  menuItems: PropTypes.array,
};
export default SiteFooterMap;
