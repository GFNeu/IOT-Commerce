import React,{useEffect, useState } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getPastOrders } from '../state/order'
import {useHistory} from 'react-router-dom'
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
import Spinner from 'react-bootstrap/Spinner'

const OrderDetail = () => {
    
    const [review, setReview] =useState('');
    const [show, setShow] = useState(false);
    const [productId, setProductId]= useState(0)
    const [puntaje, setPuntaje]= useState(0)
    const dispatch = useDispatch();

    const orders = useSelector(state=> state.orders)
    const user = useSelector(state => state.user)
    
    const history = useHistory()
    if(!user.id) history.push('/')
   
    const handleShow = (e,param) => {
        setProductId(param)
 
        setShow(true)};

    const createReview = async(e, productId, userId ) =>{
        e.preventDefault();

        if(puntaje==0){
            return swal("Ingrese un puntaje")
        }
        
    try{
        const body = {review, userId, puntaje};
    const res = await axios.post(`/api/products/${productId}/reviews`, body)

            console.log('ACA ESTA EL AXIOS',res);
            if(res.data==='ya existe una review'){
                swal('Ya existe una review de este producto')
            }else{
                swal('Review guardada!')
            }
            setShow(false);
    }catch(err){
            console.error(err)
    }
    }
    
    const handleClose = () => {

        setShow(false);
    }
   
    useEffect(()=>{
        dispatch(getPastOrders())
    },[productId])

return (
<>

{ orders[orders.length-1] ?
    <div className="container container-fluid">
	
    <div className="row d-flex justify-content-between">
        <div className="col-12  mt-2 order-details">

            <h1 className="my-3">{`ID de la compra: #${(orders[orders.length-1]).id}`}</h1>

                <h4 className="mb-3"><b>Client Info</b></h4>
                    <p><b>Nombre: </b> {user.name}</p>
                    <p><b>Apellido: </b>{user.lastName}</p>

                    <hr/>

                    <h4 className="my-4">Estado del pago:</h4>
                    <p style={{color:'green'}} ><b>{(orders.slice(-1))[0].orderStatusId===2? 'PAGADO':'PENDIENTE'}</b></p>

                    <h4 className="my-4">Estado de la compra:</h4>
                    <p style={{color:'green'}}><b>{(orders.slice(-1))[0].orderStatusId===2? 'ENTREGADO':'PENDIENTE'}</b></p>

                   <h4 className="my-4">Productos</h4>
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
                            
                            <Button variant="warning" onClick={(e)=> handleShow(e, order.id)} data-toggle='modal' 
                            data-target={`#id${order.id}`}>Agregar review</Button>
                               <Form onSubmit={createReview} id={`id${order.id}`}>
                                    <Modal show={show} onHide={handleClose}  className='modal fade' role='dialog'>
                                        <ModalHeader closeButton>
                                            <ModalTitle>Agregar review</ModalTitle>
                                        </ModalHeader>
                                        <ModalBody><InputGroup placeholder ='review...'onChange={ e=> setReview(e.target.value)}>
                                        <FormControl type="text" placeholder="agrega tu review.." />
                                        </InputGroup>
                                        <hr/>
                                        <p>Agregale un puntaje:</p><Rating  onChange={(e)=> setPuntaje(e)}initialRating={puntaje} emptySymbol={<FaRegStar/>} fullSymbol={<FaStar/>}></Rating>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                                            <Button variant="primary" onClick={(e)=>createReview(e, productId, user.id)} >Save Review</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Form>
                            </div>


                            <div className="col-4 mt-4 ">
                                <p> <b>Producto: </b>{order.name}</p>
                            </div>

                            <div className="col-4 mt-4 ">
                                <p> <b>Canidad: </b>{order.OrderProducts.cantidad}</p>
                            </div>
                        </div>
                    </div>

                    })
                    }
                  
                <hr />
        </div>
    </div>
    
</div>  



: <div className="centerInPage"><Spinner animation="border" /></div>} 

</>
)
}

export default OrderDetail;
