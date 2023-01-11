import logo from './logo.svg';
import './App.css';
import { Button, Form, InputGroup, Input, Row, Col, List } from 'reactstrap';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desirelist() {
  return (
    <List type="unstyled">{this.deseos.map(d => <>
      <PrintDeseo deseo={d} />
      <Borrar deseo={d} quitar={(elemento) => this.props.quitar(elemento)} />
    </>)}
    </List>
  );

}

function Desire() {

  return (
    <Form onSubmit={this.onAddDeseo}>
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

function PrintDeseo(props) {
  return (<li>{props.deseo}</li>)
}

function Borrar(props) {
  return (
    <Button size="sm" outline color="danger" onClick={() => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </Button>)
}

function App() {
  //Centralizamos deseos en componente principal
  
      const deseos= ["GAMBAS", "JAMÓN"];
    
  

  //Función que añade los deseos a deseos
  function handleAniadirDeseo(event) { //Es como un manejador de eventos
    event.preventDefault(); //Hace que no refresque la página
    //console.log(event.target.deseo.value);
    let d = deseos;
    d.push(event.target.deseo.value);
    deseos = d;
  }

  function quitar(elemento) {
    let d = deseos.filter(d => d != elemento);
    deseos = d;
  }

  return (
    <div className="App">
      <h1>AÑADE TU DESEO</h1>
      <Desirelist deseos={deseos} quitar={(elemento) => quitar(elemento)} />
      <Desire onAddDeseo={handleAniadirDeseo.bind(this)} />
    </div>
  );

}



export default App;
