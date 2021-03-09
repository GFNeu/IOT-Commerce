import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post(/*ver ruta*/"api/auth/register", data).then((respuesta)=>respuesta.data)
  })

export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
    return axios.post(/*ver ruta*/"api/auth/login", data)
    .then((respuesta)=>respuesta.data)

})

export const logout= createAsyncThunk("LOGOUT_REQUEST", ()=>{
  return axios.post(/*ver ruta*/"api/auth/logout").then((respuesta)=>respuesta.data)
})



//FUNCIONES SOLO PARA EL ADMIN
export const getUsers= createAsyncThunk("GET_USERS", (data)=>{
    return axios.get("/api/users/", data).then((respuesta)=>respuesta.data)
  })

export const changePermits= createAsyncThunk("CHANGE_PERMITS", (data)=>{
    //HACER UN AXIOS PARA REVOCAR/AGREGAR PERMISOS CON JWT
  })



const userReducer= createReducer([], {
    [login.fulfilled] : (state, action) =>  action.payload,
    [logout.fulfilled]: (state, action) => [],
    [register.fulfilled] : (state, action) =>  action.payload,
    [getUsers.fulfilled] : (state, action) =>  action.payload,
    [changePermits.fulfilled] : (state, action) =>  action.payload
})

  
export default userReducer