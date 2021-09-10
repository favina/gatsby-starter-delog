import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const ProfileDataSection = ({ data }) => {
  return (
    <Fragment>
      <h2 className={"text-center"}>{data.title}</h2>
      <p>{data.subtext}</p>
      {data.profileData.map(({ image, title, text }, i) => (
        <div className="card mb-3" key={i}>
          <Row className="no-gutters">
            <Col xs={3} className="mx-auto mx-md-0">
              <img
                className="img-thumbnail rounded"
                src={`${image}`}
                alt="Card image cap"
                width="200px"
              />
            </Col>
            <Col md={8}>
              <div className="card-body">
                <h4>{title}</h4>
                <p className="card-text">{text}</p>
              </div>
            </Col>
          </Row>
        </div>
      ))}
      <p>{data.text}</p>
    </Fragment>
  );
};

ProfileDataSection.propTypes = {
  data: PropTypes.object,
};

export default ProfileDataSection;
