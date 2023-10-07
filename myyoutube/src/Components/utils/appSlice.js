import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isInteractionOpen:false,
        isDescriptionOpen:false,
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
        }
    },
});


export const {toggleMenu, toggleMenuOff, toggleInteraction,toggleDescription}= appSlice.actions
export default appSlice.reducer;