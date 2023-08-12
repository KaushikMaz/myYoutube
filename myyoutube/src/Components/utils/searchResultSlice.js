import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice=createSlice({
    name:"searchResult",
    initialState:{

    },
    reducers:{
        searchResult:(state,action)=>{
            return action.payload
        }
    }
})

export const{searchResult}=searchResultSlice.actions
export default searchResultSlice.reducer