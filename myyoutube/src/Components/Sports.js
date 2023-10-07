import React from 'react'
import useContent from './helper/useContent'
import { Sports_API } from './Constants'
import { FrontBanner } from './Constants'

const Sports = () => {
  
  const sports=useContent(Sports_API,3)
  
   return (
    <div className="flex flex-col">
      <FrontBanner name={"Sports"} description={"Watch the latest and Greatest Hits"} backgroundColor={'bg-gray-500'}/>
      {sports}
    </div>

  )
}

export default Sports