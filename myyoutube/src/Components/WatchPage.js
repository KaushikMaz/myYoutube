import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOff } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [videoId]=useSearchParams();
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(toggleMenuOff())
    },[])
  return (
    <div className='px-20'>
      <iframe width="700" height="400" src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage