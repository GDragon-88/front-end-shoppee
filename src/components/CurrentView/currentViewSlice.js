import { createSlice  } from "@reduxjs/toolkit";
export default createSlice({
    name:"current_view",
    initialState:{
        page:''
    },
    reducers:{
        checkPage:(state,action)=>{
            state.page= action.payload
         }
    }
})