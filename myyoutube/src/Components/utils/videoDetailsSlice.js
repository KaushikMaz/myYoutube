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
        sportsVideos:[],
        gamingVideos:[]
        
    },
    reducers:{
        addVideos:(state,action)=>{
            const{category,...video}=action.payload
            state[category]=video

        },
    },


    }

)

export const {addVideos}=VideoDetailsSlice.actions
export default VideoDetailsSlice.reducer