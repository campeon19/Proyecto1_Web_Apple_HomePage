import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <h1>Hello World</h1>
            </div>
        );
    }
}

ReactDom.render(<App></App>, document.getElementById('root'));