import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
import { Component } from 'react';
import Sino from './componentes/SinoComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagen:"/assets/images/yes.jpg",
      titulo:"¿Si o no?"
    }
  }
  render() {

    return (
      <div className="App">

        <Sino
          imagen = {this.state.imagen}
          titulo="¿Si o no?"
        />

      </div>
    );
  }
}

export default App;

