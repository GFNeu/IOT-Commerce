import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import {getOrders} from "../../state/allorders"
import { useDispatch } from "react-redux";


const OrdenesAdmin = () => {
  const dispatch = useDispatch();
  React.useEffect(()=>{
dispatch(getOrders())
  },[])
  const orders = useSelector((state) => state.allOrders);
  /* console.log("usuarios todos ", users) */

  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  console.log("Orders ",orders)

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
                className="mx-5 text-light"
              >
                Productos
              </Nav.Link>

              <Nav.Link href="/adminPanel/categorias" className=" mx-5 text-light">
              Categorias
            </Nav.Link>

              <Nav.Link href="/adminPanel/ordenes" className="mx-5  text-dark btn btn-large bg-warning ">
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
          <div className="h3 p-5">Administración de ordenes:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-4">
            <InputGroup className="mb-3 px-5">
              <InputGroup.Prepend>
                <Button variant="warning">Buscar ordenes</Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </div>
        </div>
       

       <div className="text-center p-2">
        <div>
          <div>
            <Table responsive>
              <Table striped bordered hover size="sm">
                <thead>                  
                  <tr>
                    <th>#Orden</th>
                    <th>First, Lastname</th>
                    <th>Username</th>
                    <th>Order Status</th>                   
                  </tr>
                </thead>
      
                {orders.length>0 &&  orders.map((order) => (
                  
                  <tbody>
                  {order.orderStatus.statusType =="Pago confirmado"? // comienza ternario                  
                   <tr>
                   <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>                      
                      <td>{order.user.fullName}</td>
                      <Link > <td>{order.user.email}</td> </Link>
                      <td style = {{backgroundColor:"rgb(3, 252, 53)"}}>{order.orderStatus.statusType}</td>                   
                    </tr>: 

                    order.orderStatus.statusType =="Cancelado"? // comienza segundo ternario
                  
                   <tr>
                   <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>
                      
                      <td>{order.user.fullName}</td>
                      <Link > <td>{order.user.email}</td> </Link>
                      <td style = {{backgroundColor:"orange"}}>{order.orderStatus.statusType}</td>                   
                    </tr>
                    :
                    order.orderStatus.statusType =="Iniciado"? // comienza tercer ternario
                  
                  <tr>
                  <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>
                     
                     <td>{order.user.fullName}</td>
                     <Link > <td>{order.user.email}</td> </Link>
                     <td style = {{backgroundColor:"rgb(185, 222, 2)"}}>{order.orderStatus.statusType}</td>                   
                   </tr>
                   :

                   order.orderStatus.statusType =="Pendiente"? // comienza cuarto ternario
                   <tr>
                    <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>
                     
                     <td>{order.user.fullName}</td>
                     <Link to={`/adminPanel/usuarios/SingleUsuario/${order.user.id}`}> <td>{order.user.email}</td> </Link>
                     <td style = {{backgroundColor:"rgb(201, 76, 76)"}}>{order.orderStatus.statusType}</td>                   
                   </tr>
                   :
                   order.orderStatus.statusType =="Confirmado"? // comienza cuarto ternario
                   <tr>
                    <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>
                     
                     <td>{order.user.fullName}</td>
                     <Link to={`/adminPanel/usuarios/SingleUsuario/${order.user.id}`}> <td>{order.user.email}</td> </Link>
                     <td style = {{backgroundColor:"rgb(2, 149, 222)"}}>{order.orderStatus.statusType}</td>                   
                   </tr>
                   :
                    <tr>                    
                    <Link to={`/adminPanel/ordenes/singleOrdenes/${order.id}`}><td >{order.id}</td></Link>                    
                      <td>{order.user.fullName}</td>
                      <Link to={`/adminPanel/usuarios/SingleUsuario/${order.user.id}`}> <td>{order.user.email}</td> </Link>
                      <td style = {{backgroundColor:"red"}}>{order.orderStatus.statusType}</td>
                      
                    </tr>}                    
                  </tbody>                  
                ))}
              </Table>
            </Table>
          </div>
        </div>

        <div  >
          <Pagination>{items}</Pagination>
          <br />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrdenesAdmin;
