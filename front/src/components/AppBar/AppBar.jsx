import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import s from './AppBar.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../../state/user"
import logo from '../../assets/logo2.png'

const AppBar = () => {
  const user = useSelector(state=> state.user)
  const dispatch= useDispatch()
  const logOut = (e) => {
      e.preventDefault();
      localStorage.clear();
      dispatch(logout())
    };
  
    return (
      <Navbar expand="lg" bg="primary">
        <Container fluid style={{maxWidth: 1500}}>
        <Link to="/">
          <Navbar.Brand id={s.iot}><img src={logo} alt="IOT COMERCE"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className={s.center}>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown
              variant="light"
              title={"Categorías"}
              id="basic-nav-dropdown"
              id={s.cats}
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
            <InputGroup id={s.max_width} className={s.form}>
              <FormControl
                type="text"
                placeholder="NO DISPONIBLE. Estamos trabajando en ello!"
              />
              <InputGroup.Append>
                <Button variant="light" style={{maxHeight: 38}}>
                  <AiOutlineSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Nav>
          <Link to="/cart" >
            <FiShoppingCart className="text-white" id={s.carrito_icon}/>
          </Link>
          {user.id ? (
            <div className={s.flex}>
              <div className="text-white">{`¡Hola, ${user.name}!`}</div>
              <NavDropdown
              variant="light"
              title={<RiAccountCircleFill/>}
              id="basic-nav-dropdown"
              id={s.cats}
              alignRight
              className={s.dropdownPerfil}
              >
                <NavDropdown.Item href="#action/3.1">Mis compras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>
                  Cerrar sesión
                </NavDropdown.Item>
            </NavDropdown>
            </div>
          
          ) : (
            <div>
              <Link to="/login">
                <Button className="mr-1">Ingresar</Button>
              </Link>
              <Link to="/register">
              <Button variant="warning">Registrarse</Button>
              </Link>
            </div>
          )}
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default AppBar


//color #2e2e2