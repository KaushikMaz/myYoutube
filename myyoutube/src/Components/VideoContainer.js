import React from 'react'
import { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from './Constants'
import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector'


const VideoContainer = () => {
  const [videos,setVideos]=useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  
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
    <div className={`flex flex-wrap ${isMenuOpen?"ml-48":"ml-4"} mt-[7rem]`} >
      {videos.map(video=><Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info={video}/></Link>)}
    </div>
    
  )
}

export default VideoContainer