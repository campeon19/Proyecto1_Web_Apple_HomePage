/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './producto.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';





class Producto extends React.Component{

    render(){
        return (
          <section className="producto IPhone12">
            <h1>IPhone 12</h1>
            <h2>Blast past fast.</h2>
            <p>From $29.12/mo. for 24mo. or $699 before trade-in.</p>
            <p className="parrafo2">
              Buy directly from Apple with special carrier offers
            </p>
            <div className="links">
              <a href="#" className="learn-more">
                Learn more{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <a href="#">
                Buy <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <img
              className="img-fluid"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-og-202010?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1601435256000"
            />
          </section>
        );
    }
};

export default Producto;