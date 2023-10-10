import React from "react"
import { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from './Constants'
import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { VideoShimmer } from './helper/Shimmer'
import { useDispatch } from "react-redux"
import { addVideos } from "./utils/videoDetailsSlice"
import { mergedObjects } from "./Constants"



const VideoContainer = () => {
  const dispatch=useDispatch()
  const [videos,setVideos]=useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  const videosPerRow = isMenuOpen ? 3 : 4;
  const initialRows=3;
  const InitialVideos=videosPerRow*initialRows
  const [videosVisible, setVideosVisible] = useState(InitialVideos);
  

  
    useEffect(()=>{
      getVideos();
    },[])

    const getVideos=async()=>{
      try{
        const data= await fetch(YOUTUBE_API_KEY)
        if(!data.ok){
          throw new Error("Network Response Issues")
        }
        const json=await data.json();
        // console.log(json.items)
        setVideos(json.items)

        const videoData=json?.items.map((obj)=>{
          const {id}=obj;
          const{channelTitle, title}=obj?.snippet;
          const {description}=obj?.snippet?.localized;
          const {likeCount,viewCount}=obj?.statistics;
          return {[id]:{channelTitle,title,description,likeCount,viewCount}}
              
        })
                
        const mergeData=mergedObjects(videoData)
        dispatch(addVideos({...mergeData,category:"homeVideos"}))

      }catch(error){
        console.log("Error fetching Videos",error)
      }
        
   }

   useEffect(() => {
    // Update videosVisible when isMenuOpen changes, but only if it's not equal to the total number of videos
    if (videosVisible !== videos.length) {
      const updatedVideosPerRow = isMenuOpen ? 3 : 4;
      setVideosVisible(updatedVideosPerRow * initialRows);
    }
  }, [isMenuOpen, videosVisible, initialRows, videos.length]);


// console.log(videos)

  return(
    
  <>
  {videos.length>0?(
    <div className={`flex flex-wrap  ${isMenuOpen ? "md:ml-60" : "md:ml-6"}  mt-[5rem] md:mt-[7rem] `}>
      {videos.slice(0, videosVisible).map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {videosVisible < videos.length && (
        <button
          className={`${isMenuOpen ? "md:w-[86%]" : "md:w-[98%]"}  w-[30%] left-[40%] fixed bottom-3 md:static rounded-l-full rounded-r-full px-1 bg-opacity-70 bg-slate-300  md:px-3 md:py-1 md:ml-2  border  border-gray-300 md:rounded-lg md:hover:bg-gray-500`}
          onClick={() => setVideosVisible(videos.length)}
        >
         Load More
        </button>
      )}
    </div>
  ):(<VideoShimmer/>)
      }
      
</>

 
    
  )
}

export default VideoContainer