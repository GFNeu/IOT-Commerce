import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
 
const AdminPanel = () => {
  const user= useSelector(state=> state.user)
  return (
    
    <div>
      {user.isAdmin ?  
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
            <Nav.Link href="/adminPanel/categorias" className=" mx-5 text-light">
              Categorias
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
           Bienvenido {user.name} {user.lastName}
        </div>
       </div> 
       </div>: <h1>Debes ser administrador para ver esta pagina</h1>}
     
    </div>
  );
};

export default AdminPanel;
