import {createReducer, createAction, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const allCategoriesAdmin= createAction("ALL_CATEGORIES_ADMIN")

export const  oneCategory= createAction("ONE_CATEGORY")

export const createCategory= createAction("CREATE_CATEGORY")

export const changeCategory= createAction("CHANGE_CATEGORY")

export const deleteCategory= createAction("DELETE_CATEGORY")



const categoriesAdminReducer= createReducer([], {
    [allCategoriesAdmin] : (state, action) =>  action.payload,
    [oneCategory] : (state, action) =>  action.payload,
    [createCategory]: (state, action) => [...state, action.payload],
    [changeCategory] : (state, action) =>  action.payload, //deberiamos hacer que en la ruta devuelva todas las categorias
    [deleteCategory] : (state, action) =>  action.payload //deberiamos hacer que en la ruta devuelva todas las categorias
})

  
export default categoriesAdminReducer