import React, { Component } from 'react';
import Divisa from './componentes/Divisa';
//CREAR EL COMPONENTE DOLARES
const Dolares = (props) => {
  return <>{props.dolares}</>;
}
//Es lo mismo
function Dolares2(props) {
  return <>{props.dolares}</>;
}

//CREA EL COMPONENTE EUROS
const Euros = (props) => {
  return <>{props.euros}</>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      euros: 5,
      factor: 1.05,
    };
  }
  aumentar() {
    let e = this.state.euros;
    e++
    this.setState({ euros: e })
  }
  disminuir() {
    let e = this.state.euros;
    e--;
    if (e >= 0) this.setState({ euros: e })
  }
  render() {
    return (
      <>
        <Divisa divisa={this.state.euros} /> Euros equivalen a <Divisa divisa={this.state.euros * this.state.factor} /> dólares<br />
        <button onClick={() => this.disminuir()}>-</button>
        <button onClick={() => this.aumentar()}>+</button>
        

      </>
    );

  }
}

export default App;