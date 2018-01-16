import React from "react";
import "./styles/Tags.css";

const Tags = ({ name, color }) => {
  const attributes = {
    className: "Tags",
    style: { color }
  };
  return <div {...attributes}>{name}</div>;
};


Tags.defaultProps = {
  color: "#D3D4D8"
};

export default Tags;
