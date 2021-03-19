import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const OrderDetail = () => {
    //consumir los estados de, user , cart, 
    //esta vista es para
const user= useSelector(state=> state.user)
return (
<>
<div>
    {user.isAdmin ? 
<div className="container container-fluid">
	
    <div className="row d-flex justify-content-between">
        <div className="col-12  mt-2 order-details">

            <h3 className="my-3">Order Id# 5</h3>

                <h4 className="mb-3">Client Info</h4>
                    <p><b>Name:</b> pepe</p>
                    <p><b>Lastname:</b> pepe</p>
                    <p><b>Total Amount:</b> $ 1000</p>

                    <hr/>

                    <h4 className="my-4">Payment Status</h4>
                    <p style={{color:'green'}} ><b>PAID</b></p>

                    <h4 className="my-4">Order Status:</h4>
                    <p style={{color:'green'}}><b>Delivered ()</b></p>

                   <h4 className="my-4">Order Items: map??</h4>
                    <hr />
                    <div className="cart-item my-1">
                        <div className="row my-5">
                            <div className="col-4 ">
                                <img src='https://www.geekfactory.mx/wp-content/uploads/2020/01/USB-PLUG.jpg' alt="aaa" height="45" width="65" />
                            </div>

                            <div className="col-5 ">
                                <button type="button" id="cart_btn" className='btn btn-warning ml-4' data-toggle='modal' >
                                Add Review
                                </button>
                                {/* aca va el modal */}
                                {/* <!-- Modal --> tengo q igualar data-target='#id5' con div id='id5'  */}

                                <div  className='modal fade' role='dialog'>
                                    <div className='modal-dialog'>
                                        {/* <!-- Modal content--> */}
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <button type='button' className='close' data-dismiss='modal'
                                                // onClick={() => setDescription(todo.description)} 
                                                >&times; </button>
                                                <h4 className='modal-title'>Edit Todo</h4>
                                            </div>
                                            <div className='modal-body'>
                                                {/*aca meto un input form para poder editar el todo */}
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                                          
                                                />
                                            </div>
                                            <div className='modal-footer'>
                                                {/*aca hay 1 boton mas para confirmar el posteo del review  */}
                                                <button type='button' className='btn btn-success' data-dismiss='modal'>
                                                    Post Review
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-4 mt-4 ">
                                <p> <b>Name:</b>Cable de alimentación USB a plug invertido</p>
                            </div>

                            <div className="col-4 mt-4 ">
                                <p> <b>Cantidad:</b> consumir las cantidades del cart??</p>
                            </div>
                        </div>
                    </div>
                <hr />
        </div>
    </div>
    
</div>: <h1 style={{textAlign:'center', marginTop:'15px'}}>Debes ser administrador para ver esta pagina</h1> } 
</div>
</>
)
}

export default OrderDetail;
