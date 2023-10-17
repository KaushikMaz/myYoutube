import React, { useState,useEffect, useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenuOff,toggleChatVisibility } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import {CommentsContainer} from './CommentsContainer'
import LiveChat from './LiveChat'
import VidDetails from './VidDetails'

const WatchPage = () => {
    const videos=useSelector(store=>store.videoDetails)
    const chatVisible=useSelector(store=>store.app.isChatVisible)
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

    const chatSection=useRef(null)
    const commentsSection=useRef(null)

    

   const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if (entry.isIntersecting){
            dispatch(toggleChatVisibility()) }
          }
        )
   })
        
   useEffect(()=>{
    const chatSectionValue=chatSection.current
    const commentsSectionValue=commentsSection.current
    if(chatSectionValue){
      observer.observe(chatSectionValue)
    }
    if(commentsSectionValue){
      observer.observe(commentsSectionValue)
    }

    return()=>{
      if(chatSectionValue){
        observer.unobserve(chatSectionValue)
      }
      if(commentsSectionValue){
        observer.unobserve(commentsSectionValue)
      }
    }
   },[])
        


  return (
    
    
    <div className="flex flex-col w-screen ">
      <div className='md:pl-20 md:ml-4 mt-[3rem] md:mt-[5rem] '>
          <div className="relative ">
            {loading && (
              <div className="absolute bg-gray-300 animate-pulse"></div>
          )}
                <iframe className="w-screen h-[15rem] md:w-[44rem] md:h-[23rem]"  src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>  
          
      </div>
       
      <div>
        <VidDetails details={videos} id={videoId}/>
      </div>
      <div className='flex md:hidden pr-2 justify-end'>
        <div className={`${!chatVisible && 'hidden'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" w-3 h-3">
        <g clip-path="url(#clip0_9_2121)">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z" clipRule="evenodd" />
        </g> <defs> <clipPath id="clip0_9_2121">
        <path d="M0 0h20v20H0z" />
        </clipPath>
        </defs>
        </svg>
        </div>
        <div className={`${chatVisible && "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clipRule="evenodd" />
        </svg>
        </div>
      </div>
      <div className="flex w-screen overflow-x-scroll no-scrollbar  ">
        <div ref={chatSection}>
          <LiveChat />
        </div>
        <div ref={commentsSection}>
          <CommentsContainer/>
        </div>
      </div>

        
      
              
            
    </div>
    
    
  )
}

export default WatchPage