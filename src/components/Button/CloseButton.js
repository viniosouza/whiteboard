import React from "react";
import CloseImg from "../../img/close-button.png";
import "./styles/Button.css";

function CloseButton(props) {
  return (
    <button {...props} className="Close-button">
      <img className="Close-img" src={CloseImg} />
    </button>
  );
}
export default CloseButton;
