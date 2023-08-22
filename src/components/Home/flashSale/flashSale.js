import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const fetchFlashSale =createAsyncThunk('fetch/flashsale',async()=>{
    const data = await fetch("http://localhost:8081/api/flashsale")
    const result = await data.json()
    return result
})

const flashsaleSlice = createSlice({
    name:"flashsale",
    initialState:{status:'idle',value:[]},
    reducers:{
        fetchFlashSale:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchFlashSale.pending]:(state,action)=>{
            state.status="idle"
        },
        [fetchFlashSale.fulfilled]:(state,action)=>{
            state.status="success"
            state.value=action.payload
        }
    }
})
export default flashsaleSlice