import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { oneCategory, allCategoriesAdmin, deleteCategory } from "../../state/categoriesAdmin";
import { getCategories } from "../../state/categories";

const CategoriasAdmin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categoriaBuscada, setCategoriaBuscada] = useState("");
  const user= useSelector(state => state.user)
  React.useEffect(()=>{
    axios.get("/api/categories").then(respuesta=> dispatch(allCategoriesAdmin(respuesta.data)))
    axios.get("/api/categories").then(respuesta=> dispatch(getCategories(respuesta.data)))
  }, [])
  const categorias = useSelector((state) => state.categoriesAdmin);
  const handleChange = (e) => {
    setCategoriaBuscada(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/categories/admin/${categoriaBuscada}`)
      .then(({ data }) => dispatch(oneCategory(data)))

      .catch((err) => console.log(err));
  };
  const selectCategory= (id)=>{
    axios
    .get(`/api/categories/admin/${id}`)
    .then(({ data }) => dispatch(oneCategory(data)))

    .catch((err) => console.log(err));
  }
  const eliminarCategoria= (userAdmin, id)=>{
    return axios
    .delete(`/api/categories/admin/${userAdmin}/${id}`)
    .then((respuesta) => respuesta.data)
    .then((data) => {
      
      dispatch(deleteCategory())
     
      
      return swal("Categoria eliminada") //Ver que quede el mensaje
      //history.push("/adminPanel")
    
      
      
    }).then(()=> history.go(0))
    .catch(e=> swal("No esta autorizado para realizar la accion") )
  }

  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href="/adminPanel/usuarios"
                className=" mx-5 text-light "
              >
                Usuarios
              </Nav.Link>
              <Nav.Link
                href="/adminPanel/productos"
                className="mx-5 text-light"
              >
                Productos
              </Nav.Link>

              <Nav.Link href="/adminPanel/categorias" className=" mx-5 text-dark btn btn-large bg-warning">
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
          <div className="h3 p-5">Administración de categorias:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4">
            <InputGroup className="mb-3 px-5 py-4" onChange={handleChange}>
              <InputGroup.Prepend>
                <Button variant="warning" onClick={handleClick}>
                  Buscar categoria
                </Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
            <Link to="/adminPanel/categorias/crear"><Button className="ml-5" variant="warning">
                  Crear categoria
                </Button></Link>
          </div>

          <div className="col-sm-12 col-md-8">
            {categorias.length && categorias.map((categoria) => (
              <div className="mb-5 p-4">
                <Card key={categoria.id}>
                  <Card.Header as="h5">
                    Categoria : {categoria.statusDescription}
                  </Card.Header>
                  <Card.Body>
                    <Link to={`/adminPanel/categorias/editar/${categoria.id}`}>
                      <Button onClick={()=>selectCategory(categoria.id)}variant="warning">Editar categoria</Button>
                    </Link>
                    <Button variant="warning" onClick={()=> eliminarCategoria(user.id, categoria.id)} className="ml-2">Eliminar categoria</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriasAdmin;
