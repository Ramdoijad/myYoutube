import { createSlice } from "@reduxjs/toolkit";


const getVideoSlice=createSlice({
    name:"video",
    initialState:{},
    reducers:{
        videoResult:(state,action)=>{
          return action.payload; 
        }
    }
})

export const {videoResult}= getVideoSlice.actions;

export default getVideoSlice.reducer