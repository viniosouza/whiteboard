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
          <form action="">
            <label for="fname">NAME</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Company name"
            />

            <label for="lname">WEBSITE URL</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="lname">CITIES</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="lname">COUNTRIES</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label>PROCESS DESCRIPTION</label>
            <textarea class="Process-textearea" rows="5" maxlength="250" />
            <label for="lname">KEYWORDS</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <div className="Modal-button">
              <button className="register-modal-button">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Modal;
