import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
 import Button from "react-bootstrap/Button";
 import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const OrdenesUsuario = () => {
  return (
    <div>
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
            <div className=" mx-4">
              <Card>
                <Card.Header as="h5">Usuario : NOMBRE APELLIDO</Card.Header>
                <Card.Body>
                  <Card.Title>Correo : email@email.com</Card.Title>
                  <Card.Text>
                    Para visualizar todas las órdenes ingresa al usuario
                  </Card.Text>
                  <Link to="/adminPanel/usuarios/ordenesusuario">
                    <Button variant="warning">Ver usuario</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 py-4">
            <Jumbotron fluid >
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>

            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdenesUsuario;
