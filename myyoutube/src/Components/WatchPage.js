import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenuOff } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import {CommentsContainer} from './CommentsContainer'
import LiveChat from './LiveChat'
import VidDetails from './VidDetails'

const WatchPage = () => {
    const videos=useSelector(store=>store.videoDetails)
    const [videoId]=useSearchParams();
    const [loading,setLoading]=useState(true)
useEffect(()=>{
  const handleLoad=()=>{
    setLoading(false)
  }

  const iframeElement=document.querySelector("iframe")
  if(iframeElement){
    iframeElement.addEventListener("load",handleLoad)

    return()=>iframeElement.removeEventListener('load',handleLoad)
  }

},[])
    
    
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(toggleMenuOff())
    },[])
  return (
    
    <div className="flex flex-col">
      <div className='pl-20 ml-4 mt-[5rem] flex '>
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
            <iframe width="700" height="400"  src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>  
        <LiveChat />
      </div>
      <div>
        <VidDetails details={videos} id={videoId}/>
      </div>
      <CommentsContainer/>  
            
    </div>
    
    
  )
}

export default WatchPage