import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice' 
import appReducer from './appSLice'
import videoReducer from './getVideoSlice'
import chatReducer from './chatSlice'
const appStore = configureStore({
  
    reducer:{
      app:appReducer,
      search:searchReducer,
      video:videoReducer,
      chat:chatReducer
    }
})

export default appStore