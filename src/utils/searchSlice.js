import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{

    }

    ,

    reducers:{
        cashResult:(state,action)=>{
        state=Object.assign(state,action.payload)
        }
    }
})
 export const {cashResult}=searchSlice.actions
export default searchSlice.reducer