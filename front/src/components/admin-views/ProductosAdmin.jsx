import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const ProductosAdmin = () => {
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
                className="mx-5 text-dark btn btn-large bg-warning"
              >
                Productos
              </Nav.Link>
              <Nav.Link href="/adminPanel/ordenes" className="mx-5 text-light">
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
          <div className="h3 p-5">Administración de productos:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4">
            <InputGroup className="mb-3 px-5">
              <InputGroup.Prepend>
                <Button variant="warning">Buscar producto</Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>

          <div className="col-sm-12 col-md-8">
            <div className=" mx-4">
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-4">
                  <Card className="px-4 mx-5">
                    <Card.Body>Imagen Producto</Card.Body>
                  </Card>
                </div>

                <div className="col-sm-12 col-md-8">Titulo producto</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4 py-5">
            <InputGroup className="mb-3 px-5">
              <InputGroup.Prepend>
                <Button variant="warning">Buscar producto</Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>

          <div className="col-sm-12 col-md-8 py-5">
            <div className=" mx-4">
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-4">
                  <Card className="px-4 mx-5">
                    <Card.Body>Imagen Producto</Card.Body>
                  </Card>
                </div>

                <div className="col-sm-12 col-md-8  ">
                  <div className="col-sm-12 col-md-8 h4">Título producto</div>

                  <div className="col-sm-12 col-md-8 h4">Precio producto</div>
                  <div className="col-sm-12 col-md-8 h4">Descripción</div>
                  <div className="col-sm-12 col-md-8 h4">ssfgsf</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosAdmin;
