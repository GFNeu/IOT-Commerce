import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { busquedaUsuario } from "../../state/allusers";

const UsuariosAdmin = () => {
  const users = useSelector((state) => state.allUser);
  const user= useSelector(state=> state.user)
  const dispatch = useDispatch();
  const [usuarioBuscado, setUsuarioBuscado] = useState("");

  const handleChange = (e) => {
    setUsuarioBuscado(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/users/${usuarioBuscado}`)
      .then(({ data }) => dispatch(busquedaUsuario(data)))

      .catch((err) => console.log(err));
  };

  return (
    <div>
      {user.isAdmin ? <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href="/adminPanel/usuarios"
                className=" mx-5 text-dark btn btn-large bg-warning"
              >
                Usuarios
              </Nav.Link>
              <Nav.Link
                href="/adminPanel/productos"
                className="mx-5 text-light"
              >
                Productos
              </Nav.Link>

              <Nav.Link
                href="/adminPanel/categorias"
                className=" mx-5 text-light"
              >
                Categorias
              </Nav.Link>

              <Nav.Link href="/adminPanel/ordenes" className="mx-5 text-light ">
                Órdenes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="/adminPanel" className="text-warning">
            Panel Administrador
          </Navbar.Brand>
        </Navbar>
      </div>
      <div>
        <div className="row no-gutters">
          <div className="h3 p-5">Administración de usuarios:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4">
            <InputGroup className="mb-3 px-5 py-4" onChange={handleChange}>
              <InputGroup.Prepend>
                <Button variant="warning" onClick={handleClick}>
                  Buscar usuario
                </Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>

          <div className="col-sm-12 col-md-8">
            {users.length && users.map((user) => (
              <div className="mb-5 p-4">
                <Card key={user.id}>
                  <Card.Header as="h5">
                    Usuario : {user.name} {user.lastName}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title> {user.email}</Card.Title>
                    <Card.Text>
                      Para visualizar todas las órdenes ingresa al usuario
                    </Card.Text>
                    <Link to={`/adminPanel/usuarios/SingleUsuario/${user.id}`}>
                      {/* onClick={()=>conseguirUsuario(user.id)}  */}
                      <Button variant="warning">Ver usuario</Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>: <h1>Debes ser administrador para ver esta pagina</h1>}
    </div>
  );
};

export default UsuariosAdmin;
