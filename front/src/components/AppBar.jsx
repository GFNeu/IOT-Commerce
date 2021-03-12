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

const AppBar = () => {
  const user = useSelector(state=> state.user)
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
              <NavDropdown.Item href="#action/3.1">Cursos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Conectividad
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Motores y accesorios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Pantallas y displays
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Sensores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
                Todos los productos
              </NavDropdown.Item>
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