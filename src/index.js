import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import NavBar from './componentes/navbar';
import Producto from './componentes/producto';
import Producto2 from './componentes/producto2';
import Producto3 from './componentes/producto3';
import Promocion1 from './componentes/promocion1';
import Promocion2 from './componentes/promocion2';
import Promocion3 from './componentes/promocion3';
import Footer from './componentes/footer';



class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <NavBar></NavBar>
                <Producto></Producto>
                <Producto2></Producto2>
                <Producto3></Producto3>
                <Promocion1></Promocion1>
                <Promocion2></Promocion2>
                <Promocion3></Promocion3>
                <Footer></Footer>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));