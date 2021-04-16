import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './anuncio.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';




class Anuncio1 extends React.Component{

    render(){
        return(
            <div className='anuncio azul'>
                <a href='#'>Evaluate COVID-19 symptons and understand next steps <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
            </div>
        );
    }
};

export default Anuncio1;