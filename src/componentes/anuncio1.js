/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./anuncio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Anuncio1 extends React.Component {
  render() {
    return (
      <div className="anuncio azul">
        <a href="#">
          Evaluate COVID-19 symptons and understand next steps{" "}
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    );
  }
}

export default Anuncio1;
