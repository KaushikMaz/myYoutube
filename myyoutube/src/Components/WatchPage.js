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
    
    
    <div className="flex flex-col w-screen ">
      <div className='md:pl-20 md:ml-4 mt-[3rem] md:mt-[5rem] '>
          <div className="relative ">
            {loading && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
          )}
                <iframe className="w-screen h-[15rem] md:w-[44rem] md:h-[23rem]"  src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>  
          
      </div>
       
      <div>
        <VidDetails details={videos} id={videoId}/>
      </div>
      <div className="flex w-screen overflow-x-scroll no-scrollbar  ">
        <div>
          <LiveChat />
        </div>
        <div>
          <CommentsContainer/>
        </div>
      </div>

        
      
              
            
    </div>
    
    
  )
}

export default WatchPage