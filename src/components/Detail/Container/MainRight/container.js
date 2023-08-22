import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchDetailProduct = createAsyncThunk('getData',async(name) =>{
    let data = await fetch(`http://localhost:8081/api/detail/${name}`);
    const result = await data.json()
    return result
})

const detailSlice = createSlice({
    name:'detail',
    initialState:{status:'idle',value:[]},
    reducers:{
        fetchData:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchDetailProduct.pending]:(state,action)=>{
            state.status='idle'
        },
        [fetchDetailProduct.fulfilled]:(state,action)=>{
            state.status= 'success'
            state.value=action.payload
        }
    }
})

export default detailSlice