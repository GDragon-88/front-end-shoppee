import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchShopMall = createAsyncThunk("fetchShopMall",async()=>{
    const data = await fetch("http://localhost:8081/api/shopmall");
    const result = await data.json()
    return result
})

const shopMallSlice = createSlice({
    name:'shopmall',
    initialState:{status:"idle",value:[]},
    reducers:{
        fetchShopMall:(state,action)=>{
            state.value=action.payload
        }
    },
    extraReducers:{
        [fetchShopMall.pending]:(state,action)=>{
            state.status="idle"
        },
        [fetchShopMall.fulfilled]:(state,action)=>{
            state.status="success"
            state.value=action.payload
        }
    }
})

export default shopMallSlice;