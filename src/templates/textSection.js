import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TextSection = ({ data }) => {
  return (
    <Fragment>
      <h2 className={"text-center"}>{data.title}</h2>
      <p>{data.text}</p>
    </Fragment>
  );
};

TextSection.propTypes = {
  data: PropTypes.object,
};

export default TextSection;
