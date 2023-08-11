import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isInteractionOpen:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        toggleMenuOff:(state)=>{
            state.isMenuOpen=false;
        },
        toggleInteraction:(state)=>{
            state.isInteractionOpen=!state.isInteractionOpen;

        }
    },
});


export const {toggleMenu, toggleMenuOff, toggleInteraction}= appSlice.actions
export default appSlice.reducer;