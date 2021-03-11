import {createReducer, createAsyncThunk, createAction} from "@reduxjs/toolkit"
import axios from "axios"


export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("api/auth/register", data).then((respuesta)=>respuesta.data)
  })

export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
  return axios
      .post("/api/auth/login", {email: data.email, password: data.password})
      .then((respuesta) =>  respuesta.data)
})


export const editUser= createAsyncThunk("EDIT_USER", (data)=>{
  /*conseguir id */
  return axios.put("/api/users/userId", data).then((respuesta)=>respuesta.data)
})


// export const logout= createAsyncThunk("LOGOUT_REQUEST", ()=>{
//   return axios.post(/*ver ruta*/"api/auth/logout").then((respuesta)=>respuesta.data)
// })

export const logout = createAction("LOGOUT")



// onClick de logout que va en el front(){
//   const logOut = (e) => {
//     e.preventDefault();
//     localregisterStorage.clear();
//     token = undefined;
//   };
//   token undefined
//   local storage vacio
//   dispatch una accion
//   redirigimos a home
// }


//FUNCIONES SOLO PARA EL ADMIN
export const getUsers= createAsyncThunk("GET_USERS", ( )=>{
    return axios.get("/api/users").then((respuesta)=>respuesta.data)
  })

export const changePermits= createAsyncThunk("CHANGE_PERMITS", (data)=>{
  return axios.put("/api/users/userId/permits")
  })





const userReducer= createReducer([], {
 
    [login.fulfilled] : (state, action) =>  action.payload.usuario,
    [logout.fulfilled]: (state, action) => [],
    [editUser.fulfilled] : (state, action) =>  action.payload,
    [register.fulfilled] : (state, action) =>  action.payload,
    [getUsers.fulfilled] : (state, action) =>  action.payload,
    [changePermits.fulfilled] : (state, action) =>  action.payload
})

  
export default userReducer