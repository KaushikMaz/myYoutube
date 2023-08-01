import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOff } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import {CommentsContainer} from './CommentsContainer'

const WatchPage = () => {
    const [videoId]=useSearchParams();
    
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(toggleMenuOff())
    },[])
  return (
    
    <div className="flex flex-col">
      <div className='px-20 ml-4 mt-[5rem]'>
        <iframe width="700" height="400" src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <CommentsContainer/>  
            
    </div>
    
    
  )
}

export default WatchPage