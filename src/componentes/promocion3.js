import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './promocion1.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


class Promocion2 extends React.Component{
    render(){
        return(
            <div className="row no-gutters product-grid">
                <div className='col-md-6'>
                    <div className='product-small seccion5'>
                        <img  src='https://www.apple.com/v/home/x/images/logos/arcade/logo__dcojfwkzna2q_medium_2x.png'></img>
                        <h4>NBA 2K21 Arcade Edition. Play now.</h4>
                        <div className='links'>
                        <a href='#' className="learn-more">Learn More <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                        <a href='#'>Try it free <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='product-small seccion6'>
                    <img className='img-fluid' src='https://www.apple.com/v/home/x/images/logos/apple-card/logo__dcojfwkzna2q_medium_2x.png'></img>
                        <h4>Powerful. Colorful. Wonderful.</h4>
                        <div className='links'>
                        <a href='#' className="learn-more">Learn more <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                        </div>
                
                    </div>
                </div>
            </div>
        );
    }
};

export default Promocion2;