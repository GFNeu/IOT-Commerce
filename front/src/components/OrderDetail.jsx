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

const OrderDetail = () => {
    const [review, setReview] =useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const orders = useSelector(state=> state.orders)
    const user = useSelector(state => state.user)
    

    const createReview = async(e, productId, userId ) =>{
        e.preventDefault();
        
    try{
        const body = {review, userId};
    const res = await axios.post(`/api/products/${productId}/reviews`, body)

            console.log('ACA ESTA EL AXIOS',res);
            if(res.data==='ya existe una review'){
                swal('ya existe una review de este producto')
            }else{
                swal('review guardada!')
            }
            setShow(false);
    }catch(err){
            console.error(err)
    }
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (e,param) => setShow(true);

    useEffect(()=>{
        dispatch(getPastOrders())
    },[])

return (
<>
{console.log(orders[orders.length-1])}
{ orders[orders.length-1] ?
    <div className="container container-fluid">
	
    <div className="row d-flex justify-content-between">
        <div className="col-12  mt-2 order-details">

            <h1 className="my-3">{`Order Id: #${(orders[orders.length-1]).id}`}</h1>

                <h4 className="mb-3"><b>Client Info</b></h4>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Lastname:</b>{user.lastName}</p>

                    <hr/>

                    <h4 className="my-4">Payment Status</h4>
                    <p style={{color:'green'}} ><b>{(orders.slice(-1))[0].orderStatusId===2? 'PAID':'PENDING'}</b></p>

                    <h4 className="my-4">Order Status:</h4>
                    <p style={{color:'green'}}><b>{(orders.slice(-1))[0].orderStatusId===2? 'DELIVERED':'PENDING'}</b></p>

                   <h4 className="my-4">Order Items:</h4>
                <hr />

            {
            orders.slice(-1)[0].products.map(order=>{

            return <div className="cart-item my-1">
                        <div className="row my-5">
                            <div className="col-4 ">
                                <img src={order.photo} alt="foto" height="45" width="65" />
                            </div>

                            <div className="col-5 ">
                                
                                {/* aca va el modal */}
                            <Button variant="warning" onClick={handleShow} data-toggle='modal' 
                            data-target={`#id${order.id}`}>Add Review</Button>
                               <Form onSubmit={createReview} id={`id${order.id}`}>
                                    <Modal show={show} onHide={handleClose}  className='modal fade' role='dialog'>
                                        <ModalHeader closeButton>
                                            <ModalTitle>Agrega tu Review</ModalTitle>
                                        </ModalHeader>
                                        <ModalBody>
                                            <InputGroup placeholder ='review...'onChange={ e=> setReview(e.target.value)}>
                                                <FormControl type="text" placeholder="agrega tu review.." />
                                            </InputGroup>
                                        
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                                            <Button variant="primary" onClick={(e)=>createReview(e, order.id, user.id)} >Save Review</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Form>
                            </div>


                            <div className="col-4 mt-4 ">
                                <p> <b>Product Name: </b>{order.name}</p>
                            </div>

                            <div className="col-4 mt-4 ">
                                <p> <b>Quantity Buyed: </b>{order.OrderProducts.cantidad}</p>
                            </div>
                        </div>
                    </div>

                    })
                    }
                  
                <hr />
        </div>
    </div>
    
</div>  



: 'loading'} 

</>
)
}

export default OrderDetail;
