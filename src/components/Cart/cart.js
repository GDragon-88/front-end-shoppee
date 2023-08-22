import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk('getData',async() =>{
    let cookie = document.cookie.substring(7)
   const data = await fetch("http://localhost:8081/cart", {
                method: "POST",
                body: JSON.stringify({ value: cookie }),
                headers: { 'Content-Type': 'application/json' }
    })
    const result = await data.json()
    return result
})

const cartSlice = createSlice({
    name:'cart',
    initialState:{status:'idle',value:[]},
    reducers:{
        fetchData:(state,action)=>{
            state.value=action.payload
        },
        uploadValue:(state,action)=>{
            state.value=action.payload
        }

    },

    extraReducers:{
        [fetchCart.pending]:(state,action)=>{
            state.status='idle'
        },
        [fetchCart.fulfilled]:(state,action)=>{
            state.status= 'success'
            state.value=action.payload
            
        }
    }
})

export default cartSlice