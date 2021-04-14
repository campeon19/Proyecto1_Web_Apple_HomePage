import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import NavBar from './componentes/navbar';
import Producto from './componentes/producto';




class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <NavBar></NavBar>
                <Producto></Producto>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));