import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('getData',async() =>{
    let data = await fetch("http://localhost:8081/api/category");
    const result = await data.json()
    return result
})

const categorySlice = createSlice({
    name:'category',
    initialState:{status:'idle',value:[]},
    reducers:{
        fetchData:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchCategory.pending]:(state,action)=>{
            state.status='idle'
        },
        [fetchCategory.fulfilled]:(state,action)=>{
            state.status= 'success'
            state.value=action.payload
        }
    }
})

export default categorySlice