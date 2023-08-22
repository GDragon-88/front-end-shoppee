import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchProcduct = createAsyncThunk("fetchProcduct",async()=>{
    const data = await fetch("http://localhost:8081/api/product");
    const result = await data.json()
    return result
})

const productSlice = createSlice({
    name:'product',
    initialState:{status:"idle",value:[]},
    reducers:{
        fetchProcduct:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchProcduct.pending]:(state,action)=>{
            state.status="idle"
        },
        [fetchProcduct.fulfilled]:(state,action)=>{
            state.status="success"
            state.value=action.payload
        }
    }
})

export default productSlice