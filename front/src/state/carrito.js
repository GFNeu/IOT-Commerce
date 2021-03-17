import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const setCarrito = createAsyncThunk("SET_CARRITO",(data, thunkAPI)=>{
  
  const { user } = thunkAPI.getState();
  const localS = localStorage.getItem('carrito')
  
  if(user.id){
    return axios.get(`/api/users/orders/${user.id}/pending`)
         .then(res => res.data)
         .then(order=>{
          console.log(order)   
           //Si no hay una orden en el back
           if(!order.length){
            
             if(localS){
               
               const local = JSON.parse(localS)
               const carritoSend = local.map(product => {
                 return {id: Number(product.id), precio: product.price, cantidad: product.cantidad}
                })
               return axios.post(`/api/users/orders/${user.id}`,{userID: user.id, carrito: carritoSend})
                    .then(() => local)
                    
             }
           } else { //Si hay elementos en la orden del back
             
              if(!localS){ //Si no hay nada en local storage
                 console.log(order)                       
                return order[0].products.map(product => {
                  return {id: Number(product.id), photo: product.photo, name: product.name, price: product.price, cantidad: product.OrderProducts.cantidad}
                })
              } else { //Si hay algo en local storage
                  
                  const back = order[0].products.map(product => {
                    return {id: Number(product.id), photo: product.photo, name: product.name, price: product.price, cantidad: product.OrderProducts.cantidad}
                  })
                  
                  const front = JSON.parse(localS)
                  front.forEach(prod => prod.id = Number(prod.id))
                  
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
                    return {id: Number(product.id), precio: product.price, cantidad: product.cantidad, photo: product.photo, name: product.name}
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
  const localS = localStorage.getItem('carrito')
  const {id, cantidad, price, photo, name} = data
  
  if(user.id){
        
    if(!localS){
      //si NO hay ítems en el carrito hacemos axios.post
      return axios.post(`/api/users/orders/${user.id}`,{userID: user.id, carrito: [{id: Number(id), cantidad, precio: price}]})
                  .then(() => {return {id: Number(id), name, price, photo, cantidad}})
    }else {
      //si SÍ hay ítems en el carrito hacemos axios.put
      //Normalización del local storage: 
      const enviar = JSON.parse(localS).map(product => {
        return {id: Number(product.id), cantidad: product.cantidad, precio: product.price}
      })
      //Ver si ya existe ese elemento en el carrito, si no existe, pushearlo, si existe, sumar cantidad
      const elemento = enviar.filter(product => product.id == Number(id))
      if(!elemento[0]) enviar.push({id: Number(id), cantidad, precio: price})
      else elemento[0].cantidad += cantidad
      
      return axios.put(`/api/users/orders/${user.id}`,{userID: user.id, carrito: enviar}) 
                  .then(() => {return {id: Number(id), name, price, photo, cantidad}})
    }
    
  } else {
    return {id, name, price, photo, cantidad}
  }
   
    
    //return axios.put(/*ver ruta*/"api/order/orderId", data).then((respuesta)=>respuesta.data)
  })

export const addAmount= createAsyncThunk("ADD_AMOUNT", (data, thunkAPI)=>{
    
  const { user } = thunkAPI.getState();
  if (user.id){
    const local = JSON.parse(localStorage.getItem('carrito'))
    const item = local.find(prod => prod.id == data)
    item.cantidad += 1
    return axios.put(`/api/users/orders/${user.id}`,{userID: user.id, carrito: [{id: item.id, precio: item.price, cantidad: item.cantidad}]}) 
                  .then(() => {return {id: data}})
  }else{
    return {id: data}
  }
})

export const removeAmount= createAsyncThunk("REMOVE_AMOUNT", (data, thunkAPI)=>{
  
  const { user } = thunkAPI.getState();
  if (user.id){
    const local = JSON.parse(localStorage.getItem('carrito'))
    const item = local.find(prod => prod.id == data)
    console.log("CANTIDAD ITEM",item.cantidad)
    if(item.cantidad > 1){
      console.log("entró a cantidad mayor a 1")
      item.cantidad -= 1
      console.log("CANTIDAD ITEM EN EL IF",item.cantidad)
      return axios.put(`/api/users/orders/${user.id}`,{userID: user.id, carrito: [{id: item.id, precio: item.price, cantidad: item.cantidad}]}) 
                  .then(() => {return {id: data}})
    } else {
      console.log("entró a cantidad igual a 1")
      return axios.put(`/api/users/orders/${user.id}/removeAmount`,{userID: user.id, productId: data}) 
                  .then(() => {return {id: data}})
    }
    
  }else{
    return {id: data}
  }
})


export const emptyCarrito= createAsyncThunk("EMPTY_CARRITO", (data, thunkAPI)=>{
      const { user } = thunkAPI.getState();
      if(user.id) {
        axios.delete(`/api/users/orders/${user.id}`)
             .then(()=> [])
      }
      else return [] 
  })

export const checkout= createAsyncThunk("CHECKOUT", (data, thunkAPI)=>{
      const { user } = thunkAPI.getState();
      return axios.put(`/api/users/orders/${user.id}/checkout`, {userID: user.id})
           .then(()=>[])
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
          const item = state.filter(prod => prod.id === action.payload.id)
          const index = state.indexOf(item[0])
          state[index].cantidad += 1

          localStorage.setItem("carrito",JSON.stringify(state))
    }, 
    [removeAmount.fulfilled] : (state, action) =>  {
          const item = state.filter(x => x.id === action.payload.id)
          const index = state.indexOf(item[0])
          if(state[index].cantidad > 1) {
              state[index].cantidad -= 1
              localStorage.setItem("carrito",JSON.stringify(state))
            }
          else {
            state.splice(index, 1)
            if(state.length === 0) localStorage.removeItem('carrito');
          }   
    },
    [emptyCarrito.fulfilled] : (state, action) =>  {
        localStorage.removeItem('carrito');
        return []
    },
    [checkout.fulfilled] : (state, action) => {
        localStorage.removeItem('carrito');
        return []
    }// Modificar el estado sin hacer un delete podria solucionar el problema de las ordenes
})

  
export default carritoReducer