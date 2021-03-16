import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"



export const addFirstProduct= createAsyncThunk("ADD_FIRST_PRODUCT", (data, thunkAPI)=>{
    
    return axios.post(/*ver ruta*/"api/order/", data).then((respuesta)=>respuesta.data)
  })

export const setCarrito = createAsyncThunk("SET_CARRITO",(data, thunkAPI)=>{
  console.log("SET CARRITO!!")
  const localS = localStorage.getItem('carrito')
  console.log(localS)
  
  if(localS){
     return JSON.parse(localS)
  }
})

export const addProduct= createAsyncThunk("ADD_PRODUCT", (data, thunkAPI)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    console.log("addProduct DISPATCH")
  const { user } = thunkAPI.getState();
  const {id, cantidad, price, photo, name} = data
  return {id, name, price, photo, cantidad}
  //Si no está el usuario, trabajamos directamente con el estado y local storage
  
  return {id, cantidad}
  //Si está el usuario, sincronizar y trabajar con el back
    
    
    //return axios.put(/*ver ruta*/"api/order/orderId", data).then((respuesta)=>respuesta.data)
  })

export const addAmount= createAsyncThunk("ADD_AMOUNT", (data, thunkAPI)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
  console.log("addAmount DISPATCH")
  const { user } = thunkAPI.getState();
  return {id: data}
     //return axios.put(/*ver ruta*/"api/order/orderId", data)
    //.then((respuesta)=>respuesta.data)

})

export const removeAmount= createAsyncThunk("REMOVE_AMOUNT", (data, thunkAPI)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
  console.log("addAmount DISPATCH")
  const { user } = thunkAPI.getState();
  return {id: data}
  //return axios.put(/*ver ruta*/"api/order/orderId", data).then((respuesta)=>respuesta.data)
})

export const emptyCarrito= createAsyncThunk("EMPTY_CARRITO", (data, thunkAPI)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
      return [] 
  //return axios.delete("api/order/orderId").then((respuesta)=>respuesta.data)
  })

export const checkout= createAsyncThunk("CHECKOUT", (data)=>{
    /* axios para el checkout? Problema encontrado: Usamos orden como carrito, 
    pero despues del checkout tenemos que vaciarlo y 
    si hacemos un delete despues no podemos acceder para ver historial de ordenes
    
    Hacer modelo de orden?*/
  })



const carritoReducer= createReducer([], {
    [addFirstProduct.fulfilled] : (state, action) =>  action.payload,
    [setCarrito.fulfilled] : (state, action) =>  action.payload,
    [addProduct.fulfilled]: (state, action) => {
                  const item = state.filter(x => x.id === action.payload.id)
                  const index = state.indexOf(item[0])
                  
                  if(!item.length) state.push(action.payload)  
                  else state[index].cantidad += action.payload.cantidad

                  localStorage.setItem("carrito",JSON.stringify(state))
    }, 
    [addAmount.fulfilled] : (state, action) =>  {
          const item = state.filter(x => x.id === action.payload.id)
          const index = state.indexOf(item[0])
          state[index].cantidad += 1

          localStorage.setItem("carrito",JSON.stringify(state))
    }, 
    [removeAmount.fulfilled] : (state, action) =>  {
          const item = state.filter(x => x.id === action.payload.id)
          const index = state.indexOf(item[0])
          if(state[index].cantidad > 1) state[index].cantidad -= 1
          else {
            state.splice(index, 1)
            if(state.length === 0) localStorage.removeItem('carrito');
          }   
    },
    [emptyCarrito.fulfilled] : (state, action) =>  {
        localStorage.removeItem('carrito');
        return []
    },
    [checkout.fulfilled] : (state, action) =>  [] // Modificar el estado sin hacer un delete podria solucionar el problema de las ordenes
})

  
export default carritoReducer