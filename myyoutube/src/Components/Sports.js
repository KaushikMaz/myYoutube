import React from 'react'
import useContent from './helper/useContent'
import { Sports_API } from './Constants'
import { FrontBanner } from './Constants'

const Sports = () => {
  
  const sports=useContent(Sports_API,3)
  React.useEffect(()=>{
    getVideos()
  })
  const getVideos=async()=>{
    const videos= await fetch(Sports_API)
    const data= await videos.json()
    // console.log(data)
  }
   return (
    <div className="flex flex-col">
      <FrontBanner name={"Sports"} description={"Watch the latest and Greatest Hits"} backgroundColor={'bg-gray-500'}/>
      {sports}
    </div>

  )
}

export default Sports