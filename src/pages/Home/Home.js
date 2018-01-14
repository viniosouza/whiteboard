import React, { Component } from "react";
import Modal from "../../components/Modal";
import "./styles/Home.css";
import { Pagination } from "antd";

class Home extends Component {
  state = {
    openModal: false
  };

  toggleActive() {
    this.setState(state => ({ openModal: !state.openModal }));
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-Container-title">
          <span class="Home-title">
            Find out companies that hire you without using white board! or
          </span>
          <button
            className="register-button"
            onClick={() => this.toggleActive()}
          >
            REGISTER ONE COMPANY
          </button>
          <Modal
            openModal={this.state.openModal}
            onCancel={() => this.toggleActive()}
            className="Home-container"
          />
        </div>
        <div className="Home-page">
          <input className="Input-search" type="text" placeholder="Search" />
          <table>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>WEBSITE</th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
              </tr>
            </tbody>
          </table>
          <div className="Home-Pagination">
            <Pagination onChange={this.onChange} total={50} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
