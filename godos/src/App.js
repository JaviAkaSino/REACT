import './App.css';
import React, { Component } from 'react';
import GODOS from './componentes/Godos';

const DisplayGodos = (props) => {
  let lista = props.godos.map(g => {
    return <li key = {g.id}><h2>{g.nombre} </h2><p> {g.texto} </p></li>;
  })

  return (<>{lista}</>);
  //return(<>{JSON.stringify(props.godos)}</>);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      godos: GODOS,
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          <DisplayGodos godos={this.state.godos} />
        </ul>
      </div>
    );
  }
}

export default App;
