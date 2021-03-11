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

const AppBar = () => {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home" id="iot">IOT COMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className="center">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown variant="light" title="Cateogrías" id="basic-nav-dropdown" id="cats">
              <NavDropdown.Item href="#action/3.1">Categorías</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <InputGroup id="max_width" className="form">
              <FormControl type="text" placeholder="Search"  />
                <InputGroup.Append>
              <Button id="search_btn"><AiOutlineSearch /></Button>
              </InputGroup.Append>
          </InputGroup>
          </Nav>
          <Button id="carrito_btn"><FiShoppingCart id="carrito_icon"/></Button>
          <Link to="/login"><Button id="ingresar">Ingresar</Button></Link>
          <Link to="/register"> <Button variant="warning">Registrarse</Button></Link>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default AppBar


//color #2e2e2