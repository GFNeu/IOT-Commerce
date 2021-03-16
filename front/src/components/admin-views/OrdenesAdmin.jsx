import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";


const OrdenesAdmin = () => {
  const users = useSelector((state) => state.allUser);
  /* console.log("usuarios todos ", users) */

  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }



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
       <div className="text-center p-2">
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
                  {user.id<10? <tr>
                    <Link to = "/"> <td style = {{backgroundColor:"red"}}>{user.id}</td> </Link>
                      
                      <td>{user.fullName}</td>
                      <Link > <td>{user.email}</td> </Link>

                   
                    </tr>: <tr>
                    <Link > <td style = {{backgroundColor:"green"}}>{user.id}</td> </Link>
                      
                      <td>{user.fullName}</td>
                      <Link > <td>{user.email}</td> </Link>

                   
                    </tr>}
                   
                    
                  </tbody>
                  
                ))}
              </Table>
            </Table>
          </div>
        </div>

        <div  >
          <Pagination>{items}</Pagination>
          <br />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrdenesAdmin;
