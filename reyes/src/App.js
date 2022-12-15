import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flashcard from './componentes/FlashcardComponent';
import { GODOS } from './shared/datos';

class App extends Component {
  render() {

    const Reyes = GODOS.map(
      (rey) =>
        <Flashcard
          imagen={rey.imagen}
          titulo={rey.nombre}
          texto={rey.texto} />
    );


    return (
      <div className="App">
        {Reyes}
      </div>
    );
  }
}

export default App;
