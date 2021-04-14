import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './producto.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
//import IPhone12 from '../img/iphone_12.jpg';




class Producto3 extends React.Component{

    render(){
        return(
            <section className='producto academy-award'>
                <img className='img-fluid' src='https://www.apple.com/v/home/x/images/logos/tv-plus-wolfwalkers/logo__dcojfwkzna2q_large.png'></img>
                <div className='links small-link-margin'>
                    <a href='#' className="learn-more">Watch now <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon></a>
                </div>
                <img className='img-fluid' src='https://www.apple.com/v/home/x/images/heroes/tv-plus-wolfwalkers/hero__dvsxv8smkkgi_large.jpg'/>
                
            </section>
        );
    }
};

export default Producto3;