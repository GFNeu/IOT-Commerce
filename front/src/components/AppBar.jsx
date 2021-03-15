import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import './AppBar.css'
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi";
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../state/user"
import logo from '../assets/logo2.png'
import axios from 'axios'
import {getCategories} from "../state/categories"



const AppBar = () => {
  React.useEffect(()=>{
    axios.get("/api/categories").then(respuesta=> dispatch(getCategories(respuesta.data)))
  }, [])
  const user = useSelector(state=> state.user)
  const categories = useSelector(state => state.categories)
  const dispatch= useDispatch()
  const logOut = (e) => {
      e.preventDefault();
      localStorage.clear();
      dispatch(logout())
    };


  
  
    return (
      <Navbar className="navbar" expand="lg">
        <Link to="/">
          <Navbar.Brand id="iot"><img src={logo} alt="IOT COMERCE"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className="center">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown
              variant="light"
              title="Categorías"
              id="basic-nav-dropdown"
              id="cats"
            >
              {categories.length ? categories.map(category =>{
                return <NavDropdown.Item><Link to={`/categories/${category.id}`}>
                {category.statusDescription}</Link>
              </NavDropdown.Item>
              }): "Cargando categorias"}
              
            </NavDropdown>
            <InputGroup id="max_width" className="form">
              <FormControl
                type="text"
                placeholder="NO DISPONIBLE. Estamos trabajando en ello!"
              />
              <InputGroup.Append>
                <Button id="search_btn">
                  <AiOutlineSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Nav>
          <Link to="/cart" id="carrito_btn">
            <FiShoppingCart id="carrito_icon" />
          </Link>
          {user.id ? (
            <Button id="ingresar" onClick={logOut}>
              Cerrar sesion
            </Button>
          ) : (
            <Link to="/login">
              <Button id="ingresar">Ingresar</Button>
            </Link>
          )}
          {user.id ? (
            <span style={{ color: "white" }}>{`Hola ${user.name}!`}</span>
          ) : (
            <Link to="/register">
              {" "}
              <Button variant="warning">Registrarse</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
}

export default AppBar


//color #2e2e2