import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { exactUser } from "../../state/allusers";


const OrdenesUsuario = ({ id }) => {
  const users = useSelector((state) => state.allUser);
  const dispatch= useDispatch()
  const history= useHistory()
  const idUser= (history.location.pathname.split("/")[4])
  React.useEffect(()=>{
    axios.
        get(`/api/users/admin/${idUser}`)
        .then(({data})=> dispatch(exactUser(data)))
        .catch(e=> console.log(e))
  }, [])
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
          <div className="col-sm-12 col-md-12">
            {users && users.map((user) => (
              <div className="mb-5 p-4">
                <Card key={user.id}>
                  <Card.Header as="h5">
                    <div className="d-flex  justify-content-between ">
                      <div>
                        Usuario : {user.name} {user.lastName}
                      </div>
                      <div className="px-2">
                        {" "}
                        <Link
                          to={`/adminPanel/usuarios/SingleUsuario/edit/${user.id}`}
                        >
                          <button className="btn btn-large bg-warning">
                            {" "}
                            Editar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title> Correo : {user.email}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-12 py-1 px-5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdenesUsuario;
