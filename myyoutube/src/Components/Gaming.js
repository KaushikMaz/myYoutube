import React from 'react'
import {Gaming_API} from "./Constants"
import useContent from "./helper/useContent" 
import { FrontBanner } from './Constants'


const Gaming = () => {
    // const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    const Gaming=useContent(Gaming_API,2,"gamingVideos")
  return (
    <div className="flex flex-col">
        <FrontBanner name={"Gaming"} description={"The World of E-Games is here to Stay"} backgroundColor={'bg-indigo-500'}/>
        {Gaming}
    </div>
  )
}

export default Gaming