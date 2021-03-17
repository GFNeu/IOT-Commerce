import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
 import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { busquedaProducto } from "../../state/product";
 

 


const ProductosAdmin = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [productoBuscado, setProductoBuscado] = useState("");

  const handleChange = (e) => {
    setProductoBuscado(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/products/${productoBuscado}`)
      .then(({ data }) => dispatch(busquedaProducto(data)))

      .catch((err) => console.log(err));
  };

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
            <InputGroup className="mb-3 px-5 py-4" onChange={handleChange}>
              <InputGroup.Prepend>
                <Button variant="warning" onClick={handleClick}>
                  Buscar producto
                </Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className=" mx-4">
              {product.map((prod) => (
                <div className="mb-5 p-4">
                  <Card key={prod.id}>
                    <Card.Header as="h5">
                      {" "}
                      Nombre producto: {prod.name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                       Precio $ {prod.price} 
                      </Card.Title>
                      <Card.Text>Marca : {prod.mark} </Card.Text>

                      <Card.Text>Imagen path : {prod.photo} </Card.Text>
                      <Card.Text>Imagen vista :  <img className="mx-5" src={prod.photo} width="150px"></img> </Card.Text>

                      <Card.Text>{prod.description} </Card.Text>
                      
                       
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosAdmin;
