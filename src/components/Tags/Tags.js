import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/Tags.css";

const Tags = ({ name = [], color }) => {
  const attributes = {
    className: "Tags",
    style: { color }
  };
  return <div {...attributes}>{name}</div>;
};

Tags.PropTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired
};

Tags.defaultProps = {
  color: "#D3D4D8"
};

export default Tags;
