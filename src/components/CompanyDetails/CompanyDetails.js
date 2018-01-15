import React, { Component } from "react";
import "./styles/CompanyDetails.css";
import { TagsList } from "../Tags";
import { CloseButton } from "../Button";
import { Link } from "react-router-dom";

class CompanyDetails extends Component {
  render() {
    const {
      id,
      name,
      url,
      cities = [],
      countries = [],
      process,
      keywords = []
    } = this.props.infos;

    return (
      <div className="CompanyDetails">
        {/* BreadCrumbs */}
        <ul className="Breadcrumbs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{name}</li>
        </ul>
        <div className="CompanyDetails-Container">
          <div className="CompanyDetails-Title">
            <h1>{name}</h1>
            <CloseButton />
          </div>
          <div className="CompanyDetails-Details">
            <span>WEBSITE:</span>
            <p>{url}</p>
            <div className="CompanyDetails-Separator">
              <span>COUNTRIES:</span>
              {/* TAGS */}
              <TagsList tags={cities} />
              <span>CITIES:</span>
              <TagsList tags={countries} />

              {/* TAGS */}
            </div>
            <span>KEYWORDS:</span>
            {/* TAGS */}
            <TagsList tags={keywords} />
          </div>
          <div className="CompanyDetails-Description">
            <p>{process}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CompanyDetails;
