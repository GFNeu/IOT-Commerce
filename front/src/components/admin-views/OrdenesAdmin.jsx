import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const OrdenesAdmin = () => {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href="/adminPanel/usuarios"
                className=" mx-5 text-light"
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
                href="/adminPanel/ordenes"
                className="mx-5 text-dark btn btn-large bg-warning "
              >
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
          <div className="h3 p-5"> Administracion de Órdenes:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6">
            <div className="p-5"> Buscar órden </div>
          </div>
          <div className="col-sm-12 col-md-6">
          <div className="p-5"> ver orden </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default OrdenesAdmin;
