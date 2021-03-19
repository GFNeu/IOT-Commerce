import React,{useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import {Link} from 'react-router-dom'

const OrderDetail = ({id}) => {
  const [order, setOrder] = useState([])
  const user = useSelector(state=> state.user)

  const history = useHistory()
  if(!user.id) history.push('/')

  useEffect(()=>{
        if(user.id){
            axios.get(`/api/users/orders/${user.id}/o/${id}`)
                 .then(res=> res.data)
                 .then(o => setOrder(o))
        }
        


  },[user])

 
return (
<>

{ order.length > 0 ?
    <div className="container container-fluid">
	{console.log(order)}
    <div className="row d-flex justify-content-between">
        <div className="col-12  mt-2 order-details">

            <h1 className="my-3">{`ID de la compra: #${order[0].id}`}</h1>

                <h4 className="mb-3"><b>Información del cliente:</b></h4>
                    <p><b>Nombre:</b> {user.name}</p>
                    <p><b>Apellido:</b> {user.lastName}</p>

                    <hr/>

                    <h4 className="my-4">Estado del pago:</h4>
                    <p style={{color:'green'}} ><b>{order[0].orderStatus.statusType}</b></p>

                    <h4 className="my-4">Estado de la compra:</h4>
                    {<p style={{color:'green'}}><b>{order[0].orderStatusId===2? 'ENTREGADO':'PENDIENTE'}</b></p>}

                   <h4 className="my-4">Productos:</h4>
                <hr />

            {
            order[0].products.map(product=>{
                
            return <div className="cart-item my-1">
                        <div className="row my-5">
                            <div className="col-3 ">
                                <img src={product.photo} alt="foto" height="45" width="65" />
                            </div>

                            <div className="col-3 mt-4 ">
                                <Link to={`/products/${product.id}`}><p> <b>Producto: </b>{product.name}</p></Link>
                            </div>

                            <div className="col-3 mt-4 ">
                                <p> <b>Cantidad: </b>{product.OrderProducts.cantidad}</p>
                            </div>

                            <div className="col-3 mt-4 ">
                                <p> <b>Subtotal: </b>${product.OrderProducts.cantidad * product.OrderProducts.precio}</p>
                            </div>
                        </div>
                    </div>

                    })
                    }
                                      
                <hr />
                <div style={{marginBottom: "100px"}}><h4 style={{textAlign: "right"}}><b>Precio total:</b> ${order.length > 0? order[0].products.reduce((acc, p)=>{return acc += p.OrderProducts.precio*p.OrderProducts.cantidad},0) : "-"}</h4></div>
        </div>
    </div>
    
</div>  



: <div className="centerInPage"><Spinner animation="border" /></div>} 

</>
)
}

export default OrderDetail;
