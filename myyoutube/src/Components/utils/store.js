import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice";
import searchResultSlice from "./searchResultSlice";
import chatSlice from "./chatSlice";
import videoDetailsSlice from "./videoDetailsSlice";


const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        searchResult:searchResultSlice,
        liveChat:chatSlice,
        videoDetails:videoDetailsSlice
        
    }
})


export default store;