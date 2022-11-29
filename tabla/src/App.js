import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const Tabla = (props) => {
 let array = [];
  for (let i = 0; i < props.filas; i++){

    array.push(<tr>)

    for (let j = 0; j < props.columnas; j++){

      
    }
    array.push(</tr>);
  }
  return(<>{array}</>);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filas: 5,
      columnas: 3
    }
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
