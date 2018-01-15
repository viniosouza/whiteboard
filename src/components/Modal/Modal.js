import React, { Component } from "react";
import "./styles/Modal.css";
import CloseButton from "../Button/CloseButton";
class Modal extends Component {
  render() {
    const { openModal } = this.props;
    const classNames = `ContainerModal ${openModal ? "--active" : ""}`;
    return (
      <div className={classNames}>
        <div className="Modal-Container">
          <div className="Modal-title">
            <h6>REGISTER ONE COMPANY</h6>
            <CloseButton onClick={this.props.onCancel} />
          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Modal;
