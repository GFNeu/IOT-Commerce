import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const setCarrito = createAsyncThunk("SET_CARRITO",(data, thunkAPI)=>{
  
  const { user } = thunkAPI.getState();
  const localS = localStorage.getItem('carrito')
  
  if(user.id){
    return axios.get(`/api/users/orders/${user.id}/pending`)
         .then(res => res.data)
         .then(order=>{
           //Si no hay una orden en el back
           if(!order.length){
            
             if(localS){
               
               const local = JSON.parse(localS)
               const carritoSend = local.map(product => {
                 return {id: product.id, precio: product.price, cantidad: product.cantidad}
                })
               return axios.post(`/api/users/orders/${user.id}`,{userID: user.id, carrito: carritoSend})
                    .then(() => local)
                    
             }
           } else { //Si hay elementos en la orden del back
             
              if(!localS){ //Si no hay nada en local storage
                                        
                return order[0].products.map(product => {
                  return {id: product.id, photo: product.photo, name: product.name, price: product.price, cantidad: product.OrderProducts.cantidad}
                })
              } else { //Si hay algo en local storage
                  
                  const back = order[0].products.map(product => {
                    return {id: product.id, photo: product.photo, name: product.name, price: product.price, cantidad: product.OrderProducts.cantidad}
                  })
                  
                  const front = JSON.parse(localS)
                  
                  const masLargo = front.length > back.length? front : back
                  
                  const masCorto = front.length > back.length? back : front
                  

                  masCorto.forEach(product => {
                      const prod = masLargo.filter(p => p.id == product.id)
                      
                      if(prod[0]){
                        prod[0].cantidad += product.cantidad
                      } else {
                        masLargo.push(product)
                      }
                  })

                  
                  const masLargoParaElBack = masLargo.map(product => {
                    return {id: product.id, precio: product.price, cantidad: product.cantidad, photo: product.photo, name: product.name}
                  })
                  return axios.put(`/api/users/orders/${user.id}`,{userID: user.id, carrito: masLargoParaElBack})
                              .then(()=> masLargo)

              }
           }
         })
  } else {
    if(localS){
      return JSON.parse(localS)
    }
  }
})

export const addProduct= createAsyncThunk("ADD_PRODUCT", (data, thunkAPI)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    console.log("addProduct DISPATCH")
  const { user } = thunkAPI.getState();
  const {id, cantidad, price, photo, name} = data
  if(user.id){
    //trabajamos con axios
    //si NO hay ítems en el carrito hacemos axios.post
    //si SÍ hay ítems en el carrito hacemos axios.put
  } else {
    return {id, name, price, photo, cantidad}
  }
   
    
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
    [setCarrito.fulfilled] : (state, action) =>  {
      if(action.payload !== undefined) localStorage.setItem("carrito",JSON.stringify(action.payload))
      return action.payload
    },
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