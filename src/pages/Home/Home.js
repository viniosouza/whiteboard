import React, { Component } from "react";
import Modal from "../../components/Modal";
import "./styles/Home.css";
import { Pagination } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      searchText: "",
      name: "",
      url: "",
      cities: "",
      countries: "",
      process: "",
      keywords: ""
    };
  }
  toggleActive() {
    this.setState(state => ({ openModal: !state.openModal }));
  }
  render() {
    const { id, name, url } = this.props.infos;
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
          >
            <label for="fname">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Company name"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              maxlength="150"
            />

            <label for="lname">WEBSITE URL</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Website"
              maxlength="120"
              onChange={e => {
                this.setState({ url: e.target.value });
              }}
            />
            <label for="lname">CITIES</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="São Paulo, New York, Sidney"
              onChange={e => {
                this.setState({ cities: e.target.value.split(",") });
              }}
            />
            <label for="lname">COUNTRIES</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Brazil, USA, Canada"
              onChange={e => {
                this.setState({ countries: e.target.value.split(",") });
              }}
            />
            <label>PROCESS DESCRIPTION</label>
            <textarea
              class="Process-textearea"
              rows="5"
              maxlength="250"
              placeholder="ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              onChange={e => {
                this.setState({ process: e.target.value });
              }}
            />
            <label for="lname">KEYWORDS</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="REACT, REDUX, SCRUM"
              onChange={e => {
                this.setState({ keywords: e.target.value.split(",") });
              }}
            />
            <div className="Modal-button">
              <button
                className="register-modal-button"
                onClick={e => {
                  e.preventDefault();

                  const {
                    name,
                    url,
                    cities,
                    countries,
                    process,
                    keywords
                  } = this.state;

                  let registerCompanyInfo = {
                    name,
                    url,
                    cities,
                    countries,
                    process,
                    keywords
                  };

                  this.props.registerCompany(registerCompanyInfo);
                  this.toggleActive();
                }}
              >
                REGISTER
              </button>
            </div>
          </Modal>
        </div>
        <div className="Home-page">
          <input
            className="Input-search"
            name="search"
            type="text"
            placeholder="Search"
            ref={searchText => {
              this.searchArea = searchText;
            }}
            onChange={e => {
              e.preventDefault();
              if (e.target.value) this.props.updateSearch(e.target.value);
            }}
          />
          <table>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>WEBSITE</th>
              </tr>
              <tr>
                <td>{name}</td>
                <td>{url}</td>
              </tr>
            </tbody>
          </table>
          <div className="Home-Pagination">
            <Pagination
              onChange={this.onChange}
              defaultCurrent={this.props.total}
              total={this.props.total}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
