import {createReducer, createAsyncThunk, createAction} from "@reduxjs/toolkit"
import axios from "axios"


export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("api/auth/register", data).then((respuesta)=>[])
  })

export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
  return axios
      .post("/api/auth/login", {email: data.email, password: data.password})
      .then((respuesta) =>  respuesta.data)
})

export const setUser= createAction("SET_USER")


export const editUser= createAsyncThunk("EDIT_USER", (data)=>{
  /*conseguir id */
  return axios.put("/api/users/userId", data).then((respuesta)=>respuesta.data)
})

export const logout = createAction("LOGOUT")



export const changePermits= createAsyncThunk("CHANGE_PERMITS", (data)=>{
  return axios.put("/api/users/userId/permits")
  })







const userReducer= createReducer([], {
 
    [login.fulfilled] : (state, action) =>  action.payload.usuario,
    [logout]: (state, action) => [],
    [setUser]: (state, action) => action.payload,
    [editUser.fulfilled] : (state, action) =>  action.payload,
    [register.fulfilled] : (state, action) =>  action.payload,
    [changePermits.fulfilled] : (state, action) =>  action.payload
})

  
export default userReducer