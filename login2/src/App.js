import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Button, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function User(props) {
  return (
    <li>{props.id} - {props.name} - {props.email}</li>
  );
}

function UserList(props) {
  return (
    <ul>
      {
        props.users.map(e => <User id={e.id} name={e.name} email={e.email} />)
      }
    </ul>
  );
}


function UserForm(props) {
  return (

    <form onSubmit={props.onAddUser}>
      <input type="text" placeholder='Nombre' name='nombre' />
      <input type="email" placeholder='E-mail' name='email' />
      <input type="submit" value='Guardar' />
    </form>
  );
}

function useForceUpdate() {
  let [value, setValue] = useState(true);
  return () => setValue(!value);
}



function App(props) {

  const [users,setUsers] = useState([
    { id: 1, name: "perico", email: "perico@miau.es" },
    { id: 2, name: "juan", email: "juan@miau.es" },
    { id: 3, name: "pepe", email: "pepe@miau.es" }
  ]);

  let forceUpdate = useForceUpdate();

  const handleOnAddUser = (event) => {
    event.preventDefault(); //Evitar que se recarge la pagina
    
    let ultimo = users[users.length - 1].id; //Ultimo id


    let user = {
      id: ultimo + 1,
      name: event.target.nombre.value,
      email: event.target.email.value,
    }

    let u = users;
    u.push(user);
    setUsers(u);

    forceUpdate();
  }


  return (
    <div className="App">
      <p><strong>Añade usuarios</strong></p>
      <UserList users={users} />
      <UserForm onAddUser={handleOnAddUser} />
    </div>
  );


}

export default App;
