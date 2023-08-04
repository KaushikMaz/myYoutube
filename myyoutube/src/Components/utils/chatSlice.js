import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"liveChat",
    initialState:{
        liveMessages:[]
    },
    reducers:{
        addLiveMessages:(state,action)=>{
            
            state.liveMessages.unshift(action.payload)
            state.liveMessages.splice(30,1)
     
        }
    }
})

export const{addLiveMessages}=chatSlice.actions
export default chatSlice.reducer;