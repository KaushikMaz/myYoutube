import { createSlice} from "@reduxjs/toolkit";

const VideoDetailsSlice=createSlice({
    name:"videoDetails",
    initialState:{
        Videos:[]
        
    },
    reducers:{
        addVideos:(state,action)=>{
            state.Videos=action.payload

        },
    },


    }

)

export const {addVideos}=VideoDetailsSlice.actions
export default VideoDetailsSlice.reducer