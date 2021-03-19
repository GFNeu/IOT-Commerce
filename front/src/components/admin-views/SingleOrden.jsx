import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { onlyOne } from "../../state/allorders";
import swal from "sweetalert";


const SingleOrden = () => {
  const history= useHistory()
  const dispatch=useDispatch()
  const orderId=history.location.pathname.split("/")[4]
  React.useEffect(()=>{
    return axios.get(`/api/orders/admin/${orderId}`)
    .then(({data})=> dispatch(onlyOne(data)))
  }, [dispatch])
  const users = useSelector((state) => state.allUser);
  const user= useSelector(state=> state.user)

  const [estado, setEstado]= React.useState("")
  const order= useSelector(state=> state.allOrders)
  const handleSelect = (e, orderId) =>{
    console.log("entreeee", Number(estado))
    if(estado === "654" || Number(estado)===0){
      return swal("Elija una opcion")
    }
    const body= {estado}
    return axios
          .put(`/api/orders/admin/edit/${orderId}`, body)
          .then(({data})=> dispatch(onlyOne(data))).then(()=> {
            
            history.go(0)
            
            
          })
  }
  const handleChange= (e)=>{
    setEstado(e.target.value)
  }
  return (
    <div>
      {user.isAdmin ? <div>
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

              <Nav.Link href="/adminPanel/categorias" className=" mx-5 text-light">
              Categorias
            </Nav.Link>
            
              <Nav.Link href="/adminPanel/ordenes" className="mx-5 text-dark btn btn-large bg-warning ">
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
          <div className="h3 p-5">Administrador de orden:</div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-12">
             
            
          </div>
          <div className="col-sm-12 col-md-12 py-1 px-5">
            <Jumbotron fluid>
              <Container>
                <h2>Order Id #{order.id}</h2>
            
                <div className="row">
                {order.user ? <div className="col-sm-12 col-md-4 ">
                    <p>
                      <strong className="py-4">Client Info:</strong>
                      <p>Name: {order.user.name}</p>
                      <p>Lastname: {order.user.lastName}</p>
                      
                      <p>Total Amount: Donde se guarde el amount</p>
                      
                      
                      
                    </p>
                  </div>: null}
                  
                  <div className="col-sm-12 col-md-4">
                  <strong className="py-4">Productos:</strong>
                  {order.products ? order.products.map(product=>{
                return <div className="col-sm-12 col-md-12">
           
                <p>
                  <p>{product.name}</p>
                 
                  <p> - Cantidad: {product.OrderProducts.cantidad}</p>
                </p>
              </div>
              }): null}
                  </div>
                  {order.orderStatus ? <div className="col-sm-12 col-md-4">
                    <p>
                      <strong>Order Status:</strong> {order.orderStatus.statusType}
                      
                    </p> 
                    <select onChange={(e)=>handleChange(e)} class="custom-select">
                <option selected value="654">Cambiar estado</option>
                        <option value="1">Iniciado</option>
                         <option value="2">Confirmado</option>
                  <option value="3">Cancelado</option>
                  <option value="4">Pendiente</option>
                  <option value="5">Pago pendiente</option>
                  <option value="6">Pago confirmado</option>
                  <option value="7">Pago rechazado</option>
                  
</select>
<button onClick={(e)=>handleSelect(e, order.id)} className="my-4 btn btn-large btn-warning">Cambiar estado</button>
                    </div> :null}
                  
                    
                    
              
              
                  
                </div>
              </Container>
            </Jumbotron>
          </div>
        </div>
      </div>
      </div>: <h1 style={{textAlign:'center', marginTop:'15px'}}>Debes ser administrador para ver esta pagina</h1>}
    </div>
  );
};

export default SingleOrden;
