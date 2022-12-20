import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.
  let mapa = [];

  for (let i = 0; i < props.listaBotones.length; i++) {
    let aux = []

    for (let j = 0; j < props.listaBotones[0].length; j++) {

      aux.push(<Button outline = {props.listaBotones[i][j].outline} color={props.listaBotones[i][j].col} onClick={() => props.clica(i, j)} />);

    }
    mapa.push(aux);
    mapa.push(<br />);
  }

  return mapa;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    }
  }


  clica(x, y) {
    // x se supone que la columna, y la fila

    let l = this.state.listaBotones

      let cumplido = false; //variable para cortar bucle
      let abajo = 8; //posicion mas baja
      
      while (cumplido == false && abajo >= 0){//mientras no llegue a 0 y no se haya cumplido
        
        if (l[abajo][y].outline == true){ //mira si aun es outline

          l[abajo][y]= {col:"primary", outline:false}; //quita outline y pone color primary

          cumplido = true; //corta el bucle
        }

        abajo--; // sube un nivel

  }

    this.setState(this.state.listaBotones = l); //actualiza estado
  }


  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    let matriz = this.state.listaBotones;

    for (let i = 0; i < 9; i++) {

      matriz[i] = Array(9).fill({ outline: true }); //Lleno con outline
    }

    this.setState(this.listabotones = matriz);

  }


  render() {

    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          clica={(x, y) => this.clica(x, y)}
        />

      </div>
    );
  }
}

export default App;