import React from 'react'
import { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from './Constants'
import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"

const VideoContainer = () => {
  const [videos,setVideos]=useState([])
  
    useEffect(()=>{
      getVideos();
    },[])

    const getVideos=async()=>{
      const data= await fetch(YOUTUBE_API_KEY)
      const json=await data.json();
      // console.log(json.items)
      setVideos(json.items)
    }
     
  return(
    <div className="flex flex-wrap ml-5">
      {videos.map(video=><Link to={"/watch?=" + video.id}><VideoCard key={video.id} info={video}/></Link>)}
    </div>
    
  )
}

export default VideoContainer