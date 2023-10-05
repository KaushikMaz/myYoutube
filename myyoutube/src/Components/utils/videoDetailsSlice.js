import { createSlice} from "@reduxjs/toolkit";

const VideoDetailsSlice=createSlice({
    name:"videoDetails",
    initialState:{
        homeVideos:[],
        popularMusic:[],
        englishMusic:[],
        frenchMusic:[],
        popularNews:[],
        englishNews:[],
        gamingVideos:[],
        sportsvideos:[]

    },
    reducers:{
        addhomeVideos:(state,action)=>{
            state.homeVideos=action.payload

        },
        addpopularMusic:(state,action)=>{
            state.popularMusic=action.payload
        },
        addenglishMusic:(state,action)=>{
            state.englishMusic=action.payload
        },
        addfrenchMusic:(state,action)=>{
            state.frenchMusic=action.payload
        },
        addpopularNews:(state,action)=>{
            state.popularNews=action.payload
        },
        addenglishNews:(state,action)=>{
            state.englishNews=action.payload
        },
        addgamingVideos:(state,action)=>{
            state.gamingVideos=action.payload
        },
        addsportsVideos:(state,action)=>{
            state.sportsvideos=action.payload
        },


    }

})

export const {addhomeVideos,addpopularMusic,addenglishMusic,addfrenchMusic,addpopularNews,addenglishNews,addgamingVideos,addsportsVideos}=VideoDetailsSlice.actions
export default VideoDetailsSlice.reducer