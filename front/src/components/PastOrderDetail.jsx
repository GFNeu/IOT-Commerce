import React,{useEffect, useState } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getPastOrders } from '../state/order'
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios'
import swal from "sweetalert";
import Rating from 'react-rating'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom'

const OrderDetail = ({id}) => {
  const [order, setOrder] = useState([])
  const user = useSelector(state=> state.user)

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

            <h1 className="my-3">{`Order Id: #${order[0].id}`}</h1>

                <h4 className="mb-3"><b>Client Info</b></h4>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Lastname:</b>{user.lastName}</p>

                    <hr/>

                    <h4 className="my-4">Payment Status</h4>
                    <p style={{color:'green'}} ><b>{order[0].orderStatus.statusType}</b></p>

                    <h4 className="my-4">Order Status:</h4>
                    {<p style={{color:'green'}}><b>{order[0].orderStatusId===2? 'DELIVERED':'PENDING'}</b></p>}

                   <h4 className="my-4">Order Items:</h4>
                <hr />

            {
            order[0].products.map(product=>{
                
            return <div className="cart-item my-1">
                        <div className="row my-5">
                            <div className="col-3 ">
                                <img src={product.photo} alt="foto" height="45" width="65" />
                            </div>

                            <div className="col-3 mt-4 ">
                                <Link to={`/products/${product.id}`}><p> <b>Product Name: </b>{product.name}</p></Link>
                            </div>

                            <div className="col-3 mt-4 ">
                                <p> <b>Quantity Buyed: </b>{product.OrderProducts.cantidad}</p>
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



: 'loading'} 

</>
)
}

export default OrderDetail;
