import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './promocion1.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';


class Promocion2 extends React.Component{
    render(){
        return(
            <div className="row no-gutters product-grid">
                <div className='col-md-6'>
                    <div className='product-small seccion3'>
                        <h3>New beginnings</h3>
                        <h4>Head to college. Behind the Mac</h4>
                        <div className='links'>
                        <a href='#' className="learn-more">Watch now <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon></a>
                        <a href='#'>Learn more <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='product-small seccion4'>
                        <h3>IPad Air</h3>
                        <h4>Powerful. Colorful. Wonderful.</h4>
                        <div className='links'>
                        <a href='#' className="learn-more">Learn more <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                        <a href='#'>Buy <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                        </div>
                
                    </div>
                </div>
            </div>
        );
    }
};

export default Promocion2;