import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchDataSearch = createAsyncThunk('getDataSearch',async(value) =>{
    let res = await axios.post(`http://localhost:8081/search/${value}`,{value:value});
    console.log(res);
    return res.data
})

const searchSlice = createSlice({
    name:'search',
    initialState:{status:'idle',value:[]},
    reducers:{
        fetchData:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchDataSearch.pending]:(state,action)=>{
            state.status='idle'
        },
        [fetchDataSearch.fulfilled]:(state,action)=>{
            state.status= 'success'
            state.value=action.payload
        }
    }
})

export default searchSlice