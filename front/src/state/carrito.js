import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"



export const addFirstProduct= createAsyncThunk("ADD_FIRST_PRODUCT", (data)=>{
    return axios.post(/*ver ruta*/"api/order/", data).then((respuesta)=>respuesta.data)
  })


export const addProduct= createAsyncThunk("ADD_PRODUCT", (data)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.put(/*ver ruta*/"api/order/orderId", data).then((respuesta)=>respuesta.data)
  })


export const addAmount= createAsyncThunk("ADD_AMOUNT", (data)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.put(/*ver ruta*/"api/order/orderId", data)
    .then((respuesta)=>respuesta.data)

})

export const deleteProduct= createAsyncThunk("DELETE_PRODUCT", (data)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
  return axios.put(/*ver ruta*/"api/order/orderId", data).then((respuesta)=>respuesta.data)
})

export const emptyCarrito= createAsyncThunk("EMPTY_CARRITO", (data)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.delete("api/order/orderId").then((respuesta)=>respuesta.data)
  })

export const checkout= createAsyncThunk("CHECKOUT", (data)=>{
    /* axios para el checkout? Problema encontrado: Usamos orden como carrito, 
    pero despues del checkout tenemos que vaciarlo y 
    si hacemos un delete despues no podemos acceder para ver historial de ordenes
    
    Hacer modelo de orden?*/
  })



const carritoReducer= createReducer([], {
    [addFirstProduct.fulfilled] : (state, action) =>  action.payload,
    [addProduct.fulfilled]: (state, action) => action.payload, // O [...state, action.payload]?
    [addAmount.fulfilled] : (state, action) =>  action.payload, // O [...state, action.payload]?
    [deleteProduct.fulfilled] : (state, action) =>  action.payload,
    [emptyCarrito.fulfilled] : (state, action) =>  [],
    [checkout.fulfilled] : (state, action) =>  [] // Modificar el estado sin hacer un delete podria solucionar el problema de las ordenes
})

  
export default carritoReducer