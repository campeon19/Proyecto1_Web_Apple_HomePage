import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './anuncio.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';




class Anuncio1 extends React.Component{

    render(){
        return(
            <div className='anuncio'>
                <p><a href='#'>Shop online</a> and get Specialist help, free no-contact delivery, and more.</p>
            </div>
        );
    }
};

export default Anuncio1;