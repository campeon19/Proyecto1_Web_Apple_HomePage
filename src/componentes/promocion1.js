/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import 'bootstrap';
import './promocion1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';


class Promocion1 extends React.Component{
    render(){
        return(
            <div className="row no-gutters product-grid">
                <div className='col-md-6'>
                    <div className='product-small seccion1'>
                        <h3>Apple Event</h3>
                        <h4>Watch on Abril 20 at 10:00 a.m. PDT.</h4>
                        <div className='links'>
                            <a href='#' className="learn-more">Learn more <FontAwesomeIcon icon={faAngleRight} /></a>
                        </div>
                        <img className='img-fluid' src='https://www.apple.com/v/home/x/images/promos/apple-event-april/promo_tile__ivhgndrnkuye_large.jpg'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='product-small seccion2'>
                    <img className='img-fluid' src='https://www.apple.com/v/home/x/images/logos/watch-series-6/logo__dcojfwkzna2q_large.png'/>
                        <h4>The future of health is on your wrist.</h4>
                        <div className='links'>
                        <a href='#' className="learn-more">Learn more <FontAwesomeIcon icon={faAngleRight} /></a>
                        <a href='#'>Buy <FontAwesomeIcon icon={faAngleRight} /></a>
                        </div>
                        <img className='img-fluid' src='https://www.apple.com/v/home/x/images/promos/watch-series-6/tile__cauwwcyyn9hy_large.jpg'/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Promocion1;