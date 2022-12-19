import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props) => {

  let lista = [];
  for (let i = 0; i < props.listaBotones.length; i++) {

    let lista2 = [];

    for (let j = 0; j < props.listaBotones.length; j++) {

      lista2.push(
        <Button
          key={i * 10 + j}
          color={props.listaBotones[i][j].color}
          onClick={() => props.clica(i, j)}
        />
      );
    }

    lista.push(<>{lista2}<br /></>);
  }
  return (<>{lista}</>)
}



class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "secondary", "succes", "warning", "danger"]
    }

    this.carga();
  }

  carga() {
    let l = this.state.listaBotones; //Copiamos la lista del state
    //La editamos
    for (let i = 0; i < l.length; i++) {
      let aux=[]; //Creamos fila
      for (let j = 0; j < l.length; j++) { //Rellena la fila
        aux.push({color:"info", pulsado:false});
      }
      l[i] = (aux); //La añadimos
    }

    this.setState({ listaBotones: l }) //La devolvemos
  }

  clica(i, j) {

    let l = this.state.listaBotones;

    l[i][j].pulsado = true;
    l[i][j].color = 'danger';

    this.setState({ listaBotones: l })
    console.log(l)

  }

  render() {

    return (
      <>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          clica={(i, j) => this.clica(i, j)} />
      </>
    );
  }

}

export default App;
