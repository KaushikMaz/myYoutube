import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isInteractionOpen:false,
        isDescriptionOpen:false,
        isChatVisible:true
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

        },
        toggleDescription:(state)=>{
            state.isDescriptionOpen=!state.isDescriptionOpen;
        },
        toggleChatVisibility:(state)=>{
            state.isChatVisible=!state.isChatVisible
        }
    },
});


export const {toggleMenu, toggleMenuOff, toggleInteraction,toggleDescription,toggleChatVisibility}= appSlice.actions
export default appSlice.reducer;