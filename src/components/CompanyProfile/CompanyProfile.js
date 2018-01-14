import React, { Component } from "react";
import "./styles/CompanyProfile.css";
import { TagsList } from "../Tags";
import { CloseButton } from "../Button";
import { Link } from "react-router-dom";

const tags = [
  {
    name: "OO"
  }
];
class CompanyProfile extends Component {
  render() {
    return (
      <div className="CompanyProfile">
        {/* BreadCrumbs */}
        <ul>
          <li>Home</li>
          <li>3d Hubs</li>
        </ul>
        <div className="CompanyProfile-Container">
          <div className="CompanyProfile-Title">
            <h1>3d Hubs</h1>
            <CloseButton  />
          </div>
          <div className="CompanyProfile-Details">
            <span>WEBSITE:</span>
            <p>wwww.dsddsd.com</p>
            <div className="CompanyProfile-Separator">
              <span>COUNTRIES:</span>
              {/* TAGS */}
              <TagsList tags={tags} />
              <span>CITIES:</span>
              <TagsList tags={tags} />
              {/* TAGS */}
            </div>
            <span>KEYWORDS:</span>
            {/* TAGS */}
            <TagsList tags={tags} />
          </div>
          <div className="CompanyProfile-Description">
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default CompanyProfile;
