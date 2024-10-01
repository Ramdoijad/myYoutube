import { createSlice } from "@reduxjs/toolkit";


const menuSlice= createSlice({
    name:"menu",
    initialState:null,
    reducers:{
        showMenu:(state,action)=>{
          
        }
    }
})
  export const{showMenu}=menuSlice.actions
export default menuSlice.reducer