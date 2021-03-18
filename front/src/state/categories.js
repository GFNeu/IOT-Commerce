import {createReducer, createAction, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getCategories= createAction("GET_CATEGORIES")



const categoriesReducer= createReducer([], {
    [getCategories] : (state, action) =>  action.payload,
})

  
export default categoriesReducer