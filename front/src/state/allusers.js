import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

//FUNCIONES SOLO PARA EL ADMIN
export const getUsers = createAsyncThunk("GET_USERS", () => {
  return axios.get("/api/users").then((respuesta) => respuesta.data);
});

export const changePermits = createAsyncThunk("CHANGE_PERMITS", (data) => {
  return axios.put("/api/users/userId/permits");
});

export const busquedaUsuario = createAction("BUSQUEDA_USUARIO");


export const editUser= createAction("EDIT_USER")

const allUserReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
  [changePermits.fulfilled]: (state, action) => action.payload,
  [busquedaUsuario]: (state, action) => action.payload,
  [editUser]: (state, action) => action.payload,

});

export default allUserReducer;
