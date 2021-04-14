import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component{

    state = {
        searchBarVisible:false,
    };

    searchBarTrue = () =>{
        this.setState({
            searchBarVisible:true,
        })
    }

    searchBarFalse = () =>{
        this.setState({
            searchBarVisible:false,
        })
    }

    render(){
        return(
            <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
                <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#"><FontAwesomeIcon className='apple-logo' icon={faApple}></FontAwesomeIcon></a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Mac</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">IPad</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">IPhone</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Watch</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">TV</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Music</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Support</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default NavBar;

/*
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top space-between">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Logo</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </nav>
*/


/*
<header>
                <nav class="navbar navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='menu'>
                        <ul>
                            <li><a href='#' className= 'big'><FontAwesomeIcon icon={faApple}></FontAwesomeIcon></a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>Mac</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>IPad</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>IPhone</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>Watch</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>TV</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>Music</a></li>
                            <li><a href='#' className={`menu-item ${searchBarVisible ? 'menu-item': 'menu-item.hide-item'}`}>Support</a></li>
                            <li><a href='#' onClick={this.searchBarTrue}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></a></li>
                        </ul>
                        <div className={`${searchBarVisible ? 'search-form': 'search-form.active'}`}>
                            <form>
                                <input type='text' placeholder='Search apple.com'></input>
                            </form>
                        </div>
                        <a className={`${searchBarVisible ? 'close': 'close.active'}`} onClick={this.searchBarFalse}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></a>
                    </div>
                </nav>
            </header>
*/