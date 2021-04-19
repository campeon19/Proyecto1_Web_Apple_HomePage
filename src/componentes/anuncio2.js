/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './anuncio.css';


class Anuncio1 extends React.Component{

    render(){
        return (
          <div className="anuncio">
            <p>
              <a href="#">Shop online</a> and get Specialist help, free
              no-contact delivery, and more.
            </p>
          </div>
        );
    }
};

export default Anuncio1;