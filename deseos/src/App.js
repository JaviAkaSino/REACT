import logo from './logo.svg';
import './App.css';
import { Button, Form, InputGroup, Input, Row, Col, List } from 'reactstrap';
import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";

function Desirelist(props) {
  return (
    <List type="unstyled">{props.deseos.map(d => <>
      <PrintDeseo deseo={d} />
      <Borrar deseo={d} quitar={(elemento) => props.quitar(elemento)} />
    </>)}
    </List>
  );

}

function Desire(props) {

  return (
    <Form onSubmit={props.onAddDeseo}>
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


function useForceUpdate() {
  let [value, setValue] = useState(true);
  return (() => setValue(!value));
}


function App(props) {
  //Centralizamos deseos en componente principal
  const [deseos, setDeseos] = useState(["GAMBAS", "JAMÓN"]);

  const quitar = (elemento) => {
    setDeseos(deseos.filter(d => d != elemento));
  }

  //Esto hay que ponerlo así
  let forceUpdate = useForceUpdate();

  //Función que añade los deseos a deseos
  const handleAniadirDeseo = (event) => { //Es como un manejador de eventos
    event.preventDefault(); //Hace que no refresque la página
    let d = deseos;
    d.push(event.target.deseo.value);
    setDeseos(d);

    forceUpdate()
  }

  return (
    <div className="App">
      <h1>AÑADE TU DESEO</h1>
      <Desirelist deseos={deseos} quitar={(elemento) => quitar(elemento)} />
      <Desire onAddDeseo={handleAniadirDeseo} />
    </div>
  );

}



export default App;
