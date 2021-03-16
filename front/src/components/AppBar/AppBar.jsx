import React ,{ useState, useEffect }from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import s from './AppBar.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import {Link ,useHistory } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../../state/user"
import logo from '../../assets/logo2.png'
import axios from 'axios'
import {getCategories} from "../../state/categories"
import { getProductsByKeyword } from '../../state/product';
import Badge from 'react-bootstrap/Badge'



const AppBar = ( ) => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  React.useEffect(()=>{
    axios.get("/api/categories").then(respuesta=> dispatch(getCategories(respuesta.data)))
  }, [])

  const user = useSelector(state=> state.user)
  const carrito = useSelector(state=> state.carrito)
  const categories = useSelector(state => state.categories)
  const dispatch= useDispatch()
  const logOut = (e) => {
      e.preventDefault();
      localStorage.clear();
      dispatch(logout())
  };
  const searchHandler = (e)=>{
   
    e.preventDefault();
    if(keyword.trim()) {
     
      dispatch(getProductsByKeyword(keyword))
      //.then(()=>window.location = `/products/search?name=${keyword}`)      
       .then(()=>history.push ( `/products/search?name=${keyword}`))      
     
    }
    else history.push('/')
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
              {categories.length ? categories.map(category =>{
                return <NavDropdown.Item><Link to={`/categories/${category.id}`}>
                {category.statusDescription}</Link>
              </NavDropdown.Item>
              }): "Cargando categorias"}
              <NavDropdown.Item><Link to="/categories/6"> Todos los productos</Link> </NavDropdown.Item>
              
            </NavDropdown>
            <Form onSubmit={searchHandler} className='w-100'>
            <InputGroup id={s.max_width} className={s.form} onChange={(e)=> setKeyword(e.target.value) }>
                <FormControl type="text" placeholder="NO DISPONIBLE. Estamos trabajando en ello!" />
                
                <InputGroup.Append >
                  <Button variant="light" style={{maxHeight: 38}}> <AiOutlineSearch /> </Button>
                </InputGroup.Append>
            </InputGroup>
            </Form>
          
          </Nav>
          <Link to="/cart" >
            {carrito.length > 0 && <Badge pill variant="warning">{carrito.length}</Badge>}
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