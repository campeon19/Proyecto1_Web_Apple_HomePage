/*
* Autor: Christian Perez
* Fecha de inicio: Martes 13 de abril del 2021
* Fecha de entrega: Viernes 16 de abril del 2021
* Ultimas modificaciones realizadas: 18 de abril del 2021
*/




/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import NavBar from './componentes/navbar';
import Anuncio1 from './componentes/anuncio1';
import Anuncio2 from './componentes/anuncio2';
import Producto from './componentes/producto';
import Producto2 from './componentes/producto2';
import Producto3 from './componentes/producto3';
import Promocion1 from './componentes/promocion1';
import Promocion2 from './componentes/promocion2';
import Promocion3 from './componentes/promocion3';
import Footer from './componentes/footer';



class App extends React.Component{
    render(){
        return (
          <div className="app">
            <NavBar />
            <Anuncio1 />
            <Anuncio2 />
            <Producto />
            <Producto2 />
            <Producto3 />
            <Promocion1 />
            <Promocion2 />
            <Promocion3 />
            <Footer />
          </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));