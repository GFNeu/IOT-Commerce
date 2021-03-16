import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrdenesAdmin = () => {
  const users = useSelector((state) => state.allUser);
  /* console.log("usuarios todos ", users) */

  return (
    <div>
      {users.length && <h1>{users[3].email}</h1>}
      {/*  el arreglo.length nos da tiempo para hacer el map */}
      <div>
        {" "}
        {/* COMIENZO  NAV BAR */}
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
      </div>{" "}
      {/* FIN  NAV BAR */}
      <div>
        {" "}
        {/*  MUESTRO TITULO Y BUSQUEDA SECTOR DATOS*/}
        <div className="row no-gutters">
          <div className="h3 p-5">Administración de ordenes:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4">
            <InputGroup className="mb-3 px-5">
              <InputGroup.Prepend>
                <Button variant="warning">Buscar ordenes</Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>{" "}
        </div>
        {/*  MUESTRO TITULO Y BUSQUEDA SECTOR DATOS*/}
        {/* COMIENZO MOSTRAR DATOS  className="col-sm-12 col-md-8"*/}
        <div>
          <div>
            <Table responsive>
              <Table striped bordered hover size="sm">
                <thead>
                  {/* TITULOS DE COLUMNAS */}
                  <tr>
                    <th>#Orden</th>
                    <th>First, Lastname</th>
                    <th>Username</th>
                    <th>Order Status</th>
                    <th>Paid status</th>
                    <th>Paid date</th>
                    <th>Delivered date</th>
                  </tr>
                </thead>

                {users.map((user) => (
                  <tbody>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td >@mdo</td>  {/* style= "color: green;" */}
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdenesAdmin;
