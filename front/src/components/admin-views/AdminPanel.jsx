import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
 
const AdminPanel = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/adminPanel/usuarios" className=" mx-5 text-light">
              Usuarios
            </Nav.Link>
            <Nav.Link href="/adminPanel/productos" className="mx-5 text-light">
              Productos
            </Nav.Link>
            <Nav.Link href="/adminPanel/ordenes" className=" mx-5 text-light">
              Órdenes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="/adminPanel" className="text-warning">
          Panel Administrador
        </Navbar.Brand>
      </Navbar>

      <div>
         <div className=" py-5 display-4 text-center">
           Hola usuario ADMIN : <br /> NOMBRE APELLIDO
        </div>
       </div>
    </div>
  );
};

export default AdminPanel;
