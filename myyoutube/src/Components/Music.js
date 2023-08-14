import React from 'react'
import { Music_API} from './Constants'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux/'
import {Link} from "react-router-dom"
const Music = () => {
  const[ musicVideos,setMusicVideos]=React.useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)

  React.useEffect(()=>{
    getMusicVideos()
    
  },[])

  const getMusicVideos=async()=>{
    const response=await fetch(Music_API)
    const jsonData= await response.json()
    setMusicVideos(jsonData?.items)
        
  }
console.log(musicVideos)
  return (
    <div className={`font-bold ${isMenuOpen ? "ml-48" : "ml-4"} mt-[7rem] flex flex-wrap`}>
     {musicVideos.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
        ))}
    </div>
  )
}

export default Music