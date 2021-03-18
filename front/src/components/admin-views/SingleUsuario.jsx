import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

const OrdenesUsuario = () => {
  const users = useSelector((state) => state.allUser);
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

              <Nav.Link href="/adminPanel/categorias" className=" mx-5 text-light">
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
          <div className="col-sm-12 col-md-12">
            {users.map((user) => (
              <div className="mb-5 p-4">
                <Link to={`/adminPanel/usuarios/SingleUsuario/edit/${user.id}`}>
                  {" "}
                  <button> boton</button>{" "}
                </Link>

                <Card key={user.id}>
                  <Card.Header as="h5">
                    Usuario : {user.name} {user.lastName}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title> Correo : {user.email}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-12 py-1 px-5">
            <Jumbotron fluid>
              <Container>
                <h1>Order Id</h1>

                <div className="row">
                  <div className="col-sm-12 col-md-4 ">
                    <p>
                      Client Info
                      <br />
                      Name: pepe
                      <br />
                      Lastname: pepe
                      <br />
                      Total Amount: $ 1000
                      <br />
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <p>
                      Payment Status
                      <br />
                      PAID
                      <br />
                      Order Status:
                      <br />
                      Delivered ()
                      <br />
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-4">
                    <p>
                      Foto y nombre producto
                      <br />
                      Cantidades
                    </p>
                  </div>
                </div>
              </Container>
            </Jumbotron>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdenesUsuario;
