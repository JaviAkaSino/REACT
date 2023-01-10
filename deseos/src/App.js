import logo from './logo.svg';
import './App.css';
import { Button, Form, InputGroup, Input, Row, Col, List } from 'reactstrap';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Desirelist extends Component {
  render() {
    return (
      <List type="unstyled">{this.props.deseos.map(d => <>
        <PrintDeseo deseo={d} />
        <Borrar deseo={d} quitar={(elemento) => this.props.quitar(elemento)} />
      </>)}
      </List>
    );
  }
}

class Desire extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onAddDeseo}>
        <Row xs="3">
          <Col></Col>
          <Col>
            <InputGroup>
              <Input placeholder="Escribe tu deseo" name="deseo" />
              <Button color="secondary">Guardar</Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>

      </Form>
    );
  }
}

function PrintDeseo(props) {
  return (<li>{props.deseo}</li>)
}

function Borrar(props) {
  return (
    <Button size="sm" outline color="danger" onClick={() => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </Button>)
}

class App extends Component {
  //Centralizamos deseos en componente principal
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["GAMBAS", "JAMÓN"],
    }
  }

  //Función que añade los deseos a deseos
  handleAniadirDeseo(event) { //Es como un manejador de eventos
    event.preventDefault(); //Hace que no refresque la página
    //console.log(event.target.deseo.value);
    let d = this.state.deseos;
    d.push(event.target.deseo.value);
    this.setState({ deseos: d });
  }

  quitar(elemento) {
    let d = this.state.deseos.filter(d => d != elemento);
    this.setState({ deseos: d });
  }

  render() {
    return (
      <div className="App">
        <h1>AÑADE TU DESEO</h1>
        <Desirelist deseos={this.state.deseos} quitar={(elemento) => this.quitar(elemento)} />
        <Desire onAddDeseo={this.handleAniadirDeseo.bind(this)} />
      </div>
    );

  }

}

export default App;
