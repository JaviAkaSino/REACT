import logo from './logo.svg';
//import './App.css';
import { Button } from 'reactstrap';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 20,
      listabotones: Array(this.contador).fill("secondary"),
      pulsado1: -1,
      pulsado2: -1,
    }
  }

  setSeleccionado(pos) {
    let l = this.state.listabotones.fill("secondary"); //.map(e=>"secondary")
    let p1 = this.state.pulsado1;
    let p2 = this.state.pulsado2;

    if (pos != p1) {
      p2 = p1;
      p1 = pos;
    }

    l[p1] = l[p2] = "danger";

    this.setState({ listabotones: l, pulsado1: p1, pulsado2: p2 })
  }

  render() {

    let obj = [];
    for (let i = 0; i < this.state.contador; i++) {
      obj.push(<Botoncillo
        setSeleccionado={(pos) => this.setSeleccionado(pos)}
        pos={i}
        col={this.state.listabotones[i]} />)
    }

    return (
      <>
        {obj}
        <Button color="primary" onClick={() => this.setState({ contador: 200 })} />
      </>
    );
  }
}

function Botoncillo(props) { 
  return (
    <Button
      color={props.col}
      onClick={() => props.setSeleccionado(props.pos)}
    >
      &nbsp;
    </Button>
  );
}

export default App;
