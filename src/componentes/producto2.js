/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Producto2 extends React.Component {
  render() {
    return (
      <section className="producto IPhone12-Pro dark">
        <h1>IPhone 12 Pro</h1>
        <h2>It's a leap year.</h2>
        <p>From $41.62/mo. for 24mo. or $999 before trade-in.</p>
        <p className="parrafo2">
          Buy directly from Apple with special carrier offers
        </p>
        <div className="links small-link-margin">
          <a href="#" className="learn-more">
            Learn more <FontAwesomeIcon icon={faAngleRight} />
          </a>
          <a href="#">
            Buy <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
        <img
          className="img-fluid"
          src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202103270259"
        />
      </section>
    );
  }
}

export default Producto2;
